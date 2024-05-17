// console.log("Abhishek");

import http from 'http'
// console.log(http);

const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url == '/'){
        // console.log("User is requsting for home route");
        res.end("Thanku for requesting")
    }
    else if (req.url == '/suprman'){
        // console.log("user is suprman ");
        res.end("Thanku for suparman")
    }
    else if(req.url == '/wdm'){
        // console.log("user is wdm ");
        res.end("Thanku for wdm")
    }
});
const port = 1000;
server.listen(port,()=>console.log(`server is running on ${port}`))