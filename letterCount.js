// Write a function that takes a string that finds out how many 
// times a character occurs. For example, the string "apple" would 
// print the following:


var letterCount = function(string){

  lettersAndCounts = {};

  for (i = 0; i < string.length; i++) {
  	currentLetter = string[i].toLowerCase();
    if(typeof lettersAndCounts[currentLetter] === 'undefined'){
      lettersAndCounts[currentLetter] = 1;
    }
    else {
    	lettersAndCounts[currentLetter] += 1;
    }

  }
  return lettersAndCounts;
}

console.log(letterCount("Washington"))