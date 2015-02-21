// You are given un unsorted array of integers and a target integer.
// Write a function that returns a pair of numbers from the array
// that is as close to the target number as possible but does not exceed it.
// The return value should be an array of length 2.
// Example:
// array [10, -2, -7, 8, 5], target 7 => returns [-2, 8].
// The order of numbers in the resulting array does not matter.
// If there are two pairs of integers with the same sum, any pair can be returned.
// If the length of the original unsorted array is less than 2, return null.


var targetSum = function(array, n){
  // Your code here
  var res = [];
  var compare = 0;
  var i = 0;
  var j = i + 1;

  if (array.length < 2) {
    return null;
  }

  while (i < array.length && j < array.length) {
    var sum = (array[i] + array[j]);
    console.log(sum);
    if (sum <= n && sum > compare) {
      res.pop();
      res.pop();
      res.push(array[i]);
      res.push(array[j]);
      compare = sum; 
    };
    j++;

    if (j === array.length) {
      i++;
      j = i + 1;
    }
  }

  return res;
}

targetSum([10, -2, -7, 8, 5], 7);
// [-2, 8]
