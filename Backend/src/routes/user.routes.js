import { Router } from "express";
import { getCurrentUser, login, logOut, signUp } from "../controllers/user.controller.js";
import verifyJwt from "../middlewares/verifyJwt.middleware.js";

export const userRoute = Router();

userRoute.route("/sign-up").post(signUp);

userRoute.route("/login").post(login);

userRoute.route("/get-current-user").get(verifyJwt, getCurrentUser);

userRoute.route("/log-out").patch(verifyJwt, logOut);
