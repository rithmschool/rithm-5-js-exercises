function productOfArray(arr) {
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

function collectStrings(obj) {
	var values = [];

	for (var key in obj) {
		var val = obj[key];

		if (typeof val === "string") {
			values.push(val);
		} else if (typeof val === "object") {
			values = values.concat(collectStrings(val));
		}
	}
	return values;
}

var obj = {
	stuff: "foo",
	data: {
		val: {
			thing: {
				info: "bar",
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: "baz"
					}
				}
			}
		}
	}
};

collectStrings(obj); // ["foo", "bar", "baz"])

function contains(obj, val) {
	for (var key in obj) {
		var v = obj[key];

		if (typeof v === "object") {
			if (contains(v, val)) {
				return true;
			}
		}
		if (v === val) {
			return true;
		}
	}
	return false;
}
contains(nestedObject, 44); // true
// contains(nestedObject, "foo") // false
