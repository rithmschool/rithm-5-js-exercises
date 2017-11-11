function productOfArray(arr){
	if(arr.length === 1){
		return arr[0];
	}
	return arr[0]*productOfArray(arr.slice(1));
}

function collectStrings(structure){
	if(typeof structure === 'string'){
		return structure;
	}
	var allTheStrings = [];
	for(var key in structure){
		allTheStrings = allTheStrings.concat(collectStrings(structure[key]));

	}
	return allTheStrings;
}

function contains(obj, val){
	if(obj === val)return true;
	if(typeof obj === "object"){
		for(var key in obj){
			if(contains(obj[key],val)){
				return true;
			} else {
				contains(obj[key], val);
			}
		}
		return false;
	}
}


// function search(array, val, index){
//   if(index === undefined) index = 0;
//   if(index === array.length - 1 && array[index] !== val) return -1;
//   if(array[index] === val) return index;
//   return search(array, val, index + 1);
// }

function search(array, val){
	//base case for contains
	if(array[0] ===val) return 0;
	//base case for doesn't contain
	if(array.length ===1 && array[0] !== val)return -1;
	//continue searching
	if(array.length > 1){
		//add 1 in each invocation to determine index 
		if(search(array.slice(1),val) >=0){
		return search(array.slice(1),val)+1
		} else {
			//if not found 
			return search(array.slice(1),val);
		}
	}

}

function binarySearch(){

}

function stringyNumbers(){
	
}
