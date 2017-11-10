function replaceWith(str, char1, char2){
  //input is a string and two characters
  //output is a new string with the replacements
  //
  return str.replace(RegExp(char1, 'g'), char2);

}

function expand(arr, num){
  //input is an arr and a number
  //output is a new array with the values * num
  // create new array .slice()?
  //for loop to access array, and push into new array
  // elements that are getting pushed, num - 1 after elements are copied

  var newArr = arr.slice()
  if (num <= 1) {
    return arr;
  }
  newArr = newArr.concat(expand(arr, num - 1));
  return newArr;
}


function acceptNumbersOnly(){
  //accepts multiple arguments
  //returns boolean if (typeof. "number")
  //NaN === typeof.of "number"

}
