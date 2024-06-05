import { Products } from "../Models/Products.js";

export const addProduct =  async (req,res)=>{
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
} 

// get All product  

export const getAllProduct =async(req,res)=>{
    try{
        let product= await Products.find().sort({createAt:-1})
        res.json({message:"All product",product});
    }
    catch (error){
        res.json( {massage: error.massage,success:false})
        
     }
}

// home
 export const home = async(req,res)=>{
    res.json({massage:"this is home"})
 }