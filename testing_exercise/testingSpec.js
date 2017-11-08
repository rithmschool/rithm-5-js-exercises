var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("replace with function", function () { 
	it("replaces letter input with another input value", function() {
		expect(replaceWith('awesome','e','z')).to.equal("awzsomz");
	});

	it("is case sensitive", function () {
		expect(replaceWith('Foo','F','B')).to.equal('Boo');
	});
});

describe('expand function', function() {
	it('takes array and returns copy as many times specified', function() {
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});

	it('takes array and returns copy as many times specified', function() {
		expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
	});
});

describe('acceptNumbersOnly', function() {
	it('only takes numbers as inputs', function() {
		expect(acceptNumbersOnly(1,'foo')).to.equal(false);
	});

	it('only takes numbers', function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
	});

	it('only takes numbers', function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
	});
});

describe('mergeArrays function', function() {
	it('returns one array with values sorted', function() {
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	});
});

describe('mergeObjects function', function() {
	it('returns one array with values sorted', function() {
		expect(mergeObjects({name: "Foo", num: 33}, {test: "thing", num: 55})).to.deep.equal({
    name: "Foo", test: "thing", num: 55});
	});
});
