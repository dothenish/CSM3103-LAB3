function findSquare(num) {
    return num * num;
  }
  
  function findSumOfCubes(num1, num2) {
    return Math.pow(num1, 3) + Math.pow(num2, 3);
  }
  
  function reverseNumber(num) {
    let revNum = 0;
    while (num > 0) {
      let rem = num % 10;
      revNum = revNum * 10 + rem;
      num = Math.floor(num / 10);
    }
    return revNum;
  }
  
  function findDivisible(z) {
    let result = [];
    for (let i = 1; i <= 100; i++) {
      if (i % z === 0) {
        result.push(i);
      }
    }
    return result;
  }
  
  