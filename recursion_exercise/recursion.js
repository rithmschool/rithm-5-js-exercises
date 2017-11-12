//Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all

function productOfArray (array){
	if (array.length === 1){
		return array[0];
	}
	return array[0] * productOfArray(array.slice(1));
}

//Write a function called collectStrings which accepts an object
// and returns an array of all the values in the object that have a typeof string

function collectStrings(object){
	var stringsArray = [];
	function helper (object, array){
		for(var key in object){
			if (typeof object[key] != 'object'){
				if (typeof object[key] === 'string'){
					array.push(object[key]);
				}
			} else {
				helper(object[key], array);
			}	
		}
	}
	helper(object, stringsArray);
	return stringsArray;
}

//Write a function called contains that searches for a value in a nested object. 
//It returns true if the object contains that value.

function contains(object, value){
	var result = false;
	for (var key in object){
		if (object[key] === value){
			return true;
		}
		else if (typeof object[key] === 'object'){
			result = contains(object[key], value);
		}
	}
	return result;
}

//Write a function called search that finds a value in an array
// and returns the index where the value is at. If the value is not found,
// the function should return negative 1.

function search(array, value){
		if (array[0] === value){
			return 0;
		}
		else if (array.length === 1){
		    return -1;
		}	
		return search(array.slice(1), value) > -1 ? search(array.slice(1), value) + 1: -1;
}
