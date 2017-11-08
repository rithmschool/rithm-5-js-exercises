var expect = chai.expect;

describe("replaceWith", function() {
	it("returns a string with the correct letters changed", function() {
		expect(replaceWith("hello", "e", "o")).to.equal("hollo");
		expect(replaceWith("hello", "l", "p")).to.equal("heppo");
	});
	it("watches capitalization", function() {
		expect(replaceWith("hElLo", "l", "L")).to.equal("hELLo");
	});
});

describe("expand", function() {
	it("returns an array of the right length", function() {
		expect(expand([1, 2, 3], 3)).to.have.lengthOf(9);
	});
	it("returns a new array", function() {
		var testArr = [1, 2, 3, 4, 5];
		expand(testArr, 3);
		expect(testArr).to.have.lengthOf(5);
	});
	it("returns a correctly modified new array", function() {
		expect(expand(["a", 1, -5], 2)).to.deep.equal(["a", 1, -5, "a", 1, -5]);
	});
});

describe("acceptNumbersOnly", function() {
	it("correctly determines if all arguments are numbers", function() {
		expect(acceptNumbersOnly(1, "foo")).to.equal(false);
		expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).to.equal(true);
	});
	it("does not consider NaN a number", function() {
		expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).to.equal(false);
	});
});

describe("mergeArrays", function() {
	it("returns an array", function() {
		expect(mergeArrays([1, 2, 3], [2, 3, 4])).to.be.a("array");
	});
	it("returns the values sorted", function() {
		expect(mergeArrays([2, 1], [3, 4])).to.deep.equal([1, 2, 3, 4]);
	});
});

describe("mergeObjects", function() {
	it("returns an object", function() {
		expect(mergeObjects({ a: 1 }, { b: 2 })).to.be.a("object");
	});
	it("returns an object with the keys of both objects", function() {
		expect(mergeObjects({ a: 1 }, { b: 2 })).to.have.property("a");
		expect(mergeObjects({ a: 1 }, { b: 2 })).to.have.property("b");
	});
	it("returns an object where duplicate keys are overriden by the second object", function() {
		var obj1 = { num: 33 };
		var obj2 = { num: 55 };
		var newObj = mergeObjects(obj1, obj2);
		expect(newObj.num).to.equal(55);
	});
	it("returns the correct new object", function() {
		var obj1 = {
			name: "Foo",
			num: 33
		};
		var obj2 = {
			test: "thing",
			num: 55
		};
		var newObj = mergeObjects(obj1, obj2);
		expect(newObj).to.deep.equal({ name: "Foo", num: 55, test: "thing" });
	});
});
