import { Router } from "express";
import { categories } from "./models";

const router = Router();

router.post("/", (request, response) => {
  categories
    .create({
      name: request.body.name,
      description: request.body.description,
      categoryId: request.body.categoryId,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

router.get("/", (request, response) => {
  categories.find().then((data) => {
    response.json(data);
  });
});

export default router;
