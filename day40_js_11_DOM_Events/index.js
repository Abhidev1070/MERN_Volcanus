//  const container = document.querySelector('.container');
//  console.log(container);
//  console.log("Hello,World");

// const items = container.querySelector('.items:nth-child(1)');
// console.log(items.innerText);
// console.log(items.innerHTML);
// console.log(items.textContent);

// // items.style.backgroundColor = "yellow";

// const changeStyle  = () =>{
//     const items = document.querySelectorAll('.items');
// // console.log(items.length);
// for( let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = "yellow";
//     items[i].style.color = "#000"
//     items[i].style.padding = "10px";

//     items[i].style.border = "2px solid blue"
// }
// }
// document.querySelector('#btn').addEventListener("click",()=>{
//     console.log(" this is over evenListner");
// });

// // console.log(document.querySelector("#input"));
// const input = document.querySelector("#input");
// const getInputValue = () =>{
//     const input = document.querySelector("#input");
//     console.log(input.value);


// }
const textarea = document.querySelector(".area");

      const input = () => {
        document.querySelector(".inputValue").innerText = textarea.value;
        // console.log(textarea.value)
      };

      document.querySelector(".btn").addEventListener("click", () => {
        document.querySelector(".inputValue").innerText =
          textarea.value.toUpperCase();
        console.log(textarea.value.toUpperCase());
      });


