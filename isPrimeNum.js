// Create a function to return true or false if a number 
// passed in a prime number.

var isPrimeNum = function(num) {

  if (num < 2) {
  	return false;
  }
  for ( var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNum(7))