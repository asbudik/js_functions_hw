// Write a function that takes an array of numbers, and returns
// the sum of each number multiplied by its index.

// count += (number * index)
var arr = [2, 4, 6, 9, 3, 6]
var productOf = 0,
    sumOf = 0;

var sum = function(array) {
  for (i = 0; i < arr.length; i++) {
  	 productOf = arr[i] * i;
  	 sumOf += productOf;
  }
  return sumOf;
}

console.log(sum(arr));