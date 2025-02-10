import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const verifyJwt = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.RefreshToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return "user not logged in."
        }

        const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN);

        if (!decodedToken) {
            throw new apiError(500, "Server not responding please try after some time.");
        }

        req.user = decodedToken;
        next();
    } catch (error) {
        console.log("Somthing went wrong while getting current user");
    }
});

export default verifyJwt;
