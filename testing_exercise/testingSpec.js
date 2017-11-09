var expect = chai.expect;

// WRITE YOUR TESTS HERE!

// describe('function Name', funciton(){
//   it('describe what the function does', function(){
//     expects(functionCall()).to.equal('answer');
//   })
// })

describe("replaceWith", function(){
  it('should replace the first given character with second given character', function(){
    expect(replaceWith('awesome', 'e', 'z')).to.equal('awzsomz');
    expect(replaceWith('Foo', 'F', 'B')).to.equal('Boo');
  })
})


describe("expand", function(){
  it('should return an array with as many numbers specified', function(){
    expect(expand([1,2,3], 3)).to.equal([1,2,3,1,2,3,1,2,3]);
    expect(expand(['foo', 'test'], 1)).to.equal(['foo','test']);
  })
})

describe("acceptNumbersOnly", function(){
  it('should return true if all of them are integers', function(){
    expect(acceptNumbersOnly(1, 'foo')).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
  })
})

describe("mergeArrays", function(){
  it('should return an array with the values sorted', function(){
    expect(mergeArrays([2,1],[3,4])).to.equal([1,2,3,4]);
  })
})


describe("mergeObjects", function(){
  var obj1= {
      name: "Foo",
      num: 33
  }
  var obj2 = {
      test: "thing",
      num: 55
    }
  it('should return object with keys and values combined', function(){
    expect(mergeObjects(obj1, obj2)).to.equal({
        name: "Foo",
        test: "thing",
        num: 55
    });
  })
})
