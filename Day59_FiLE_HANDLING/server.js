import {readFile,writeFile,appendFile,mkdir,readdir} from "fs/promises"
// import path from "path";

// reading a file 
const readFileCantent = async (filePath)=>{
    try{
        const data = await readFile(filePath,'utf-8')
        console.log(data);
    } catch(error){
        console.log(error);
    }

} 
// readFileCantent("./supeeman.txt")

//wright a file

const wrightToFile = async(filePath,content)=>{
    try{
        const data = await writeFile(filePath,content);
        console.log("successfully");
    }
    catch (error){
        console.log(error);
    }

}
// wrightToFile('./test.php','This tha');

// append file

const appendToFile = async (filePath,content)=>{
    try{
        const data = await appendFile(filePath,content);
        
    }
    catch (error){
        console.log(error);
    }

}
// appendToFile('./supeman.php','The Abhishek')

// make directories

const makedir = async (adderess)=>{
    try{
        await mkdir(adderess,{recursive:true})
    }
    catch (error){
        console.log(error); 
    }
}
// makedir('components/about')
// wrightToFile('./com/Home/Layout.jsx','This tha');
// makedir('com/Home')

const readDir =async(adderess)=>{
     const data =  await readdir(adderess)
     console.log(data);

}
// readDir('./components/about')


import path from "path";

const fullPath = path.join('/path','index.py','fill.java')
// console.log(fullPath);

const absolutePath = path.resolve()
// console.log(absolutePath);

// const  = path.resolve()

// let file = "Abhi.pdf"
// const value = path.extname(file)
// if(value != ".pdf" && value != ".jpg" && value != ".png "){
//     console.log("you file not supported")
    
// }
// else{
//     console.log("supported ",value);
// }
