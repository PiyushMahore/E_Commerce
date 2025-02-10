import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Order } from "../models/order.model.js";
import { sendOrderConfirmation } from "../utils/orderGmail.js";

const placeOrder = asyncHandler(async (req, res) => {
    const { address, city, zipCode, product, quantity, price } = req.body;

    if ([address, city, zipCode, product, quantity, price].some((field) => field?.trim() == "")) {
        throw new apiError(400, "Incomplete details failed to place order");
    }

    const user = await User.findById(req.user);

    if (!user) {
        throw new apiError(400, "You are not logged in please login first.");
    }

    const orderDetails = {
        email: "piyushmahore48@gmail.com",
        customerName: `${user.firstName} ${user.lastName}`,
        productName: product,
        quantity: quantity,
        price: price,
        address: address,
        city: city,
        zipcode: zipCode,
    }

    const mail = await sendOrderConfirmation(orderDetails);

    if (!mail) {
        throw new apiError(500, "Failed to place order please try again later.");
    }

    console.log(mail);

    const order = await Order.create({ product, address, city, quantity, orderdBy: req.user, zipCode, totalAmount: price * quantity });

    if (!order) {
        throw new apiError(500, "Failed to place order. Please try again");
    }

    return res
        .status(200)
        .json(new apiResponse(200, order, "Order added successfully"));
});

export { placeOrder };