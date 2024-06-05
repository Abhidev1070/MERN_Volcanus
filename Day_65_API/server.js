import express from 'express'
import bodyParser from 'express'
import  mongoose from 'mongoose';
import productRouter from './Routes/product.js'


const app = express();
app.use(bodyParser.json())

// product  router 
app.use("/api/product",productRouter)


mongoose.connect(
    "mongodb+srv://abhishekdewda506:MXWurebfyu8jwMMv@cluster0.xgoctrv.mongodb.net/",{
        dbName: "Volcanus_MERN_E_Commerce"
        
    }
).then(()=>console.log("mongoose connect is successfully")).catch((err)=>console.log(err))

const port =1000;
app.listen(port,()=>console.log(`server is running ${port}`))