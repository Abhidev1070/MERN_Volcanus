import { User } from "../Models/User.js";
import bcrypt from 'bcryptjs'

export const register = async(req,res)=>{
    const {Name,email,password}=req.body;

    let user = await User.findOne({email})
    if(user)
        return res.json({maessage:"user already Registerd...",success:false});

    let hashPassword = await bcrypt.hash(password,10)


    user =await User.create({Name,email,password:hashPassword});
    res.json({message:"user register succeful",success:true,user})
}

export const login =async(req,res)=>{ 
    const {email,password}=req.body;
    let user = await User.findOne({email});

    if(!user)returnres.json({maessage:"user not exist",success:false})

        let validPass = await bcrypt.compare(password,user.password);

        if(!validPass)return res.json({maessage:"invalid Credential",success:false});
        res.json({maessage:`Welcome ${user.Nmae}`,success:true});

}