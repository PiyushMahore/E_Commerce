import { Router } from "express";
import { addToCart, getAllCartItems, increaseItemQuentity, removeFromCart } from "../controllers/cart.controller.js";
import verifyJwt from "../middlewares/verifyJwt.middleware.js";

export const cartRouter = Router();

cartRouter.route("/add-to-cart").post(verifyJwt, addToCart);

cartRouter.route("/remove-from-cart/:itemId").delete(removeFromCart);

cartRouter.route("/get-all-cart-items").get(verifyJwt, getAllCartItems);

cartRouter.route("/increase-quentity").patch(increaseItemQuentity);