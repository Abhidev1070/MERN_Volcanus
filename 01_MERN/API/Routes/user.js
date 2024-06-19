import express from "express"
import { register,login } from "../Controllers/user.js"

const router = express.Router();
//rgister
router.post("/register",register)
// login user
router.post("/login",login)

export default router