// const arr = [25,36,92,85,85,]
// console.log(arr.includes(21));
// const phones = [ "apple","lenovo","dell","xiaomi","hp","oppo"]
// console.log(phones.includes("apple"));

// // High order Array methods

// const arr = [10,20,30,40,50,60,70,80,]
// const result = arr.map((ele)=>{console.log(ele+20); return ele;});
// // const result = arr.map((ele)=>ele+20)

// console.log(result); 

// // filter method

// const arr = [10,20,30,40,50,60];
// const filteredData = arr.filter((superman)=>superman===30);
// console.log(filteredData);

const products = [{
    id: 1,
    title: 'iphone 14',
    category: 'mobiles',
    price: 69999,

},
{
    id: 2,
    title: 'iphone 14',
    category: 'mobiles',
    price: 69999,
},
{
    id: 3,
    title: 'bphone 14',
    category: 'mobiles',
    price: 69999,
},
{
    id: 4,
    title: 'iphone 14',
    category: 'mobiles',
    price: 69999,
},
{
    id: 5,
    title: 'Apple tep',
    category: 'mobiles',
    price: 69999,
},
{
    id:6,
    title:'ipad',
    category:'tablets',
    price:99999,},

];
// const  filterSearch = "6"

// const filteredData = products.filter((products)=>products.id==filterSearch)
// console.log(filteredData);

const filterByprice = products.filter((data) =>data.title.toLocaleLowerCase().includes("i"))
console.log(filterByprice);
