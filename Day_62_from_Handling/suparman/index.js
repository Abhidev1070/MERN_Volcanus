import { error } from 'console';
import {readFile,writeFile,appendFile,mkdir,readdir} from 'fs/promises'
// const readdirContext =async(filapath)=>{
//     try{
//         await readFile(filapath);
//     }
//     catch{
//         console.log(Error);

//     }

// }
// await readFile(`innter is tha Readfile `)
   
// const appendFile1 = async(filepath)=>{
//     await appendFile (filepath,content)
//     console.log('new context add ');
// }

// await appendFile1('text.php','This is my anot')

const readdirA =async(e) =>{
    const Abhi = await readdir(e)
    console.log(Abhi)
}
await readdirA ('Superman')


