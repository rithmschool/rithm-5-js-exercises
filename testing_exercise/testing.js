function replaceWith(string, char, charReplacement) {
	var result = '';
	for (var i = 0 ; i < string.length; i++) {      
		if (string[i] === char) {	
          result += charReplacement;

		} else {
          result += string[i];
		}
	}	
  return result;
}

console.log(replaceWith('hello world', 'o', 'a'))