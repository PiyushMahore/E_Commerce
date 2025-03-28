import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: {
        type: [],
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    options: {
        type: []
    },
    descriptions: {
        type: [],
        required: true
    }
});

export const Products = mongoose.model("Products", productSchema);