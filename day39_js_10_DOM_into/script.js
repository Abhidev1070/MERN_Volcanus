console.log("Hello World");

// const element1 = document.getElementsByTagName("h1")
// const element2 = document.getElementById("h2")
// const element3 = document.getElementsByClassName("h3")
// const element1 = document.querySelector("h1")
// const element1 = document.querySelectorAll("h1")
// const element2 = document.querySelector("#h2")

// console.log(element1);
// console.log(element2);
// console.log(element3);

// const element = document.querySelector('.container')
// // element.innerHTML = "<h1>This is my dynamic ontent</h1>"
// element.innerText = "<h1>This is my dynamic ontent</h1>"

// const h1 = document.querySelector("h1")
// document.querySelector('.container').innerHTML =
//  `<h1>
// ${ h1.innerText}</h1>`
// const image = document.querySelector('img')
// image.src="https://cdn.pixabay.com/photo/2024/02/20/09/39/nuts-8585063_640.jpg";

// const element = document.querySelector("h1");

// element.style.backgroundColor="yellow";
// element.style.backgroundColor ="blue";
const image = document.querySelector('img');
const bgLight = () => {
    const superman = document.querySelector('body')
superman.style.backgroundColor = "#fff";
superman.style.color = "#000"
image.src="https://cdn.pixabay.com/photo/2024/02/20/09/39/nuts-8585063_640.jpg";

};
const bgDark = () => {
    const superman = document.querySelector('body')
superman.style.backgroundColor = "#000";
superman.style.color = "#fff"
image.src="https://cdn.pixabay.com/photo/2024/02/20/09/39/nuts-8585063_640.jpg"

};

let temp ;
const imgChange =()=>
{
    const element = document.querySelector("img"
    )
    temp= element.src
    element.src = "https://cdn.pixabay.com/photo/2024/02/20/09/39/nuts-8585063_640.jpg";
}
const imgOriginal = () =>{
    document.querySelector("img").src = temp;
}


// const bgDark = () => {
//     const superman = document.querySelector('body')
// superman.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2024/02/20/09/39/nuts-8585063_640.jpg)";
// superman.style.color = "#fff"

// };


