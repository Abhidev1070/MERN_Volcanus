import express from 'express'
import { addProduct,getAllProduct, home,getProductById,updateById,deleteById } from '../Controllers/product.js';

const router = express.Router();

// add product 
//@method -post 
//@route-// api/product/add
router.post("/add",addProduct); 

// aget product 
//@method -get
//@route-// api/product/get

router.get("/get",getAllProduct) // api/product/get


// get product by id  
//@method - get 
//@route-// api/product/get
router.get("/detail/:id",getProductById)


// update product by id  
//@method - put 
//@route-// api/product/id
router.put("/:id",updateById)

// daleteById product by id  
//@method - delete
//@route-// api/product/id
router.delete("/:id",deleteById)

//home product 
//@method -home 
//@route-// api/product/home
router.get("/home",home) // api/product/home

export default router;