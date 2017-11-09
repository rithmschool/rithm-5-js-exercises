function replaceWith(str, char1, char2){
  //input is a string and two characters
  //output is a new string with the replacements
  //
  return str.replace(RegExp(char1, 'g'), char2);

}

function expand()
