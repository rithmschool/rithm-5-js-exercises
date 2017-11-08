 function replaceWith(str, currChar, newChar){
 	for (let i=0; i<str.length; i++){
 		if(str[i] === currChar){
 			str = str.replace(currChar,  newChar);
 		}
 	}
 		return str;
}

function expand(arr, num){
	var newArr = [];
    for (let i=0; i < num; i++){
       newArr = newArr.concat(arr);
    }
    return newArr;
}

function acceptNumbersOnly(){
	for (let i=0; i < arguments.length; i++){
	    if (Number.isNaN(arguments[i]) || typeof(arguments[i]) !== "number"){
	        return false;
	    }
	}
	return true;
}

function mergeArrays(arr1, arr2){
    var arr = arr1.concat(arr2);
    return arr.sort();
}

function mergeObjects(obj1, obj2){
   for (var key in obj2){
       obj1[key] = obj2[key];
   }
   return obj1;
} 

