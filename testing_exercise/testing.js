function replaceWith(str, originalLetter, newLetter){
	var newStr = "";
	for(var i =0; i<str.length; i++){
		if(str[i] === originalLetter){
			newStr+=newLetter;
		} else {
		newStr+=str[i];
		}
	}
	return newStr;
}

function expand(arr, n){
	var newArr = arr;
	while(n > 1){
		newArr = newArr.concat(arr);
		n--;
	}
	return newArr;
}

function acceptNumbersOnly(){
	for(var i = 0; i < arguments.length; i++){
		if(isNaN(arguments[i])|| typeof arguments[i] !== "number") return false;		
	}
	return true;
}

function mergeArrays(arrOne, arrTwo){
	var newArr = arrOne;
	newArr = newArr.concat(arrTwo);
	newArr.sort(function(a,b){
		return a>b;
	});
	return newArr;
}

function mergeObjects(obj1, obj2){
	var newObj = obj1;
	for(var key in obj2){
		newObj[key] = obj2[key];
	}
	return newObj;
}