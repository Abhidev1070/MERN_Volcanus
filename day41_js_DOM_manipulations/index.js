// const element = document.querySelector('.contaniner');
// console.log(element.childNodes);
// console.log(element.children[2]);

// console.log(element.firstElementChild.innerText);
// console.log(element.lastElementChild);
// const child2 = document.querySelector('.child2');
// console.log(child2.innerHTML);
// console.log(child2.previousElementSibling.innerHTML);
// console.log(child2.nextElementSibling);

const element  = () =>{
    const div = document.createElement('h1');

// div.className = 'suparman';

// div.setAttribute('class',"suparman");
div.innerText = " This is my dynsmic div" 

div.style.backgroundColor = " purple";


console.log("this is my div",div);
console.log("div Text",div.innerText);
document.querySelector('body').appendChild(div);

};
// document.querySelector('button').addEventListener('click', element);

const div = document.createElement('h1');

// div.className = 'suparman';

// div.setAttribute('class',"suparman");
div.innerText = " This is my dynsmic div" 

div.style.backgroundColor = " purple";


console.log("this is my div",div);
console.log("div Text",div.innerText);
document.querySelector('body').appendChild(div);



document.querySelector(".remove").addEventListener("click",()=>{
    const parent = div.parentNode;
console.log("this is parent",parent);
parent.removeChild(div);
})

