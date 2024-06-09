import express from 'express'
import { getMovieById,deleteById,updateById, getAllMovie, addMovies} from '../Controllers/Movie.js';

const router = express.Router();

// add product 
router.post("/add",addMovies);

// get All  product 
router.get("/getAll",getAllMovie);


// get product
router.get("/:id",getMovieById);

// delete 
router.delete("/:id",deleteById)

// update 
router.put("/put",updateById)


export default router;