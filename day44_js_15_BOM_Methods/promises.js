//promises has 3 stage

//1 pending 
//2 fullfill -->resolve -->.then
//3 reject  -->reject -->.catch

let gourav = 100
let ashish = 1000
const P = new promise ((resolve,reject)=>{
    let rupess = gourav-ashish
    if(ashish>gourav){
        resolve("thik bhi de duga")
    }
    else{
        reject("This is my backup plan ")
    }
}) ;
P.then((msg)=>console.log(msg))
// P.then((msg)=>console.log(msg.data)).cathch((msg)=>console.log(msg));



