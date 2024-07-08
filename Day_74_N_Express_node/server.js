import express from "express"

const app = express();

const product=[
    {id:1,title:"Iphon 15",price:70000},
    {id:2,title:"Iphon 14",price:60000},
    {id:3,title:"Iphon 13",price:50000},
];
// const product2=[
//     {id:1,title:"Iphon 15",price:70000},
//     {id:1,title:"Iphon 14",price:60000},
//     {id:1,title:"Iphon 13",price:50000},
// ];


// C = create =>port
///R = read =>get
// U=Update =>put
// D =delete=>delete


//get
app.get("/",(req,res)=>{
    res.json({message:"All product",product})
});

// add product 
app.post("/",(req,res)=>{
    const obj= {id:product.length+1,title:"Nokie 3310",price:2000}
    product.push(obj);
    res.json({message:"your product has been asses..!",product})
    
})



const port = 8000;
app.listen(port,()=>console.log(` server is runing on port http://localhost:${port}`))