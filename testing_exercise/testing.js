function replaceWith(str, let, replVal) {
	var result = '';
	for(var i = 0; i < str.length; i++) {
		if(str[i] !== let) {
			result += str[i];
		} else if (str[i] === let) {
			result += replVal;
		}
	}
	return result;
}


function expand(array,num) {
  var result = [];
	for (var i = 0; i < num; i++) {
		for (var j = 0; j < array.length; j++) {
		  result.push(array[j]);
		}
	}
	return result;
}


function acceptNumbersOnly() {
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'number' || isNaN(arguments[i])) {
			return false;
		} 
	}
	return true;
}

function mergeArrays(arr1,arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    if(arr1[i] > arr1[i+1]) {
      arr1.unshift(arr1.pop());
    }
  }
  result = arr1.concat(arr2);
  return result;
}

function mergeObjects(obj1,obj2) {
  var result = {};
 
 console.log(Object.keys(obj1)[0]);
 
  for (var i = 0; i < Object.keys(obj1).length; i++) {
    result[Object.keys(obj1)[i]] = obj1[Object.keys(obj1)[i]];
    result[Object.keys(obj2)[i]] = obj2[Object.keys(obj2)[i]];
  }
    return result;
}

