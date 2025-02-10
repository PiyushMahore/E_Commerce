import { User } from "../models/user.model.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const cookieOptions = {
    httpOnly: true,
    secure: true
};

const generateAccessRefreshToken = async (_id) => {
    if (!_id) return null;

    const user = await User.findById(_id);

    if (!user) {
        throw new apiError(404, "User not found");
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    if (!accessToken || !refreshToken) {
        throw new apiError(500, "Unable to generate access or refresh token!");
    }

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
}

const signUp = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, address, city, zipCode } = req.body;

    if ([firstName, lastName, email, password].some((field) => field?.trim() === "")) {
        throw new apiError(400, "Some required field are empty.");
    }

    const isAlreadyExist = await User.findOne({ email });

    if (isAlreadyExist) {
        throw new apiError(406, "This email is alredy taken please retry with another email.");
    }

    const user = await User.create({ firstName, lastName, email, password });

    if (!user) {
        throw new apiError(500, "Failed to sign Up, Pleasy retry again after some time.");
    }

    const { accessToken, refreshToken } = await generateAccessRefreshToken(user._id);

    if (address !== "") {
        user.address = address;
    }

    if (zipCode !== "") {
        user.zipCode = zipCode;
    }

    if (city !== "") {
        user.city = city;
    }

    await user.save({ validateBeforeSave: false });

    return res
        .status(200)
        .cookie("RefreshToken", refreshToken, cookieOptions)
        .cookie("AccessToken", accessToken, cookieOptions)
        .json(new apiResponse(201, user, "User sign up successfully."));
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new apiError(400, "Email or Password is required.");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new apiError(404, "User with this email not found.");
    }

    const isPassCorrect = await user.checkPass(password);

    if (!isPassCorrect) {
        throw new apiError(401, "The given password is incorrect.");
    }

    const { accessToken, refreshToken } = await generateAccessRefreshToken(user._id);

    return res
        .status(200)
        .cookie("RefreshToken", refreshToken, cookieOptions)
        .cookie("AccessToken", accessToken, cookieOptions)
        .json(new apiResponse(201, user, "User login successfully."));
});

const getCurrentUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user).select("-refreshToken -password -createdAt -updatedAt -__v");

    if (!user) {
        throw new apiError(500, "Failed to find current user try again after some time");
    }

    return res
        .status(200)
        .json(new apiResponse(200, user, "user fetched successfully."));
});

const logOut = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user, {
        $unset: {
            refreshToken: 1
        }
    }, {
        new: true
    });

    return res
        .status(200)
        .clearCookie("RefreshToken", cookieOptions)
        .clearCookie("AccessToken", cookieOptions)
        .json(new apiResponse(200, [], "User logged out."));
});

export { signUp, login, getCurrentUser, logOut };