import { Router } from "express";
import { addProduct, getAllProduct, getSingleProduct } from "../controllers/product.controller.js";

export const productRoute = Router();

productRoute.route('/add').post(addProduct);

productRoute.route('/get-one/:productId').get(getSingleProduct);

productRoute.route('/get-all').get(getAllProduct);