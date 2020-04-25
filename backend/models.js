import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/api");

export const categories = mongoose.model("categories", {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const productSchema = {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  categoryId: {
    type: Number,
  },
};

export const products = mongoose.model("products", productSchema);

export const shoppingcart = mongoose.model("shoppingcart", {
  productId: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  product: productSchema,
});

export const order = mongoose.model("order", {
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  customerName: {
    type: String,
  },
  address: {
    type: String,
  },
});
