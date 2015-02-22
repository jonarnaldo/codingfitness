//Inspired by Codility.com.

// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
// For example, consider array A such that:

// A = [3, 1, 2, 4, 3]

// We can split this tape in four places:
// P = 1, difference = |3 − 10| = 7 
// P = 2, difference = |4 − 9| = 5 
// P = 3, difference = |6 − 7| = 1 
// P = 4, difference = |10 − 3| = 7 

// Write a function:
// var tapeEquilibrium = function (array) {}

// that, given a non-empty array of integers, returns the minimal difference that can be achieved.

// For example, given:

// A = [3, 1, 2, 4, 3]
// the function should return 1, as explained above.

// Complexity:
// - expected worst-case time complexity is O(N);
// - expected worst-case space complexity is O(1).
// Elements of input arrays can be modified.


var tapeEquilibrium = function(array) {
  // code here
  // given P < N
  var p = array.length - 1;
  var min, leftReduced, rightReduced;
  var diff = undefined;
  // loop through array
  for (var i  = 0; i < array.length - 1; i++) {
    leftReduced = array.slice(0,i + 1).reduce(function(prev, current) {
      return prev + current;
    });

    rightReduced = array.slice(i + 1).reduce(function(prev, current) {
      return prev + current;
    });

    diff = Math.abs(leftReduced - rightReduced);
    if (!min) {
      min = diff
    } else {
      if ( diff < min) {
        min = diff;
      }
    }
   }

   return min;
  // look to left of index and sum, including number at index
  // look to right of index and sum, excluding number at index
  // find absolute value of left - right
  // if absolute value of left - right < min
    // min = absolute vale of left - right

  // return min
};
