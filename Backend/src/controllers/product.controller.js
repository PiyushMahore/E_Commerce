import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import { Products } from "../models/products.model.js";

const addProduct = asyncHandler(async (req, res) => {
    const { title, images, mrp, sellingPrice, category, options, descriptions } = req.body;

    if ([title, images, mrp, sellingPrice, descriptions].some((field) => field === "")) {
        throw new apiError(400, "Incomplete product details")
    }

    const product = await Products.create({ title, images, mrp: mrp.toFixed(2), sellingPrice: sellingPrice.toFixed(2), category: category || "", options: options || [], descriptions });

    if (!product) {
        throw new apiError(500, "Unable to add product");
    }

    return res
        .status(200)
        .json(new apiResponse(200, product, "Product Added successfully"));
});

const getSingleProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params

    if (!productId) {
        throw new apiError(400, "Product id invalid")
    }

    const product = await Products.findById(productId);

    if (!product) {
        throw new apiError(500, "Failed to get product with this product id");
    }

    return res
        .status(200)
        .json(new apiResponse(200, product, "Product fetched successffully"));
});

const getAllProduct = asyncHandler(async (_, res) => {
    const products = await Products.find();

    if (!products) {
        throw new apiError(500, "Unable to get products");
    }

    return res
        .status(200)
        .json(new apiResponse(200, products, "Products fetched successfully"));
})

export { addProduct, getSingleProduct, getAllProduct }