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




let myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
 

