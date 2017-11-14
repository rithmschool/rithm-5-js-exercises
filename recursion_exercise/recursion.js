function productOfArray(arr) {	
	if (arr.length === 0) {
		return 1
	}	
	return arr.pop() * productOfArray(arr)
}

console.log(productOfArray([1,2,3,10,2,2,2,2,2]))
	

