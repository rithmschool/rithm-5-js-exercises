function replaceWith(string, letter, replacer){
	var out = ""
	for(var i =0; i<string.length; i++){
		if(string[i] === letter){
			out += replacer
		} else {
			out += string[i]
		}
	}
	return out
}

function expand(arr, num){
	var out = []
	for(var i =0; i<num; i++){
		out = out.concat(arr)
	}
	return out
}

function acceptNumbersOnly(){
	for(var i =0; i<arguments.length; i++){
		if(isNaN(arguments[i]) || typeof arguments[i] !== "number"){
			return false
		}
	}
	return true
}

function mergeArrays(arr1, arr2){
	return arr1.concat(arr2).sort()
}

function mergeObjects(obj1, obj2){
	var obj = {}
	for(var key in obj1){
		obj[key] = obj1[key]
	}
	for(var key in obj2){
		obj[key] = obj2[key]
	}
	return obj
}