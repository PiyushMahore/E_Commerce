import { Cart } from "../models/cart.model.js";
import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";

const addToCart = asyncHandler(async (req, res) => {
    const { title, thumbnail, quentity, mrp, sellingPrice, productId } = req.body;

    if ([title, thumbnail, quentity, mrp, sellingPrice, productId].some((field) => field?.trim() === "")) {
        throw new apiError(400, "Incomplete Product Details");
    }

    const isAlreadyExist = await Cart.findOne({ productId });

    if (isAlreadyExist) {
        isAlreadyExist.quentity = quentity;
        await isAlreadyExist.save({ validateBeforeSave: false });
        return res
            .status(200)
            .json(new apiResponse(200, isAlreadyExist, "Alredy Exist in cart"));
    }

    const cart = await Cart.create({ userId: req.user._id, title, thumbnail, quentity, mrp, sellingPrice, productId });

    if (!cart) {
        throw new apiError(500, "Failed to add to cart");
    }

    return res
        .status(200)
        .json(new apiResponse(200, cart, "item added to cart"));
});

const removeFromCart = asyncHandler(async (req, res) => {
    const { itemId } = req.params;

    if (!itemId) {
        throw new apiError(400, "item id required");
    }

    const item = await Cart.findByIdAndDelete(itemId);

    if (!item) {
        throw new apiError(500, "Failed to remove from cart");
    }

    return res
        .status(200)
        .json(new apiResponse(200, [], "Item removed from cart successfully"));
});

const getAllCartItems = asyncHandler(async (req, res) => {
    const { userId } = req.user;

    if (!userId) {
        throw new apiError(400, "user id is null");
    }

    const items = await Cart.find({ userId: userId });

    if (items.length < 1) {
        throw new apiError(500, "Failed to fetch cart items")
    }

    return res
        .status(200)
        .json(new apiResponse(200, items, "Cart items fetch successfully"));
});

const increaseItemQuentity = asyncHandler(async (req, res) => {
    const { quentity, itemId } = req.body;

    if (!quentity || !itemId) {
        throw new apiError(400, "Quentity can not be null");
    }

    const item = await Cart.findByIdAndUpdate(itemId, {
        quentity
    }, { new: true });

    if (!item) {
        throw new apiError(500, "Failed to increase quentity");
    }

    return res
        .status(200)
        .json(new apiResponse(200, item, "quentity increased successfully"));
});

export { addToCart, removeFromCart, getAllCartItems, increaseItemQuentity };