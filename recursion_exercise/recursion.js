function productOfArray(arr){
	if(arr.length === 1) return arr[0]
	return arr[0] * productOfArray(arr.slice(1))
}

function contains(obj, value){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			console.log(hi)
		}
	}
	return contains(obj[key])
}

function search(arr, num){
	if(arr.length === 0) return -1
	if(arr[0] === num) return arr[0]
	return search(arr.slice(1))
}