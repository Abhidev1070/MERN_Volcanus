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

// const data = new data ();

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
// let i;

// 
// function fun1(){
//     let  a = 5;
//     function fun2 (){
//         console.log(a);
//     }
//      a =10;

//     return fun2()
// }
// let data = fun1
// data();

// let a = [1,2,3,9,4,2]
// let b = a.reduce((value,index,Array)=>{
// console.log(value);


// console.log(index);
// return value + value;

// })
// console.log(b);

// let num = [1,2,3,4,5]
// for (const i in num){
//     console.log(i);
// }
// for (var i=0;i<5;i++){
//     setTimeout(()=>{
//         // console.log(i);
//     },2000)
//     for (var i=0;i<5;i++){
//         setTimeout(()=>{
//             // console.log(i);
//         },4000)
//         // console.log(i);
//     }
//     console.log("hello");
// }


// console.log(i);


// function Abhi() {
//     return function firstName () {
//         for (let i = 0; i < 5; i++) {
//             console.log(i);
//         }
//     }
//     firstName();
// }
// let a = Abhi();
// a();

// const arr =["Oneplus","iphon","Sony","lumia","iphon","HTC Desire"]

// for(let value of arr){
//     console.log(value);
// }
// console.log(arr.shift());
// console.log(arr.splice(2,1));
// console.log(arr.slice(0,3));
// console.log(arr.indexOf("iphon"));
// console.log(arr.lastIndexOf("iphon"));
// console.log(arr.includes("iphon"));
// console.log(arr.sort());
// console.log(arr.toString());

// for (var i=0;i<5;i++){
//            function a(x){
//             setTimeout(()=>{
//                 console.log(x);
//             },4000)
//            }
//            a(i)
// }
// console.log("hello");

// console.log(a);

// {
//     let a =10;
// console.log(a);

// }

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43,
//     department:{
//         'name': 'Sales',
//         'Shift': 'Morning',

//     }
// }

// const { department: { address: { city } } } = user;

// console.log( {department} = user.name);

// for(let i=1;i<=3;i++){
//     // console.log(i);
//     for(let j=i;j<=3;j++){
//         console.log("This is i ",i);
//         // console.log("This is j",j);

//     }
// }


// strings

// const str = "SuparMan";
// console.log( "Bafore upperCase =>",str);

// console.log( "After upperCase =>",str.toUpperCase());
// console.log( "After upperCase =>",str.toLowerCase());
// const result =str.trim()
// console.log(result);

// console.log(str.length);

// console.log(str.charAt(4));


// const str = "superman";
// let count =0;

// for(let i=0;i<str.length;i++){
//     let temp = str.charAt(i);
//     // let temp = str.charCodeAt(i)
//     // console.log(i);
//     if(temp==="a"||temp==='e'||temp==='i'||temp==='o'||temp==='u'){
//         console.log("Vowel",temp);
//         count++;
//     }
//     else{
//         console.log('consonet',temp);
//     }
// }

// let arr = [12,15,16,12,13,54,78,94] 
// for (let a=0;a<5;a++){
//     // console.log(a);
//     for(let b=a;b<5;b++){
//         console.log( a);
//         // for (let c=b;c<5;c++){
//         //     console.log(c);
//         // }
//     }
// }

// indexOf => to find a particuler charactre index

// const str ="suparman";
// const char ="s";
// const index = str.indexOf(char);
// console.log(`The index of ${char} = ${index}`)

//replace => to replace a particular character in a string

// const str = "Supar,  man "
// const brastr = str.replace("U","u");
// console.log("resulted string =",brastr);
// const brastr = str.split(",");
// console.log(brastr);
// const brastr = str.slice(0,3);
// console.log(brastr);

// const str = "my name is superman"
// for ( let i=0;i<5;i++){
//     const upstr=(str.split(" ")[i].charAt(i).toUpperCase())
// }
// console.log(upstr);

// const str = "@#$su#%$#@"
// console.log(str.substring(3,5));

// const isPanulindrome = (str)=>{
//     let a="ABA"
//     for( let i=0;i<str.length/2;i++){
//         if(str[i]!==str[str.length-1-i]){
//             console.log("is prelidrom",i);

//         }
//         else{
//             console.log("is a not palidrom",i);
//         }
//     }
// }

// const str = "121";
// let start =0;
// let end = str.length-1;
// let flag = true
// while (start<end){
//     if(str.charAt(start)!=str.charAt(end)){
//         flag=false
//         break;
//     }
//     start++;
//     end--;

// }
// if(flag){
//     console.log("pa");
// }
// else{
//     console.log('not p');
// }

// let str = "abcdefghijklmnopqrstuvwxyz";
// for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//         if (i % 4 === 0) {
//             if (i % 6 === 0) {

//             }
//         }
//     }
//     console.log(i);
// }

// let a = 4>3>2;
// console.log(a);

// const x=10;
// const y=8;
// const z=(x>y)?x:y;
// console.log(z);

//binaryseach number 

// const binarySearch = (arr, target) => {
//     let s = 0;
//     let e = arr.length - 1;
//     let mid;
//     while (s <= e) {
//         mid = Math.floor((s + e) / 2);
//         if (arr[mid] == target) {
//             return mid;
//         }
//         else if (arr[mid] > target) {
//             e = mid - 1;
//         }
//         else if (arr[mid] < target) {
//             s = mid + 1;
//         }
//     }
//     return -1;
// };
// // main function
// const arr = [10, 20, 30, 500, 750, 5000, 6954, 55500]
// let target = 750;
// const result = binarySearch(arr, target);
// console.log(result);
// class Bank{
//     rateOfInterest = () => 0.01;
// }
// class PNB extends Bank{
//     rateOfInterest = () => 5;
// }
// class SBI extends Bank{
//     rateOfInterest = () => 4;
// }
// class HDFC extends Bank{
//     rateOfInterest = () =>6;
// }
// class ICICI extends Bank{
//     rateOfInterest = () =>7;
// }

// const obj1 =new ICICI();
// console.log(`Rate of interst of ICICI Bank = ${obj1.rateOfInterest()}%`);
// const obj2 =new SBI();
// console.log(`Rate of interst of SBI Bank = ${obj2.rateOfInterest()}%`);


// chatAt - to find a character in particular index of place

// const str = "superman";
// console.log("To find length ",str.length);

// for(let i=0; i<str.length;i++){
//     console.log(str.charAt(i));
// }

// Education

// const str = "educATion";
// for(let i=0; i<str.length;i++){
//         if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
//             console.log("vovel",str.charAt(i));

//         }
//         else{
//             console.log("consonet",str.charAt(i));
//         }
//     }

// let str ="hello"
// console.log(str.replace("h","H"));

// const str = "The suparman is belong from DC"
// console.log(str.split(' '));

// const removeSpecialChar = (str)=>{
//     let specialChar = [];
//     let Alphabet =[];
    
//     for(let i=0; i<str.length; i++){
//         let char = str.charAt(i);
//         let ascii = char.charCodeAt(0);

//         if((ascii >= 65 && ascii <= 91) || (ascii >= 97 && ascii <= 123)){
//             Alphabet +=char;

//         }
//         else{
//             specialChar += char;
//         }

//     }
//     console.log( " a= ,",Alphabet);
//     console.log(specialChar);
// }

// removeSpecialChar();
// let str = "sd@g$g%vg^g%hy%h%^&U**&^%#";

// typeof 

(function(){
    let a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));































