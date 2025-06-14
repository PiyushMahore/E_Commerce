import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ limit: "20kb", extended: true }));
app.use(cookieParser());

import { userRoute } from "./routes/user.routes.js";
import { orderRoute } from "./routes/order.routes.js";
import { productRoute } from "./routes/product.routes.js";
import { cartRouter } from "./routes/cart.routes.js";

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRoute);