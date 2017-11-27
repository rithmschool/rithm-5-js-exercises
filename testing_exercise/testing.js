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


function expand(arr, n) {
  var result = [];
  for (var i = 0; i < n; i++) {
  	result = result.concat(arr);
  }
  return result;
}


function acceptNumbersOnly(...args) {
  var bool = false
	for (var i  = 0; i < args.length; i++) {
      if (args[i].constructor === Number && args[i]) { 
      // args[i] checks if it's equal to itself, args[i] is NaN, it's not equal to itself.
        bool = true;
      } else {
        return false;
      }
	}
	return bool;
}


function mergeArrays(arr1, arr2) {
	return arr1.concat(arr2).sort()
}

// This can merge a variable number of objects, it will override any previous properties.
function mergeObjects(...args) {
	var result = {};
	for (var i = 0; i < args.length; i++) {
		for (var key in args[i]) {
			
			result[key] = args[i][key];
			
		}
	}
	return result;
}