import express from 'express'
import bodyParser from 'express'
import  mongoose from 'mongoose';
import {Products} from './Models/Products.js'

const app = express();
app.use(bodyParser.json())
// home route

app.get('/',(req,res)=>{
    const product =[
        {id:1,title:"Iphon 15",price:150000},
        {id:2,title:"Iphon 14",price:140000},
        {id:3,title:"Iphon 13",price:130000},
        {id:4,title:"Iphon 12",price:120000},
    ]
    res.json({Messaagr:" this is mern conncet APL'S",product})
})

//add product 
app.post('/product/add', async (req,res)=>{
    const {title,description,price,qty,imgSrc,category}=req.body;

    let product = await Products.create({
        title,
        description,
        price,
        qty,
        imgSrc,
        category,
    })

    res.json({
        massage:"your product has been add ",
        success:true,
        product
    })
});

//get products 


app.get("/product/get",async(req,res)=>{
    try{
        let product= await Products.find().sort({createAt:-1})
        res.json({message:"All product",product});
    }
    catch (error){
        res.json( {massage: error.massage,success:false})
        
     }
})



mongoose.connect(
    "mongodb+srv://abhishekdewda506:MXWurebfyu8jwMMv@cluster0.xgoctrv.mongodb.net/",{
        dbName: "Volcanus_MERN_E_Commerce"
        
    }
).then(()=>console.log("mongoose connect is successfully")).catch((err)=>console.log(err))

const port =1000;
app.listen(port,()=>console.log(`server is running ${port}`))