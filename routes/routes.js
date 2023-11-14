import { Router } from "express";
import controllers from "../controllers/controllers.js";
import category from '../controllers/category.controller.js'


 const router = Router()

export const myRouter = ()=>{
    router.get('/products/all',controllers.getAllProducts)
    router.get('/products/:id',controllers.getProduct)
    router.post('/products/add',controllers.addProduct)
    router.put('/products/edit/:id',controllers.editProduct)
    router.delete('/products/delete/:id',controllers.deleteProduct)

    //

    router.post('/products/add/category',category.addCategory)
    router.get('/products/category/all',category.getCategories)

return router
}


