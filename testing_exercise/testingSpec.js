var expect = chai.expect;

describe("replaceWith function", function() {
	it("takes in a string, a character to replace and a character to replace it with and returns the string with the replacements", function() {
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
	});
});

describe("expand function", function() {
	it("takes an array and a number and returns a copy of the array with the specified numbers", function() {
		expect(expand([1, 2, 3], 3)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3]);
		expect(expand(["foo", "test"], 1)).to.deep.equal(["foo", "test"]);
	});
});

describe("acceptNumbersOnly function", function() {
	it("takes in a number of arguments and returns true if all are true", function() {
		expect(acceptNumbersOnly(1, "foo")).to.equal(false);
		expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).to.equal(true);
		expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).to.equal(false);
	});
});

describe("mergeArrays function", function() {
	it("takes in two arrays and returns one array with sorted values", function() {
		expect(mergeArrays([2, 1], [3, 4])).to.deep.equal([1, 2, 3, 4]);
	});
});

describe("mergeObjects function", function() {
	it("takes in two objects and returns an objectwith the keys and values combined", function() {
		var obj1 = { name: "Foo" };
		var obj2 = { test: "thing", num: 55 };
		var numKeys = 3;
		var merged = mergeObjects(obj1, obj2);
		expect(merged).to.exist;
		expect(Object.keys(merged).length).to.equal(numKeys);
		expect(merged.name).to.equal("Foo");
		expect(merged.test).to.equal("thing");
		expect(merged.num).to.equal(55);
	});
});
