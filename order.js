import { Router } from "express"
import mongoose from "mongoose"

const router = Router()
mongoose.connect("mongodb://localhost:27017/api")

const order = mongoose.model('order', {
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
  }
)

router.get('/', (request, response) => {
    order.find().then(data => {
    response.json(data)
    })
    })

    router.get('/:id', (request, response) => {
      order.findById(request.params.id)
      .then(data => {
      response.json(data)
      })
      .catch((error) => response.json(error))
      })


router.put('/',(request, response) => {
        order.create({name:request.body.name, price:request.body.price, quantity:request.body.quantity, totalPrice:request.body.totalPrice, customerName:request.body.customerName, address:request.body.address})
        .then(() => response.json({created:true}))
        .catch(() => response.json({created:false}))
    })
    

export default router