import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import { Products } from "../models/products.model.js";

const addProduct = asyncHandler(async (req, res) => {
    const { title, images, mrp, sellingPrice, category, options, descriptions } = req.body;

    if ([title, images, mrp, sellingPrice, descriptions].some((field) => field === "")) {
        throw new apiError(400, "Incomplete product details")
    }

    const product = await Products.create({ title, images, mrp, sellingPrice, category: category || "", options: options || [], descriptions });

    if (!product) {
        throw new apiError(500, "Unable to add product");
    }

    return res
        .status(200)
        .json(new apiResponse(200, product, "Product Added successfully"));
});

export { addProduct }