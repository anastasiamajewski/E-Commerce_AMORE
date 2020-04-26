import { Router } from "express";
import { order, shoppingcart } from "./models";

const router = Router();

router.get("/", (request, response) => {
  order.find().then((data) => {
    response.json(data);
  });
});

router.get("/:id", (request, response) => {
  order
    .findById(request.params.id)
    .then((data) => {
      response.json(data);
    })
    .catch((error) => response.json(error));
});

router.put("/:id", (request, response) => {
  shoppingcart
    .findById(request.params.id)
    .then(() => {
      order.create(request.body);
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

// router.put("/", (request, response) => {
//   order
//     .create({
//       name: request.body.name,
//       price: request.body.price,
//       quantity: request.body.quantity,
//       totalPrice: request.body.totalPrice,
//       customerName: request.body.customerName,
//       address: request.body.address,
//     })
//     .then(() => response.json({ created: true }))
//     .catch(() => response.json({ created: false }));
// });

export default router;
