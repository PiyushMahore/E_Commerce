import { Router } from "express";
import { placeOrder } from "../controllers/order.controller.js";
import verifyJwt from "../middlewares/verifyJwt.middleware.js";

export const orderRoute = Router();

orderRoute.route("/place-order").post(verifyJwt, placeOrder);