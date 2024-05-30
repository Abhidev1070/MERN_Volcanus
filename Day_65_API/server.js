import express from 'express'
import mongoose, { Mongoose, connect } from 'mongoose';

const app = express();
// home route

app.get('/',(req,res)=>{
    const product =[
        {id:1,title:"Iphon 15",price:150000},
        {id:2,title:"Iphon 14",price:140000},
        {id:3,title:"Iphon 13",price:130000},
        {id:4,title:"Iphon 12",price:120000},
    ]
    res.json({Messaagr:" this is mern conncet APLS",product})
})



Mongoose,connect(
    "mongodb+srv://abhishekdewda506:MXWurebfyu8jwMMv@cluster0.xgoctrv.mongodb.net/",{
        dbName: "Volcanus_MERN_E_Commerce"
        
    }
).then(()=>console.log("mongoose connect is successfully")).catch((err)=>console.log(err))

const port =1000;
app.listen(port,()=>console.log(`server is running 1000${port}`))