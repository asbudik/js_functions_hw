// Create a function called numSquare that will return an 
// array of all perfect square numbers up to, but not exceeding
//  a max number.

var  filterArray = [6, 5, 3, 4, 13, 9, 20, 21, 2, 12, 7];
     


var numSquare = function(array) {

  result = [];

  for (i = 0; i < array.length; i++) {
  	if (Math.pow(array[i], 2) <= 100) {
  		result.push(array[i]);
  	}
  }
  return result;
}

console.log(numSquare(filterArray));