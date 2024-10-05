/// question 1 

//  function findMissingNumber(arr) {
//   let n = arr.length + 1;
//   let totalSum = (n * (n + 1)) / 2; 
//   let arraySum = arr.reduce((acc, num) => acc + num, 0); 
//   return totalSum - arraySum;
// }

// console.log(findMissingNumber([1, 2, 4, 5, 6,8])); 

/// question 2

//    function hasPairWithSum(arr, target) {
//     const seen = new Set();

//     for (const num of arr) {
//         const complement = target - num;
//         if (seen.has(complement)) {
//             return true;
//         }
//         seen.add(num);
//     }

//     return false;
// }

// // Example usage
// const numbers = [1, 4, 3, 2, 7];
// const target = 5;
// console.log(hasPairWithSum(numbers, target));

// question 3

// function checkValue(x) {
//    return (x > 10) ? 'Greater' : (x === 10) ? 'Equal' : 'Less';
// }

// console.log(checkValue(12));
// console.log(checkValue(10));
// console.log(checkValue(8));

// question 4

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((previousSum, element) => {
//   const newSum = previousSum + element;
// //   console.log(previousSum);
// //   console.log(element);
//   return newSum;
// }, 0); 

// console.log(sum); 

/// question 5

// function isPrime(num) { 
//    if (num <= 1) return false; 

//    for (let i = 2; i <= Math.sqrt(num); i++) { 
//      if (num % i === 0) return false; 
//    } 

//    return true; 
//  }

// Test the function with a range of numbers

//  function testPrimes() {
//    const numbersToTest = [0, 1, 2, 3, 4, 5, 10, 13, 17, 18, 19, 20];
//    numbersToTest.forEach((num) => {
//      console.log(`Is ${num} a prime number? ${isPrime(num)}`);
//    });
//  }

//  testPrimes();

/// question 6 


// let myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();




/// question 7

// const array1 = [1, 4, 7];
// const array2 = [2, 5, 6];

// function mergeSortedArrays(arr1, arr2) {

//     return [...arr1, ...arr2].sort((a, b) => a - b);

//   }

// const mergedArray = mergeSortedArrays(array1, array2);

// console.log(mergedArray); 


// // Output: [1, 2, 4, 5, 6, 7]

///question 8

// let x = 1; // number 1
// let y = '1'; // string 1


// if (x == y) {
//     console.log('x == y is true'); }


// if (x === y) {
//     console.log('x === y is true'); 
// }

// if (x == y && typeof x === 'number') {
//     console.log('x == y is true and x is a number'); 
// }

// if (x === y || typeof y === 'string') {
//     console.log('x === y is true or y is a string'); }

// if (!(x === y)) {
//     console.log('x === y is false'); 
// }

// if ((x == y && typeof x === 'number') || (typeof y === 'string' && y.length === 1)) {
//     console.log('Either x == y and x is a number, or y is a string with length 1'); 
// }

///question 9

// var list = [1, 2, 3, 4, 5];

// var nextListItem = function() {
//     var item = list.pop();
//     if (item) {

//         console.log("Processing item:", item);
//         nextListItem();

//     }
// };
// nextListItem();

///question 10

// function fibonacci(n) {
//    if (n <= 1) return n;
//    return fibonacci(n - 1) + fibonacci(n - 2);
// }
// // Example usage:
// console.log(fibonacci(6));

// Output: 8

///question 11

//  function findSingleNumber(nums) {
//    let result = 0;
//    for (let num of nums) {
//        result ^= num;  
//    }
//    return result; 
// }

// console.log(findSingleNumber([2, 2, 1]));  
// console.log(findSingleNumber([4, 1, 2, 1, 2]));  

// Output: 1
// Output: 4

///question 12


// const person = {
//    firstName: "Helen",
//    lastName: "Ryan",
//    getFullName: function () {
//     return this.firstName + " " + this.lastName;
//    },
//  };
//  console.log(person.getFullName());


///question 13

// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));

///question 14

// const promise1 = Promise.resolve("One");
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
// const promise3 = Promise.reject("Three");
//  Promise.allSettled([promise1, promise2, promise3]).then((results) => console.log(results));

///question 15

// const arr = [1, 2, 3, 2, 1, 4, 5];
// const uniqueArr = removeDuplicates(arr);
// console.log(uniqueArr); 

// function removeDuplicates(arr) {
//    return [...new Set(arr)];
//  }



///question 16


// function findSecondLargest(arr) { 
//   arr.sort((a, b) => b - a); 
//   return arr[1]; 
// }

// let numbers = [10, 5, 20, 15];
// console.log(findSecondLargest(numbers));  // Output: 15

// function findSecondLargest(arr) {
//    let uniqueArr = [...new Set(arr)];  // Remove duplicates
//    if (uniqueArr.length < 2) return null; // Handle arrays with less than two elements
//    uniqueArr.sort((a, b) => b - a); 
//    return uniqueArr[1]; 
//  }

///question 17

//  [0, 1, 1, 2, 3, 5, 8, 13]

//  function fibonacciWithMemoization(n) { 
//   let memo = [0, 1]; 

//   for (let i = 2; i <= n; i++) { 
//     memo[i] = memo[i - 1] + memo[i - 2]; 
//   } 

//   return memo; 
// }

// let result = fibonacciWithMemoization(7);
// console.log(result); 

///question 18

// const arr = [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 6, 7, 9];

// const uniqueArr = removeDuplicates(arr);
// console.log(uniqueArr); 

// function removeDuplicates(arr) {
//    return [...new Set(arr)];
//  }\


///question 19

// function largestDifference(arr) { 

//    let min = arr[0]; 

//    let maxDiff = 0; 

//    for (let i = 1; i < arr.length; i++) { 

//      if (arr[i] < min) { 

//        min = arr[i]; 

//      }

//  else { 

//        const diff = arr[i] – min; 

//        if (diff > maxDiff) { 

//          maxDiff = diff; 

//        } 

//      } 

//    } 

//    return maxDiff; 

//  } 


///question 20

// function flattenArray(arr) {
//   return arr.reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       acc = acc.concat(flattenArray(val)); 
//     } else {
//       acc.push(val); 
//     }
//     return acc;
//   }, []);
// }
// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray)); 
// Output: [1, 2, 3, 4, 5, 6]


///question 21

// function countCharacterOccurrences(str) {

//   const charCount = {};
//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   return charCount;
// }


// console.log(countCharacterOccurrences("hello"));
// // Output: { h: 1, e: 1, l: 2, o: 1 }

// console.log(countCharacterOccurrences("javascript"));
// // 1 Output: { h: 1, e: 1, l: 2, o: 1 }
// // 2 Output: { j: 1, a: 2, v: 


///question 22

// function getUniqueElements(arr) {
//   return Array.from(new Set(arr));
// }

// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = getUniqueElements(array);
// console.log(uniqueArray);  
// // Output: [1, 2, 3, 4, 5]

///question 23

// function reverseString(str) {
//   let reversed = ""; 

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]; 
//   }

//   return reversed; 
// }

///question 24


// function modifyArray(arr, callback) {
//   arr.push(100);
//   callback();
// }

// var arr = [1, 2, 3, 4, 5];
// modifyArray(arr, function() {
//   console.log("array has been modified", arr);
// });

///question 25

// var arr = [
// 	"hello world",
// 	42,
// 	true
// ];
// arr[0];			
// arr[1];		
// arr[2];			
// arr.length;		
// typeof arr;
// console.log(arr);
// console.log(arr.length);

///question 25
// callMe();


// function callMe() {
//    if (this === window) {
//        console.log("Function is called in non-strict mode.");
//    }
//    if (this === undefined) {
//        console.log("Function is called in strict mode.");
//    }
// }

// callMe();

// In strict mode
// "use strict";
// callMe(); 


///question 26

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log("foo1 returns:");
// console.log(foo1());
// console.log("foo2 returns:");
// console.log(foo2());

///question 27

// let user = { name: 'Bill' };

// function sayHello(greeting) {
//   console.log(`${greeting} ${this.name}`);
// }
// sayHello('Hello'); 
// sayHello.call(user, 'Hello'); 


///question 27

// let sayHello = function (name) {
//   console.log(`Hello ${name}`);
// };

// sayHello('Chris'); 


///question 28

// function isPalindrome(str) {

//   const cleanedStr = str.replace(/[^\w]/g, "").toLowerCase();

//   const reversedStr = cleanedStr.split("").reverse().join("");

//   return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("A man, a plan, a canal, Panama"));  
// console.log(isPalindrome("Hello"));  

///question 29

// function outer() {
//    let count = 0;
//    return function inner() {
//      count++;
//      console.log(count);
//    };
//  }
//  const increment = outer();
//  increment(); 
//  increment();

///question 30

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {

//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

///question 31

// let n=10;
//  let String= "";

//  for(let i=1; i<=n; i++){
//   for(let j=0; j<n+i; j++){
//     String +="";
//   }
//   for(let k=0; k<i;k++){
//     String +='*';
//   }
//   String +='\n';
//  }
// console.log(String)


///question 32

// let n = 5; 
// let string = "";

// for(let i = 0; i < n; i++) { 
//   for(let j = 0; j < n; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

///question 33

// let n=5;
//  let String= "";

//  for(let i=1; i<=n; i++){
//   for(let j=0; j<i; j++){
//     // String +="";
//     for(let k=0; k<i;k++){
//       String +='*';
//     }
//   }
 
//   String +='\n';
//  }
// console.log(String)


///question 34

// function factorial(number) { 

//   if (number === 0 || number === 1) { 

//     return 1; 

//   } else { 

//     return number * factorial(number - 1); 

//   } 

// } 
// console.log(factorial(2));


///question 34

//   let n=10;  
    
//   for(let i=n;i>=1;i--)  
//   {  
//       for(let j=1;j<=i-1;j++)  
     
//           String+=" *";  
       
  //    // for(let k=1;k<=n;k++)  
      
  //    //     String+="*";  
      
//       String+="\n";  
//   }  
//  console.log(String);  


///question 35


// let n = 7;
// let output = ""; 

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i == Math.floor(n / 2) || j == Math.floor(n / 2)) {
//             output += "*"; 
//         } else {
//             output += " ";
//         }
//     }
//     output += "\n"; 
// }

// console.log(output); 

///question 36


// let n = 7;
// let output = ""; 

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n-i; j++) {
//         if (i == Math.floor(n / 2) || j == Math.floor(n / 2)) {
//             output += "*"; 
//         } else {
//             output += " ";
//         }
//     }
//     output += "\n"; 
// }

// console.log(output);



///question 37

// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < (n - i) * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// for (let i = 2; i <= n; i++) {
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }

//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


///question 38
// let i =10;
// pattern = "";
// for (let n = 0; n <= i; n++) {
//   for (let num = i; num <i+n; num++) {
//      pattern += "*";
    
    
//   }
//   pattern += "\n";
// }
// console.log(pattern);

///question 39

// let obj = {
// 	a: "hello world",
// 	b: 42
// };
// let b = "a";
// console.log(obj[b]);
// console.log(obj["b"]);



///question 40

// Global variable
let globalVar = "I'm a global variable";

function myFunction() {
    
    let localVar = "I'm a local variable";
    let globalVar = "I'm a shadowed global variable";

    console.log(localVar);
    console.log(globalVar); 
}

myFunction();

console.log(globalVar); 

// console.log(localVar); 

