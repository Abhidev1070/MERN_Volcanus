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

function checkValue(x) {
   return (x > 10) ? 'Greater' : (x === 10) ? 'Equal' : 'Less';
}

console.log(checkValue(12));
console.log(checkValue(10));
console.log(checkValue(8));

