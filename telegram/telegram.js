// This function takes in a string (a sentence) that contains several words
// and an integer n. 
// It outputs an array of strings, where each string contains as many words
// as possible but is never longer than n characters.
// The strings in the output array, when combined, should contain the original sentence.
// Words may not be split, but you may assume that no single word is too long.


// Example1: telegram("Bring your dog to the office", 6) =>
// ["Bring", "your", "dog to", "the", "office"]

// Example2: telegram("The rain in Spain stays mainly in the plain", 8) = >
// ["The rain", "in Spain", "stays", "mainly", "in the", "plain"]


// For simplicity let's assume that the input string contains only one sentence
// without any special characters (periods, commas etc).

var telegram = function(string, n){
  // Your code here
  // count the letters in each word
  // [1, 2, 1, 1], 4
  // add numbers until less than or equal to n
  var res = [];
  var stringArray = string.split(' ');
  var str = '';
  var bufferLength = 0;
  var i = 0;
  var length = 0;

  debugger;
  for (var i = 0; i < stringArray.length; i++) {
    if (str.length === 0) {
      str += stringArray[i];
      length = str.length;
    }

    if (i === stringArray.length -1) {
      res.push(str);
    }

    for (var j = i + 1; j < stringArray.length; j++) {
      if (length + stringArray[j].length <= n) {
        str += ' ' + stringArray[j];
        length = str.length - 1;  
      } else {
        res.push(str);
        str = '';
      }
      break;
    }
  }

  return res;

}
