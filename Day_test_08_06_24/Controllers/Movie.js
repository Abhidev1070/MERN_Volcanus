import { Movies } from "../Models/Movies.js";
export const addMovies =  async (req,res)=>{
    const {title,acter,releoreData,imdb,imgSrc,category,}=req.body;

    // add movie

    let movie = await Movies.create({
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
        movie
    })
} 

// get All product  

export const getAllMovie =async(req,res)=>{
    try{
        let movie = await Movies.find()
        res.json({message:"All product",movie});
    }
    catch (error){
        res.json( {massage: error.massage,success:false})
        
     }
}

// get product by id 

export const getMovieById =async (req,res)=>{
    const id = req.params.id;
    let movie = await Movies.findById(id)

    res.json({massage:'product  By Id ',movie})

    
}

// delete 

export const deleteById =async (req,res)=>{
    const id = req.params.id;
    let movie = await Movies.findByIdAndDelete(id)

    if(!movie) return res.json({massage:"invaild id "});

    res.json({massage:'product  By Id belete '})
    
}
// updeta

export const updateById =async (req,res)=>{
    const id = req.params.id;
    let movie = await Movies.findByIdAndUpdate(id,req.body,{new:true})

    if(!movie) return res.json({massage:"invaild id "});

    res.json({massage:'product  By Id belete '})

    
}


