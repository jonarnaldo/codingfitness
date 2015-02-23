// N is an even number of people .
// People should be working on a task in pairs (imagine a Hack Reactor cohort).
// How many possible ways is there to divide this group of people into pairs?

// Example:
// if there are four people (A, B, C, D), there are three possible pairing combinations:
// 1) A-B and C-D
// 2) A-C and B-D
// 3) A-D and B-C

// Write a function that takes N as an input and
// returns the number of possible pairing combinations.

// You can assume that N is always a positive even integer.

var flat = function(array) {
  var str = '';
  if (array.length < 1) {
    return str;
  } 
  array.forEach(function(value) {
    str += value;
  })
  return str;
}

var pairing = function (N) {
  var str = '', buffer = [], combinations = [], left = [], right = [];
  debugger;// N is an even number of people .
// People should be working on a task in pairs (imagine a Hack Reactor cohort).
// How many possible ways is there to divide this group of people into pairs?

// Example:
// if there are four people (A, B, C, D), there are three possible pairing combinations:
// 1) A-B and C-D
// 2) A-C and B-D
// 3) A-D and B-C

// Write a function that takes N as an input and
// returns the number of possible pairing combinations.

// You can assume that N is always a positive even integer.

var flat = function(array) {
  var str = '';
  if (array.length < 1) {
    return str;
  } 
  array.forEach(function(value) {
    str += value;
  })
  return str;
}

var pairing = function (N) {
  var str = '', buffer = [], combinations = [], left = [], right = [];

  //Your code here
  if (N.length === 2) {
    return N;
  }

  for (var i = 0; i < N.length; i++) {
    str += N[i];
    for (var j = i + 1; j < N.length; j++) {
      buffer.push(str + N[j]);
      // define left and right arrays
      var leftArray = N.slice(i + 1, j)
      left = flat(leftArray);
      var rightArray = N.slice(j + 1)
      right = flat(rightArray);
      var recombined = left + right;
      
      pairing(recombined);


      buffer.push(recombined);
      combinations.push(buffer);
      // clear buffer, left, right, str
      buffer = [];
    }
    str = '';
  }
  return combinations; 
} 

pairing(['A','B','C','D']);