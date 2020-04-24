import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./api-product";
import categoryRoutes from "./api-category";
import shoppingcartRoutes from "./api-shoppingcart";
import orderRoutes from "./api-order";

const server = express();
server.use(cors());
server.use(bodyParser.json({ extended: true }));
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/products", productRoutes);
server.use("/categories", categoryRoutes);
server.use("/shoppingcart", shoppingcartRoutes);
server.use("/order", orderRoutes);

server.listen(8080);
