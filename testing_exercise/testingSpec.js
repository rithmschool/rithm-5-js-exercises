var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("Function which replaces a specified letter with another", function(){
	it("Checks to see if it is case sensitive", function(){
		expect(replaceWith("Foo", "F", "B")).to.equal("Boo")
	})
})

describe("Function takes array and repeats it n number of times", function(){
	it("Check to see if it produces the right output", function(){
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3])
	})
})