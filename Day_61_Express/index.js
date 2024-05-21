import express from 'express'
import path from 'path'
const app = express();

app.get('/',(req,res)=>{
    // res.json({massage:"your product has been rouet",})
    // res.send("<h1>you are requeasntd</h1>")
// console.log(path.resolve);
// const dir = path.resolve();
// const url = path.join(dir,"./app.html")
// console.log(url);

const hero = "Abhishek";
const e = {
    name:'Abhi',
    m:100
}

    // res.sendFile(url)
    res.render('./index.ejs',{e})
})
const port =2000;
app.listen(port,()=>console.log(`server is running ${port}`))