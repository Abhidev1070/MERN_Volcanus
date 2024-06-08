import express from 'express'
import { addProduct,getAllProduct,getProductById,deleteById,updateById} from '../Controllers/Product.js';

const router = express.Router();

// add product 
router.post("/add",addProduct);

// get All  product 
router.get("/getAll",getAllProduct);


// get product
router.get("/:id",getProductById);

// delete 
router.delete("/:id",deleteById)

// update 
router.put("/:id",updateById)


export default router;