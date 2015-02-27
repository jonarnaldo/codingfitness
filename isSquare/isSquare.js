// This function should check 
// whether the integer n is the square of another integer number.
// Do not use Math.pow(n, 0.5) in your solution.

var isSquare = function(n){
  // Your code here
  //given n, loop through values up to Math.sqrt(n)
  for (var i = 0; i <= Math.sqrt(n); i++) {
    if (i * i === n) {
      return i;
    }
  }
  return false;
}

// isSquare(16) -> return 4

