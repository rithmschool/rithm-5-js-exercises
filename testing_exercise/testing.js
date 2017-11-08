function replaceWith(str, letA, letB) {
	let regX = new RegExp(letA, "g");
	return str.replace(regX, letB);
}

function expand(arr, num) {
	let fin = arr.slice();
	for (let i = 1; i < num; i++) {
		fin = fin.concat(arr.slice());
	}
	return fin;
}

function acceptNumbersOnly() {
	for (let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== "number" || isNaN(arguments[i]))
			return false;
	}
	return true;
}

function mergeArrays(arr1, arr2) {
	return arr1.concat(arr2).sort((a, b) => a - b);
}

function mergeObjects(obj1, obj2) {
	let newObj = {};
	for (const key in obj1) {
		newObj[key] = obj1[key];
	}
	for (const key in obj2) {
		newObj[key] = obj2[key];
	}
	return newObj;
}
