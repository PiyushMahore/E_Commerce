import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    quentity: {
        type: Number,
        default: 1
    },
    mrp: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

export const Cart = mongoose.model("Cart", cartSchema);