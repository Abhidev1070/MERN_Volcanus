import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
const app = express();
app.use(express.urlencoded({ extended: true } ));
const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})
const User = mongoose.model("user ",userSchema);

app.get('/',(req,res)=>{
    res.render('register.ejs')

})
app.post('/',async(req,res)=>{
    let user =await User.create(req.body)
    console.log(user);
    res.redirect('/login')
})
//r
app.get('/login',(req,res)=>{
    res.render('login.ejs')
    

})
app.post('/login',async(req,res)=>{
    const {email,password} = req.body
    // console.log(email,password);

    let user = User.findOne({email})

    if(!user) return res.json({massage:"user is not exist"})

        if(user.password!=password) return res.json({Massage:'Invelid credentials'})


    res.render('welcome.ejs',{user})
})


app.get('/welcome',(req,res)=>{
    res.render('welcome.ejs')
    

})
mongoose.connect(
    "mongodb+srv://abhishekdewda506:MXWurebfyu8jwMMv@cluster0.xgoctrv.mongodb.net/",{
        dbName:"MERN_Volcanus_2"
    
    }
).then(()=>console.log("mongoose !")).catch((err)=>console.log(err))

app.listen(2000,()=>console.log('server is running on 1000'));
