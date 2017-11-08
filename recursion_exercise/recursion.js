function productOfArray(arr) {
	if (arr.length === 0) return 1;
	return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj, finArr = []) {
	for (const key in obj) {
		if (typeof obj[key] === "string") finArr.push(obj[key]);
		if (obj[key] !== "null" && typeof obj[key] === "object")
			collectStrings(obj[key], finArr);
		//why does this work? finArr is returned in the recursive function calls,
		//but I don't think it's being used anywhere
	}
	return finArr;
}

function contains(obj, val) {
	let answer = false;
	containsHelper(obj, val);
	return answer;

	function containsHelper(obj, val) {
		for (const key in obj) {
			if (obj[key] === val) {
				answer = true;
				break;
			}
			if (typeof obj[key] !== null && typeof obj[key] === "object")
				containsHelper(obj[key], val);
		}
	}
}
//is there a quicker way to exit once we know the answer is true?

function search(arr, val, index = 0) {
	//base
	if (arr.length === 1) return arr[0] === val ? index : -1;
	//recursive
	if (arr[0] === val) return index;
	else return search(arr.slice(1), val, ++index);
}

function binarySearch(arr, val, index = 0) {
	//base
	if (arr.length === 1) return arr[0] === val ? index : -1;
	//recursive
	let mid = Math.floor(arr.length / 2);
	if (arr[mid] === val) {
		return (index += mid);
	} else if (arr[mid] > val) {
		return search(arr.slice(0, mid), val, index);
	} else {
		return search(arr.slice(mid), val, (index += mid));
	}
}

function stringifyNumbers(obj) {
	let newObj = {};
	for (const key in obj) {
		let currentVal = obj[key];

		if (typeof currentVal === "number") {
			newObj[key] = "" + currentVal;
		} else if (Array.isArray(currentVal)) {
			newObj[key] = currentVal;
		} else if (currentVal !== null && typeof currentVal === "object") {
			newObj[key] = stringifyNumbers(currentVal);
		} else {
			newObj[key] = currentVal;
		}
	}
	return newObj;
}
