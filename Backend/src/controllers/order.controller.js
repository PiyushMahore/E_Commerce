import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Order } from "../models/order.model.js";
import { sendOrderConfirmation } from "../utils/orderGmail.js";
import Razorpay from "razorpay";
const instance = new Razorpay({ key_id: `${process.env.ROZARPAY_APIKEY}`, key_secret: `${process.env.ROZARPAY_API_SECRET}` })

const placeOrder = asyncHandler(async (req, res) => {
    const { address, city, zipCode, product, quantity, price } = req.body;
    const order = await instance.orders.create({
        amount: price,
        currency: "INR",
    });

    return res
        .status(200)
        .json(new apiResponse(200, order, "Order generated successfully."));
});

export { placeOrder };