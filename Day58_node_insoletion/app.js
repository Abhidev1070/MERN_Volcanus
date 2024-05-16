// console.log("we aer learning node js right now ");
// Bson 
// Json
 export const avgCalulator  =(arr)=>{
    let avg;
    let sum =0;
    let length  = arr.length;
    for (let element of arr ){
        sum += element;
    }
    avg =sum/length;
    return avg;
}



