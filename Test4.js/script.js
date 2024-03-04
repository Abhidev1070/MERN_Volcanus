document.querySelector('#Move').addEventListener("click", ()=>{
    const image = document.querySelector('img')
    image.style.left= "500px" 
});

const bgDark =() =>{
    const superman = document.querySelector('body')
    superman.style.backgroundColor = "#000";
superman.style.color = "#fff"
}
const bgLight = () =>{
    const superman = document.querySelector('body')
    superman.style.backgroundColor = "#fff";
superman.style.color = "#000"
}


// let num1 = parseInt(document.querySelector('.input1').value);
// let num2 = parseInt(document.querySelector('.input2').value);

document.querySelector('#add').addEventListener('click',() =>{
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 =  parseInt(document.querySelector('#num2').value)
    console.log(num1,num2)
   let sum = num1 + num2
   let add = document.createElement('h2')
    add.textContent = sum
    document.querySelector('body').appendChild(add)
})
document.querySelector('#multiply').addEventListener('click',() =>{
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 =  parseInt(document.querySelector('#num2').value)
    console.log(num1,num2)
   let sum = num1 * num2
   let add = document.createElement('h2')
    add.textContent = sum
    document.querySelector('body').appendChild(add)
})
document.querySelector('#subtract').addEventListener('click',() =>{
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 =  parseInt(document.querySelector('#num2').value)
    console.log(num1,num2)
   let sum = num1 - num2
   let add = document.createElement('h2')
    add.textContent = sum
    add.style.top = "100px"
    document.querySelector('body').appendChild(add)
})
document.querySelector('#division').addEventListener('click',() =>{
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 =  parseInt(document.querySelector('#num2').value)
    console.log(num1,num2)
   let sum = num1 / num2
   let add = document.createElement('h2')
    add.textContent = sum
    add.style.top = "100px"
    document.querySelector('body').appendChild(add)
})
