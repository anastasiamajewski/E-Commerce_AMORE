import express from "express"
import bodyParser from 'body-parser'
import productRoutes from "./product-api"
import categoryRoutes from "./category-api"
import shoppingcartRoutes from "./shoppingcart"
import orderRoutes from "./order"

const server = express()
server.use(bodyParser.json({extended: true}));
server.use(bodyParser.urlencoded({extended: true}));

server.use("/products", productRoutes)
server.use("/categories", categoryRoutes)
server.use("/shoppingcart", shoppingcartRoutes)
server.use("/order", orderRoutes)

server.listen(8080);
