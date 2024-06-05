import express from 'express'
import { addProduct,getAllProduct, home } from '../Controllers/product.js';

const router = express.Router();

// add product 

router.post("/add",addProduct); // api/product/add
router.get("/get",getAllProduct)
router.get("/home",home) // api/product/home

export default router;