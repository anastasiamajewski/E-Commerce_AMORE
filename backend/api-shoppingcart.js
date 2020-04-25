import { Router } from "express";
import { shoppingcart, products } from "./models";

const router = Router();

router.get("/", (request, response) => {
  shoppingcart.find().then((data) => {
    response.json(data);
  });
});

router.post("/", (request, response) => {
  products
    .findById(request.body.productId)
    .then((product) => {
      shoppingcart.create({
        product: product,
        name: request.body.name,
        productId: request.body.productId,
        quantity: request.body.quantity,
      });
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

router.patch("/:id", (req, res) => {
  shoppingcart
    .findByIdAndUpdate(req.params.id, {
      quantity: req.body.quantity,
    })
    .then(() => res.json({ updated: true }));
});

// router.patch("/:id", (request, response) => {
//   const updateData = {};
//   for (let field of ["name", "productId", "quantity"]) {
//     console.log(request.body[field], request.body, field);
//     if (request.body[field]) {
//       updateData[field] = request.body[field];
//     }
//   }
//   shoppingcart
//     .findByIdAndUpdate(request.params.id, updateData)
//     .then((response) => {
//       response.json({ updated: true });
//     })
//     .catch((error) => response.json(error));
// });

router.delete("/:id", (request, response) => {
  shoppingcart
    .findByIdAndDelete(request.params.id)
    .then(() => {
      response.json({ deleted: true });
    })
    .catch((error) => response.json(error));
});

export default router;
