import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export const Order = mongoose.model("Order", orderSchema);