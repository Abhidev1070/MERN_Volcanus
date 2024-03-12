// let Name="Abhishek";


// const person ={
//     Name : 'Ram',
//     salary:2536.14,
//     display:()=>{console.log(`${Name},${this.salary}`)}
// }
// console.log(person);
// console.log(person.display());

/// oops 
// const user ={
//     username: 'Abhi',
//     loginCount:8,
//     signedIn:true,
//     getUserDetails:function (){
//         // console.log("got user details from database");
//         // console.log(`Username:${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// // console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    // return this 
}

const userOne = new User("Abhi",12,true);
const userTwo = new User("ram",19,false);

console.log(userOne);
console.log(userTwo);






