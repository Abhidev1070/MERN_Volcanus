import express from 'express'

const app = express();
app.use(express.urlencoded({extended:true}))
// app.get("/",(req,res)=>{
//     res.render("./index.ejs")
// });
// app.get("/",(req,res)=>{
//     res.render("./app.ejs")
// }); 
// app.post('/',(req,res)=>{
//     // console.log(req.body);
//     const {name,email} =req.body; 
//     res.render('./app.ejs',{name,email});
// })

app.get( '/',(req,res)=>{
    res.render('./Login.ejs')

})

app.listen(1000,()=>console.log(`server is runing on port 1000`))