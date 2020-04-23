import { Router } from "express"
import mongoose from "mongoose"

const router = Router()
mongoose.connect("mongodb://localhost:27017/api")

const shoppingcart = mongoose.model('shoppingcart', {
    name: {
      type: String,
    },
    productId: {
      type: String,
    },
    quantity: {
      type: Number
    }
  }
)

router.post('/post',(request, response) =>{
    shoppingcart.create({name:request.body.name, productId:request.body.productId, quantity:request.body.quantity})
    .then(() => response.json({created:true}))
    .catch(() => response.json({created:false}))
    })
    
router.get('/', (request, response) => {
    shoppingcart.find().then(data => {
    response.json(data)
    })
    })

router.put('/',(request, response) => {
        shoppingcart.create({name:request.body.name, productId:request.body.productId, quantity:request.body.quantity})
        .then(() => response.json({created:true}))
        .catch(() => response.json({created:false}))
    })

router.delete('/:id', (request, response) => {
shoppingcart.findByIdAndDelete(request.params.id)
.then((response) => {
    response.json({deleted: true})
})
.catch((error) => response.json(error))
    })

router.patch('/:id', (request, response) => {
  const updateData = {}
  for (let field of ['name', 'productId', 'quantity']) {
    console.log(request.body[field],request.body,field)
    if (request.body[field]){
      updateData[field]= request.body[field]
    }
  }
console.log(updateData)

  shoppingcart.findByIdAndUpdate(request.params.id, updateData)
  .then((response) => {
      response.json({updated: true})
  })
  .catch((error) => response.json(error))
      })

export default router