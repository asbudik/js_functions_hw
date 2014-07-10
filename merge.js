// Write a function called merge. The function should take 
// two sorted arrays of numbers as input and return a merged 
// array of the sorted numbers from the input. For example, 
// if the input arrays were 
// var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9]; 
// Then the returned array would be: [2,3,4,5,6,8,9,11].

var arr1 = [3, 4, 6, 11],
    arr2 = [2, 3, 4, 5, 6, 8, 9, 11];



var merge = function(array1, array2) {


  var result = [];

  for (var i = 0, j = 0; result.length < array1.length 
       + array2.length;) {

    if (i === array1.length) {
      return result.concat(array2.slice(j));
    }
    else if (j === array2.length) {
      return result.concat(array1.slice(i));
    }
    else if (array1[i] === array2[j]) {
      result.push(array1[i]);
      i += 1;
    }
    else if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i += 1;
    }
    else {
      result.push(array2[j]);
      j += 1;
    }

  }  
  return result;
}

console.log(merge(arr1, arr2));