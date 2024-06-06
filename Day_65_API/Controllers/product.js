import { Products } from "../Models/Products.js";

export const addProduct =  async (req,res)=>{
    const {title,description,price,qty,imgSrc,category}=req.body;

    // add product 

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

// get product by id 
export const getProductById =async (req,res)=>{
    const id = req.params.id;

    let product = await Products.findById(id)
    res.json({massage:'product  By Id  ',product})

    
}


// update product by id 
export const updateById =async (req,res)=>{
    const id = req.params.id;
    let product  = await Products.findByIdAndUpdate(id,req.body,{new:true})
    if(!product) return res.json({massage:"invaild id "});
    res.json({massage: "your  prodcut by ipdate ",product})


}
    


// home
 export const home = async(req,res)=>{
    res.json({massage:"this is home"})
 }