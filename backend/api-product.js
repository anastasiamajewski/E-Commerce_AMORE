import { Router } from "express";
import { products } from "./models";

const router = Router();

router.post("/", (request, response) => {
  products
    .create({
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      productId: request.body.productId,
      categoryId: request.body.categoryId,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

router.get("/", (request, response) => {
  products.find().then((data) => {
    response.json(data);
  });
});

export default router;
