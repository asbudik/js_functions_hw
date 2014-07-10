// Using your isPrime() function, create a function primes 
// that will return an array of all prime numbers up to a 
// certain amount.

// NOTE: I was not sure if "amount" meant that I should be
// stopping the array after result.length reaches a 
// certain amount or I should be stopping after I reach a
// certain number.


//BROKEN


result = [];
number = 0;

var isPrimeNum = function(num) {

  for (; num < 100; i++) {
    if (num < 2) {
    	return false;
    }
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num;
  }  
}


var primes = function(isPrime) {


  for (var i = 0; isPrime < 100; i++) {
    result.push(isPrime);
  }
  return result;
}

console.log(primes(isPrimeNum(number)))