var expect = chai.expect;

// WRITE YOUR TESTS HERE!
describe('replaceWith', function() {
	it('Replaces a character with a given character', function() {
      expect(replaceWith('hello world', 'o', 'a')).to.equal('hella warld');
	});  
    it('Replaces a character with a given character', function() {
      expect(replaceWith("Foo", "F", "B")).to.equal('Boo');
	});
	
});

// USE expect()to.deep.equal() IN ORDER TO COMPARE VALUES OF ARRAYS
describe('expand', function() {
	it('returns a copy of the array with as many numbers as specified', function() {
		expect(expand([1,2,3], 3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
	it('returns a copy of the array with as many numbers as specified', function() {
		expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
	});
});

describe('acceptNumbersOnly', function() {
	it('accepts any number of agruments as numbers only, does not accept NaN', function() {
		expect(acceptNumbersOnly(1,2,3)).to.equal(true);
	});
	it('accepts any number of agruments as numbers only, does not accept NaN', function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
	});
	it('accepts any number of agruments as numbers only, does not accept NaN', function() {
		expect(acceptNumbersOnly(1,"foo")).to.equal(false);
	});
	it('accepts any number of agruments as numbers only, does not accept NaN', function() {
		expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
	});
});

describe('mergeArrays', function() {
	it('merges two arrays and returns one sorted array', function() {
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
	})
	it('merges two arrays and returns one sorted array', function() {
		expect(mergeArrays([5,4,3,2], [1,2,3,4])).to.deep.equal([1,2,2,3,3,4,4,5]);
	});
});

describe('mergeObjects', function() {
	it('takes two objects and returns one object with the keys and values combined', function() {
		expect(mergeObjects({name: "Foo", num: 33},{test: "thing", num: 55})).to.deep.equal({name: "Foo", test: "thing", num: 55});
	});
});


