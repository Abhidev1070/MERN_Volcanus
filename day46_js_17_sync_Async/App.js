// console.log("Hello console ");

// //synchronus code
// const synchronus = ()=>{
//     console.log("superman");
//     console.log("Spoderman");
//     console.log("Batman");
// }

// // asynchronus code
// const asynchronus=()=>{
//     console.log(" I Love Indian ");
//     setTimeout(()=>{
//         console.log("vellore Institutu of Technology");
//     },2000);
//     console.log("volcanus")
// }
// // synchronus();

// asynchronus();

// fetch data using async await 

// const fetchData = async () => {

//     const api =  await fetch("https://jsonplaceholder.typicode.com/users");
//     const Data = await api.json();
//     console.log(Data);
// }
// fetchData();

const fetchMealData = async ()=> {
    const api = await fetch ("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    const data =await api.json();
    return data.meals;


    // console.log(data);
}
// console.log(api);
// console.log(fetchMealData());
const showDataToDOM = async ()=>{
    const data = await fetchMealData();
    // console.log("This data is coming from meaIDB API ",data[0].strMeal);

// document.querySelector(".main").innerHTML=`
// <div>
// <h1>${data[0].strMeal}</h1>
// <img src= ${data[0].strMealThumb}alt = ${data[0].strMeal}style="width:300px">
// </div>
// `
document.querySelector('.main').innerHTML=data.map ((d)=>`
<div>
 <h1>${data[0].strMeal}</h1>
 <img src= ${data[0].strMealThumb}alt = ${data[0].strMeal}style="width:300px">
</div>
`)

}
showDataToDOM();



