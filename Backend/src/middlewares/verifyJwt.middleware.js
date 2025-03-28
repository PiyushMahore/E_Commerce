import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const verifyJwt = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies.RefreshToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new apiError(400, "User not logged in!");
        }

        const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN);

        if (!decodedToken) {
            throw new apiError(500, "Server not responding please try after some time.");
        }

        req.user = decodedToken;
        next();
    } catch (error) {
        throw new apiError(400, "Somthing went wrong while getting current user")
    }
});

export default verifyJwt;
