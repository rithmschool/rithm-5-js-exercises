var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe("replaceWith", function() {
	it("should be case sensitive", function() {
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});
	it("should replace the input letters with new letters", function() {
		expect(replaceWith("awesomes", "s", "z")).to.equal("awezomez");
	});
});

describe("expand", function() {
	it("should increase array length by n times", function() {
		expect(expand([1, 2, 3], 3).length).to.equal(9);
	});

	it("should not change the original array", function() {
		var arr = [1, 2, 3];
		expand(arr, 3);
		expect(arr).to.deep.equal(arr);
	});

	it("should return a copy of the original array if n is 1", function() {
		expect(expand(["foo", "test"])).to.deep.equal(["foo", "test"]);
	});
});

describe("acceptNumbersOnly", function() {
	it("should return true if all the arguments are numbers", function() {
		expect(acceptNumbersOnly(1, "foo")).to.equal(false);
		expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).to.equal(true);
	});
	it("should return false if not all the arguments are numbers", function() {
		expect(acceptNumbersOnly(1, "foo")).to.equal(false);
	});
	it("should not count NaN as a number", function() {
		expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).to.equal(false);
	});
});

describe("mergeArrays", function() {
	var arr = [2, 1];
	var arrTwo = [3, 4];
	it("should return a sorted array", function() {
		expect(mergeArrays(arr, arrTwo)).to.deep.equal([1, 2, 3, 4]);
	});
});

describe("mergeObjects", function() {
	var obj1 = {
		name: "Foo",
		num: 33
	};
	var obj2 = {
		test: "thing",
		num: 55
	};

	it("should return an object with the keys and values combined", function() {
		expect(mergeObjects(obj1, obj2)).to.deep.equal({
			name: "Foo",
			test: "thing",
			num: 55
		});
	});
	it("if first object and second object have the same keys, second object key values should override first object key values", function() {
		expect(mergeObjects(obj1, obj2)["num"]).to.equal(55);
	});
});
