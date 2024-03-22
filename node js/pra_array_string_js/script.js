//// 1 How do you declare an empty array in JavaScript?
// let Arr = [];
// let Arr2 = [];

////2 What is the syntax to access the third element in an array?

// let arr = [12,13,14,];
// console.log(arr);
// console.log(arr[0]);

////3 How can you add an element to the end of an array?
// let arr = [1,2,3,4,5,6,];
// arr.push(7);
// console.log(arr);

////4 Explain the difference between push and pop methods.
// let arr = [420,370,120,896];
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(740);
// console.log(arr);

////5 How do you find the length of an array?
// let arr = [12,13,14,15,16,17,18,19,];
// console.log(arr);
// console.log(arr.length);

////7 How can you check if a specific element exists in an array?

// let arr = [10,20,30,40,50,60];
//  let checkElement =60;
//  console.log(arr.indexOf(checkElement));
//  console.log(arr.includes(checkElement));
//  if(arr.includes(checkElement)){
//  console.log("true");
//  }
//  else{
//     console.log("falas");
//  }


////8 Explain the difference between == and === when comparing arrays.

// let arr1 = false;
// let arr2 = 0;
// console.log(arr1==arr2);
// console.log(arr1===arr2);

// // console.log(arr1===arr2);

// const arr3 = true;
// const arr4 = 0;
// console.log(arr3===arr4);
// console.log(arr3===arr4);

////9 How do you remove the last element from an array?

// let arr = [10,20,30,40,50,60];
// arr.pop();
// console.log(arr);

//// 10 What does the indexOf method do?

// let arr = [10,20,30,40,50,60];
//  let checkindexof = 50;
//  console.log(arr.indexOf(checkindexof));

////11 How can you iterate over the elements of an array?

// let arr = [10, 20, 30, 40, 50,60,70,80,90,100];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr);
// }

////12 What is the purpose of the join method?

// let arr = ["abhi","abhi" ,"Abhi"];
// console.log(arr.join());
// // man purpose is the add new eleliment shain
// console.log(arr.join("|"));

////13 How do you reverse the order of elements in an array?
// let arr = [10, 20, 30, 40, 50,60,70,80,90,100];
// console.log(arr);
// let Abhi = arr.reverse();
// console.log(Abhi);

////14 Explain the concept of multidimensional arrays in JavaScript.

// let arr = [
//     [10, 20,30,40,50,60],
//     [70,80,90,100,110,120],
//     [70,80,90,10,11,12],

// ]
// console.log(arr[2][3]);

////15 How do you create a shallow copy of an array?

// let arr = [1,2,3,4,5,6,7,8]
// let shallow = arr.slice();
// console.log(shallow);

// let originalArray = [1, 2, 3, 4, 5];
// let shallowCopy = originalArray.slice();

// console.log(shallowCopy);

////16 What is the use of the filter method in arrays?

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let file = arr.filter(function (arrs) { return arrs%2 == 0});
// console.log(file);

//17 How can you sort an array in ascending order?

// let number = [4,2,1,7,8,0];

// let num = number.sort(function (a,b) {
//     console.log(a);
//     console.log(b);

//     return a-b;

// });
// console.log(num);


// number.sort();
// console.log(number);

// let number = ["a","d","c","b"];
// console.log(number);
//  number.sort();
// console.log(number);

////18 Explain the difference between slice and splice methods.

// let arr = [10,20,30,40,50,60]

// let A = arr.slice(4);
// let B = arr.splice(70,0,40);
// console.log(A);
// console.log(B);


////19 How do you concatenate two arrays in JavaScript?
// let arr = [10,20,30,40,50]
// let arr1 = [,60,70,80,90,100]
// console.log(arr + arr1);

////20 What is the purpose of the map method in arrays?
// let arr = ["appal", "banana","Abhi","Ro"]
//  arr.map(Array);
// console.log(arr);

// const numbers = [1, 2, 3, 4, 5];
// let Abhi = numbers.map((num)=>num*num);
// console.log(Abhi);


// const numbers = [1, 2, 3, 4, 5];
// // Doubling each element in the array
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

////21 How do you check if an object is an array?

// let Abhi = [
//     {
//         id:1,
//         movis:"kgf",
//         song:"Maa",
//         reting:9.5,
//         acter:"Rocke",

//     },

// ];
// console.log(Abhi);

////22 Explain the purpose of the reduce method in arrays.

// let arr =[1,2,3,4,5,6]
// let sum = arr.reduce(( arr1,arr2)=>
// {
//     return arr1+arr2;
// }
// );
// //  let sum = arr.reduce();
// console.log(sum);

////23 How can you remove a specific element from an array?
// let arr = [10,20,30,40,50,60]
// let remove = 20;
//  arr.splice(arr.indexOf(remove),1);
//  console.log(arr);
//  let A = arr.splice(arr.indexOf(remove),1);{
// console.log(A);
//  }

////24 What does the forEach method do?

// let arr = [10,20,30,40,50,60]
// let A = arr.forEach(function(Array,index,Name,value){
//    console.log(`Element is ==> ${Array}: ${index}:${Name}:${value}`);
// });
// console.log(A);

////25 How do you convert a string to an array?
// let arr1 = "Abhishek,Hello"
// let delimiter =",";
// let newArray = arr1.split(delimiter);
// console.log(newArray);
// console.log(typeof newArray);

////string
// 1 How do you declare a string in JavaScript?
// let string = "Abhishek";
// console.log(string);
// console.log(typeof string);

////2 What is the difference between single and double quotes for strings?\
// let arr = "Hello,wordl 'Abhishek'";
// let arr1 = `"Hello, wordl", 'hello,wordl'`

// console.log(arr);
// console.log(arr1);

////3 How can you find the length of a string?
// let str = "Abhishek";
// console.log(str.length);

////4 Explain the purpose of the charAt method.
// let str = "Abhishek"
// let A = str.charAt(3);
// console.log(A);

////5 How do you concatenate two strings in JavaScript?

// let str1 = "Abhi, ";
// let str2 = "shek";
// // console.log(str1+str2);
// let string = str1.concat(str2);

// console.log(string);

////6 What is the purpose of the substring method?
// let str = "Hello,world";
//  let A = str.substring(0,5);
// console.log(A);

//// 7 How can you convert a string to uppercase?
// let str = "Hello,World";
// let A = str.toUpperCase(str);
// console.log(A);

////8 Explain the difference between indexOf and lastIndexOf methods.

// let str = "Hello,World";
// let A = str.indexOf("o");
// let B = str.lastIndexOf("o");
// console.log(A);
// console.log(B);

////9 How do you check if a string contains a specific substring?
// let Str = "Hello, world!";
//  if (Str.indexOf("p") !== -1) {
//     console.log("Substring found!");
// }
// else {
//     console.log(" Not Substring found!");
// }

////10 What does the split method do?
// let str = "Hello, World";
// let A = str.split(",");
// console.log(A);

////11 How can you replace a specific substring in a string?
// let str = "Hello, World";
// let A = str.replace("World ","Abhi");
// console.log(A);
// console.log(str);

////12 What is the purpose of the trim method?
// let str = "      Hello,World     ";
// let A = str.trim();
// console.log(A);

////13 How do you convert a string to lowercase and uppercase ?
// let str = "HELLO, WORLD";
// let A = str.toLowerCase();
// console.log(A);

// let str1 = "holle,world";
// let B = str.toUpperCase();
// console.log(B);

////14 Explain the use of template literals in JavaScript strings.

// let strName = "Abhishek";
// let strage = "99";
// console.log(`colint NAME is ${strName} and AGE is ${strage}`);

////15 How can you access the individual characters of a string?
// let str = "Hello, World!";
// let  firstChar = str[0];  // Accessing the first character
// let secondChar = str [7];  // Accessing the second character
// console.log(firstChar);
// console.log(secondChar);

////16 What does the startsWith method check for?
// let str = "Hello,world";
// let A = str.startsWith("Hello");
// console.log(A);

//// 17 How do you check if a string ends with a specific substring?
// let str = "Hello,world";
// let A = str.endsWith("World");
// console.log( A,typeof A);

////18 Explain the purpose of the charAt method.

// let str = "Hello World";
// let A = str.charAt("2");
// console.log(A);

//// 19 How can you reverse a string in JavaScript?

// let str = "Hello,World";
// let A = str.split('').reverse("").join('')
// console.log(A);

////20How do you extract a portion of a string using the slice method?

// let str = "Hello, World";
// let A = str.slice(0,5);
// console.log(A);

////21 What does the search method do in strings?

// let str = "Hello,world";
// let A = str.search("w");
// console.log(A);

////22 How do you compare two strings in JavaScript?
// let str1 = "Hello";
// let str2 = "Hello";
// if(str1===str2){
//     console.log("true");
// }
// else{
//     console.log("falas");
// }

////23 Explain the purpose of the replace method.
// let str = "Hello,World";
// let A  =  str.replace("World","Abhi");
// console.log(A);

////24 How do you convert a string to an array of characters?
// let str = "Hello,World";
// let A = str.split(',');
// let B = str.split("")
// console.log(A);
// console.log(B);

////25 What is the purpose of the concat method in strings?

// let str1 = "Hello ,";
// let str2 = "World"
// let A = str1.concat(str2);
// console.log(A);

//// logic Q

// let A=10;
// let B=20;
// function sum ( A){
//     return A+B;
// }
// console.log(sum);


// const Abhi = document.querySelector('body');
// Abhi.style.backgroundColor='#000';
// Abhi.style.color='#fff';




















































