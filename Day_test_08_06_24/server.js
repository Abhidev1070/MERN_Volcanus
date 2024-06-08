import express from 'express'
import mongoose from 'mongoose';
import productRouter from './Routes/Product.js';
import bodyParser from 'express'

 const app = express();

 app.use(bodyParser.json())

 app.use("/api/product",productRouter);


 mongoose.connect(
    "mongodb+srv://abhishekdewda506:MXWurebfyu8jwMMv@cluster0.xgoctrv.mongodb.net/",{
        dbName: "Movies"
        
    }
).then(()=>console.log("mongoose connect is successfully")).catch((err)=>console.log(err))

 const port =6000;

 
 app.listen(port,()=>console.log(`server is run http://localhost:${port}`))