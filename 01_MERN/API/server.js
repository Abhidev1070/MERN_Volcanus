import express from 'express'
import bodyParser from 'express'
import  mongoose from 'mongoose';
import productRouter from './Routes/product.js'
import cors from 'cors'
import UserRouter from "./Routes/user.js"


const app = express();
app.use(bodyParser.json());

app.use(
    cors({
        origin:true,
        methods:["GET","POST","PUT","DELETE"],
        credentials:true,
    })
)

// product  router 
app.use("/api/product",productRouter)

//user router

app.use("/api/user",UserRouter);


mongoose.connect(
    "mongodb+srv://abhishekdewda506:MXWurebfyu8jwMMv@cluster0.xgoctrv.mongodb.net/",{
        dbName: "Volcanus_MERN_E_Commerce"
        
    }
).then(()=>console.log("mongoose connect is successfully")).catch((err)=>console.log(err))

const port =5000;
app.listen(port,()=>console.log(`server is running ${port}`))