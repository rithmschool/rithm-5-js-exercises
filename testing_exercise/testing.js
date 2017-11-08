//replaceWith function

function replaceWith(string, firstChar, secondChar){
	var newString = "";
	for (var i = 0; i < string.length; i++){
		if(string[i] === firstChar){
			newString += secondChar;
		}else {
			newString += string[i];
		}
	}
	return newString;
}

//expand function

function expand(array, number){
	var newArray = [];
	for (var i = 0; i < number; i++){
		newArray = newArray.concat(array);
	}
	return newArray;
}

//acceptNumbersOnly function

function acceptNumbersOnly (){
	for (var i = 0; i < arguments.length; i++){
		if (typeof arguments[i] != "number" || Number.isNaN(arguments[i])){
			return false;
		}
	}
	return true;
}

//mergeArrays function

function mergeArrays(arrayA, arrayB){
	var mergedArray = arrayA.concat(arrayB);
	return mergedArray.sort(function(num1, num2){
		return num1 - num2;
	});
}

//mergeObjects function

function mergeObjects (objectA, objectB){
	var targetObject = {};
	for (var keyA in objectA){
		targetObject[keyA] = objectA[keyA];
	}
	for (var keyB in objectB){
		targetObject[keyB] = objectB[keyB];
	}
	return targetObject;
}