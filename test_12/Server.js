import express from 'express'
const server = express();


const user=[];

server.get( '/',(req,res)=>{
    res.render('./Register.ejs')

})
server.get( '/Login.ejs',(req,res)=>{
    res.render('./Login.ejs')

})
server.get('/Wlc.ejs',(req,res)=>{
    res.render('./Wlc.ejs')

})
// app.post('/Wlc.ejs',(req,res)=>{
//         console.log(req.body);
        
//         res.render('./Wlc.ejs');
//     })

server.get('/Add.ejs',(req,res)=>{
    res.render('./Add.ejs')

})




const port = 1000;
server.listen(port,()=>console.log(`server is running on ${port}`))

// server.listen(1000,()=>console.log(`Servre is running on 1000`))