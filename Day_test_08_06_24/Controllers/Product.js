import { Products } from "../Models/Products.js";
export const addProduct =  async (req,res)=>{
    const {title,acter,releoreData,imdb,imgSrc,category,}=req.body;

    // add product 

    let product = await Products.create({
        title,
        acter,
        releoreData,
        imdb,
        imgSrc,
        category,
    })

    res.json({
        massage:" your movie has been ",
        success:true,
        product
    })
} 

// get All product  

export const getAllProduct =async(req,res)=>{
    try{
        let product= await Products.find()
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

    res.json({massage:'product  By Id ',product})

    
}

// delete 

export const deleteById =async (req,res)=>{
    const id = req.params.id;
    let product = await Products.findByIdAndDelete(id)

    if(!product) return res.json({massage:"invaild id "});

    res.json({massage:'product  By Id belete '})
    
}
// updeta

export const updateById =async (req,res)=>{
    const id = req.params.id;
    let product = await Products.findByIdAndUpdate(id,req.body,{new:true})

    if(!product) return res.json({massage:"invaild id "});

    res.json({massage:'product  By Id belete '})

    
}


