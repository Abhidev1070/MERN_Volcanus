import express from 'express';
import mongoose  from 'mongoose';

mongoose.connect('mongodb+srv://abhishekdewda506:MXWurebfyu8jwMMv@cluster0.xgoctrv.mongodb.net/',{
    dbName:'MERM_Abhi'
}).then(()=>console.log('MongoDB connted successfully'))
.catch((err)=>console.log(err))
const app =express();


app.listen(1000,()=>console.log('this is server'))