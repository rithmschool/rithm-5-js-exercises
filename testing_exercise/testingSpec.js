var expect = chai.expect;

// WRITE YOUR TESTS HERE!

//Write a function called replaceWith that takes in a string, 
//a character to replace and a character to replace it with
// and returns the string with the replacements. 
//Write tests to make sure this is case sensitive

describe("replaceWith", function(){
	it("returns a string", function(){
		expect(replaceWith("foo bar", "f", "z")).to.be.a('string');
	});
	it("replaces all characters that match second parameter", function(){
		expect(replaceWith("foo bar", "o", "s")).to.not.include("o");
	});
	it("is case sensitive for inputs", function(){
		expect(replaceWith("foO bar", "O", "e")).to.equal("foe bar");
	});
});

//Write a function called expand which takes an array
// and a number and returns a copy of the array with as many numbers as specified

describe("expand", function(){
	it("returns a copy of the original array", function(){
		expect(expand([1,2,3], 1)).to.not.equal([1,2,3]);
	});
	it("returns as many copies of original array values as specified", function(){
		expect(expand([1,2,3], 2)).to.deep.equal([1,2,3,1,2,3]);
	});
});

//Write a function called acceptNumbersOnly which takes in any number of arguments
// and returns true if all of them are numbers. 
//Watch out for NaN - it is a typeof "number"!

describe("acceptNumbersOnly", function(){
	it("returns a boolean", function(){
		expect(acceptNumbersOnly(1,2)).to.be.a('boolean');
		expect(acceptNumbersOnly(1, "b")).to.be.a('boolean');
	});
	it("accepts more than one parameter", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,7,8,"b")).to.equal(false);
	});
	it("returns false for NaN", function(){
		expect(acceptNumbersOnly(NaN)).to.equal(false);
	});
});

//Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted

describe("mergeArrays", function(){
	it("returns an array", function(){
		expect(mergeArrays([1], [2])).to.be.an('array');
	});
	it("returns a sorted array", function(){
		expect(mergeArrays([2,1], [4,3])).to.have.ordered.members([1,2,3,4]);
	});
});

//Write a function called mergeObjects which takes in two objects 
//and return an object with the keys and values combined. 
//If the second parameter has the same key - it should override first one. 
//There is a built in function called Object.assign - research it, but do not use it, try to do this on your own!

describe("mergeObjects", function(){
	it("returns an object", function(){
		expect(mergeObjects({a:1}, {b: 2})).to.be.an('object');
	});
	it("combines two objects into an object", function(){
		expect(mergeObjects({a:1}, {b: 2})).to.deep.equal({a: 1, b: 2});
	});
	it("returns the second value for a key that appears in both objects", function(){
		expect(mergeObjects({a: 1}, {a: 2})).to.deep.equal({a: 2});
	});
});
