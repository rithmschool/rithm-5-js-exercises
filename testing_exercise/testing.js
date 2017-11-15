function replaceWith(str, char1, char2) {
	var newStr = "";

	for (var i = 0; i < str.length; i++) {
		if (str[i] === char1) {
			newStr += char2;
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}
replaceWith("awesome", "e", "z");

function expand(arr, n) {
	var newArr = [];

	for (var i = 0; i < n; i++) {
		newArr = newArr.concat(arr);
	}
	return newArr;
}
expand([1, 2, 3], 3);

function acceptNumbersOnly() {
	for (var i = 0; i < arguments.length; i++) {
		var ele = arguments[i];
		if (typeof ele !== "number" || isNaN(ele)) {
			return false;
		}
	}
	return true;
}
acceptNumbersOnly(1, "foo");
acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7); // true
acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN); // false

function mergeArrays(arr1, arr2) {
	var sorted = [];
	sorted = sorted.concat(arr1, arr2);
	sorted.sort();

	return sorted;
}
mergeArrays([2, 1], [3, 4]); // [1,2,3,4]

function mergeObjects(obj1, obj2) {
	var merge = obj1;

	for (var k in obj2) {
		merge[k] = obj2[k];
	}
	return merge;
}
mergeObjects(obj1, obj2);
