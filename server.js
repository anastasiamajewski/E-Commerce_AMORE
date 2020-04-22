import express from "express"
import bodyParser from 'body-parser'
import productRoutes from "./product-api"
import categoryRoutes from "./category-api"

const server = express()
server.use(bodyParser.urlencoded({extended: true}));

server.use("/Products", productRoutes)
server.use("/Categories", categoryRoutes)

server.listen(8080);
