import {Router} from "express"
import mongoose from "mongoose"

const router = Router()
mongoose.connect("mongodb://localhost:27017/api")

const categories = mongoose.model('categories', {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        categoryId: {
          type: Number
        }
      }

)

router.post('/post',(request, response) =>{
categories.create({name:request.body.name, description:request.body.description, categoryId:request.body.categoryId})
.then(() => response.json({created:true}))
.catch(() => response.json({created:false}))
})

router.get('/get', (request, response) => {
    categories.find().then(data => {
        response.json(data)
})
})

export default router