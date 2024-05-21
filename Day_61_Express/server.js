import express from "express";

const app = express();

//CRUD = > Create read updata  delete
//C => Create => PSOT
// R => Read => Get {U can access from browser as well }
// U => updata => PUT 
// D => detete


const products =[
    {id:1, title:'i phone 14',price:'120000'},
    {id:2, title:'i phone 15',price:'130000'},
    {id:3, title:'i phone 16',price:'140000'},
    {id:4, title:'i phone 17',price:'160000'},
]
app.get("/product", (req,res)=>{

    res.json(products)
})
app.post('/add',(req,res)=>{
    const product ={id:Math.random(),title:'sony x',price:'20000'}
    products.push(product)
    res.json({message:" your product has been ",product})
})

app.put('/:id',(req,res)=>{
    const productId = req.params.id
    const updataData = {title:"New gen phone ",price:3000};
    let i 
    for(i=0; i<products.length;i++){
        if(productId == products[i].id){
            (products[i].title = updataData.title),
            (products[i].price = updataData.price),
            i=0;
            break;
        }
    }
    if(i==products.length)return res.json({massage:"Invalid id "});
    res.json({massage:"your product has been updata",products})
})

app.delete('/:id',(req,res)=>{
    const id = req.params.id;
    // console.log(deleteDelete);
    let newproduct = products.filter((data)=>data.id != id)
    res.json({massage:" data to delete",newproduct})
})

const port = 1000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))