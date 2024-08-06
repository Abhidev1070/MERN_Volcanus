function findMissingNumber(arr) {
    let n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2; 
    let arraySum = arr.reduce((acc, num) => acc + num, 0); 
    return totalSum - arraySum;
  }
  
  console.log(findMissingNumber([1, 2, 4, 5, 6,8])); 