var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("Function which replaces a specified letter with another", function(){
	it("Checks to see if it is case sensitive", function(){
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo")
	});

	it("Returns the string with replacements", function(){
		expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz")
	})

})

describe("Function takes array and repeats it n number of times", function(){
	it("Check to see if it produces the right number array", function(){
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3])
	});

	it("Check that produces an empty array with 0", function(){
		expect(expand([1,2,3])).to.deep.equal([])
	})

	it("Check that it works when there are strings in the array as well", function(){
		expect(expand(["apple", "bob", 1, 3], 1)).to.deep.equal(["apple", "bob", 1, 3])
	})

	it("Returns an array", function(){
		expect(expand([])).to.be.an('array')
	})

})

describe("Function which takes in a number or arguments and checks if they are numbers with exception of NaN", function(){
	it("Checks if there is NaN in the argument", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false)
	});

	it("Checks that function returns true when all parameters are numbers", function(){
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true)
	})

	it("Checks that function returns false when one parameter is a string", function(){
		expect(acceptNumbersOnly(1,"foo") ).to.equal(false)
	})

})


describe("Function which takes in two arrays and returns one array with all the values sorted", function(){
	it("Checks that it returns an array", function(){
		expect(mergeArrays([2,1],[3,4])).to.be.an('array')
	})

	it("Checks that it returns the right array", function(){
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4])
	})
})

var obj1;
var obj2
beforeEach(function(){
  obj1 = {
  	name: "Foo",
  	num: 33
  }

  obj2 = {
  	test: "thing",
  	num: 55
  }
});


describe("Function which takes in two objects and combines the two with the second object overwriting any key in the first it shares", function(){
	it("Checks that it returns an object", function(){
		expect(mergeObjects(obj1, obj2)).to.be.an('object')
	})

	it("Checks that it returns the right array", function(){
		expect(mergeObjects(obj1, obj2)).to.deep.equal(
			{
			    name: "Foo",
			    test: "thing",
			    num: 55
			})
	})
})

