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


function findSecondLargest(arr) { 
  arr.sort((a, b) => b - a); 
  return arr[1]; 
}

let numbers = [10, 5, 20, 15];
console.log(findSecondLargest(numbers));  // Output: 15

function findSecondLargest(arr) {
   let uniqueArr = [...new Set(arr)];  // Remove duplicates
   if (uniqueArr.length < 2) return null; // Handle arrays with less than two elements
   uniqueArr.sort((a, b) => b - a); 
   return uniqueArr[1]; 
 }
 
 ///question 17
 

  




