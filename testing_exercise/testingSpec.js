var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("replaceWith", function(){
  it("should replace all occurances of char1 with char2", function(){
    expect(replaceWith('awesome', 'e', 'z')).to.equal('awzsomz');
    expect(replaceWith('Foo', 'F', 'B')).to.equal('Boo');
  });
});

describe("expand", function(){
  it("takes array and a number and returns a copy of the array with as many numbers as specified", function(){
    expect(expand([1,2,3], 3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
    expect(expand(['foo', 'test'],1)).to.deep.equal(['foo','test']);
  });
});

describe("acceptNumbersOnly", function(){
  it("takes any number of arguements and returns true if all are numbers", function(){
    expect(acceptNumbersOnly(1,'foo')).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
  });
});

describe('mergeArrays', function(){
  it("takes two arrays and return one array with the values sorted", function(){
    expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
  });
});

describe("mergeObjects", function(){
  it("takes two objects and returns one object with the keys and values combined", function(){
    expect(mergeObjects(obj1, obj2)).to.deep.equal({ name: 'Foo', test: 'thing', num: 55 })
  })
});