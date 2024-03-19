// console.log('HELLO Console');
// const user ={
//     username: 'Abhi',
//     age:400,
//     salary:41258,
//     loginCount:8,
//     signedIn:true,
//     getUserDetails:function (){
//         // console.log("got user details from database");
//         // console.log(`Username:${this.username}`);
//         // console.log(this);
//         return this
//     }
// }
// // console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);
// console.log(user);

// const p = new Promise();

// const data = new data ();e

// function product (name,price,quentity){
//    this. name =name ,
//     this.price =price
//     return this

// }
// // console.log(product(macbook,12345678,2));
// const p1 =   new product('macbook',12345678,2);
// const p2 =   new product('hp',258639,9);

// product.prototype.brandName  = 'Apple';
// product.prototype.quentity  = 20;
// product.prototype.price  = 30;
// product.prototype.shell  = function(){
//     return 20;
// }
// console.log(p1.brandName,p1.price);
// console.log(p1.shell());

// console.log(p1);
// console.log(p2);


// class car {
// constructor ( brandName,price,color){
//     this.brandName = brandName
//     this.price=price
//     this.color=color
// }
// display(){
//     console.log(` The Car Brand Name = ${this.brandName} and price-= ${this.price} and color = ${this.color}`);
// }
// }
// class BMW  extends car{
//     constructor(wheels,power,brandName,price,color){
//         super(brandName,price,color)
//         this.wheels =wheels;
//         this.power =power;
//     }
//     display(){
//         console.log(` The Car Brand Name = ${this.brandName} and price-= ${this.price} and color = ${this.color} wheels = ${this.wheels} power = ${this.power}`);
//     }

// }
// // const c1 = new car ("BMW",85974623,"Blue")
// // c1.display()
// const c2 = new BMW ("wheels","power", "BMW",85974623,"Blue");
// c2.display()

 /*const  x = 12 ;
// const x = 12;
const y = 25;
const z = x+y;
console.log(z);*/


// const hero1={
//     name:"Suparman",
//     age:20,
//     salary:450000,
//     gmail:"Suparman@gmail.com"
// }
// console.log(hero1);
///spread Operator [ coping property from any other]
// const hero2={...hero1,name:"Abhishek",universe:"marvel"};
// console.log(hero2);

// const arr1 =[10,20,30]
// const arr2 =[...arr1,40,50,60,]
// console.log(arr2);

// const hero={
//     name:"Suparman",
//     age:20,
//     salary:450000,
//     gmail:"Suparman@gmail.com",
//     post:"MERN Developer"
// }
// const {name,age,gmail}= hero
// console.log(name,age,gmail);

/// loops - for, while,do-while

// const name = "suprman"
// let num=50;
// for ( let i=10;i<=num;i++){
//     if(i%2=== 0){
//         console.log("even",i);
//     }
//     else{
//         console.log("odd",i);
//     }
// }
// let num = 20;
// for(let i=0;i<20; i++){
//     if (num%i===0){
//         console.log(" prime number",i);
//     }
//     else{
//         console.log("not primNumber",i);
//     }
// }
/// for ---> number of Iteration know 
/// while ---> Number of Iteration Unknow 
/// do - while ->> Atleast Run Once 
//// For In -->Key Value {Object}
///for Of ->> TO Iterate the array 
///For  each--> Element, index ,Array

// let  number = 10;
// let  sum = 0;
// while(number !==0){
//     sum+=number ;
//     number--
// }
// console.log("sum is = ",sum);


// let  num = 496440;
// let sum = 0;
// while(n!==0){
//     let remider = num%0;
//     console.log('remider at this point', remider);
//     sum+=remider;
//     console.log("sum",sum);
//     n = Math.floor(n/10)
        
//     }
    // console.log("sum is = ",sum);

    // let age = 15;
    // do {
    //     console.log("User are eligible for voter Id ")
    //     age --;
    // }while(age>20)

    //for in 

    // const hero = {
    //     name:"Abhishek ",
    //     age:50,
    //     salary:245852,

    // }
    // for(let key in hero){
    //     console.log(key,hero[key]);
    // }

    ///for of
    // const arr = ["Apple","Orange",230,40,21.2344];
    // for(let val of arr){
    //     console.log(val);
    // }

    // let arr = [10,20,30,40,"Apple","Orange","Banana",2345.45]
    // // console.log(arr[4]);
    // arr.push("abhi")
    // for(let i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    // }

    // const student ={
    //     name:"Prashant",
    //     roll:1334,
    //     gmail:"Prashant@gmail.com",
    //     couese:'MERN',
    // }
    // console.log(student.name);

    // const phone = ["iphon","oneplus","samsung",'oppo',"vivo",]
    // for(let item of phone){
    //     console.log(item);
    // }

// for(let kay in phone ){
//     console.log(phone[kay]);

// }
for (var i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
        
    }, 2000);
    console.log("hello");
}




















