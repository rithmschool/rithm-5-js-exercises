//1
function productOfArray (arr){
	if (arr.length === 1) return arr[0];
	return arr[0] * productOfArray(arr.slice(1))
}

//2
function collectStrings (object){
var container = [];
	if (typeof object === 'string') return object;
	for (var key in object) {
container = container.concat(collectStrings(object[key]))
	}
return container
}

//3
function contains(object,val) {
	var container = [];
	for(var key in obj){
		if (val === object[key])
		return object 
container.concat(contains(object[key]))

		}
		
	}


