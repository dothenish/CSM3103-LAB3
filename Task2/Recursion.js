//Finding the sum of digits of a number
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  //Calculating x raised to the power of y using recursion
  function power(x, y) {
    if (y === 0) {
      return 1;
    } else if (y % 2 === 0) {
      return power(x, y / 2) * power(x, y / 2);
    } else {
      return x * power(x, Math.floor(y / 2)) * power(x, Math.floor(y / 2));
    }
  }
  