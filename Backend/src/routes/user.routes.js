import { Router } from "express";
import { addAddress, addCity, addZipCode, getCurrentUser, login, logOut, signUp } from "../controllers/user.controller.js";
import verifyJwt from "../middlewares/verifyJwt.middleware.js";

export const userRoute = Router();

userRoute.route("/sign-up").post(signUp);

userRoute.route("/login").post(login);

userRoute.route("/get-current-user").get(verifyJwt, getCurrentUser);

userRoute.route("/log-out").patch(verifyJwt, logOut);

userRoute.route("/add-address/:userId").patch(addAddress);

userRoute.route("/add-city/:userId").patch(addCity);

userRoute.route("/add-zip-code/:userId").patch(addZipCode);
