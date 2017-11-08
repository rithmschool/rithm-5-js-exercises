var expect = chai.expect;
/*

****TEMPLATE CODE****
var arr;

beforeEach(function(){
  arr = [1,3,5];
});

describe("Arrays", function(){
  describe("#push", function(){
    it("adds elements to an array", function(){
      arr.push(7);
      expect(arr).to.deep.equal([1,3,5,7]);
    });
    it("returns the new length of the array", function(){
      expect(arr.push(7)).to.equal(4);
    });
    it("adds anything into the array", function(){
      expect(arr.push({})).to.equal(4);
    });
  });
});
*/

var arr;
var obj1 = {};
var obj2 = {};

beforeEach(function(){
  arr = [1,2,3];
  obj1 = {
    name: "Foo",
    num: 33
  }
  obj2 = {
    test: "thing",
    num: 55
  }
});

describe("replaceWith", function(){
  it("returns a string", function(){
    expect(replaceWith("test","t","b")).to.be.a("string");
  });
  it("replaces specified character with another", function(){
    expect(replaceWith("awesome","e","z")).to.equal("awzsomz");
  });
  it("does not replace different case character with another", function(){
    expect(replaceWith("awesome","E","z")).to.deep.equal("awesome");
  });
  it("leaves target with same length as original", function(){
    expect(replaceWith("Foo", "F", "B")).to.have.lengthOf("Foo".length);
  });
});



describe("expand", function(){
  it("returns result with result.length of (n * arr.length)", function(){
    expect(expand(arr,3)).to.have.lengthOf((arr.length) * 3);
  });
  it("returns an edited copy of the array while not mutating the original", function(){
    expect(expand(arr,3)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    expect(arr).to.deep.equal([1, 2, 3]);
  });
  it("includes the original array's members in return array", function(){
      expect(expand(arr,3)).to.include.deep.members([1,2,3]);
  }); 
  it("returns a copy of the array with as many numbers as specified", function(){
    expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
  });
  it("returns an empty array when 0 is given as argument", function(){
    expect(expand(arr,0)).to.be.empty;
  });
})



describe("acceptNumbersOnly", function() {
  it("returns true only if all arguments are numbers", function(){
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.be.true; 
  });
  it("returns false if any argument is not a number", function(){
    expect(acceptNumbersOnly(1,"foo")).to.be.false;
  });
  it("handles edgecase of 'NaN' argument and returns false", function(){
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.be.false;
  });

})



describe("mergeArrays", function() {
  it("takes in two arrays and returns one array with the values sorted", function(){
    expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]); 
  });
  
  it("includes the original array's members in return array", function(){
      expect(mergeArrays([2,1],[3,4])).to.include.deep.members([1,2,3,4]);
  }); 
  /* WORKING ON THIS
  it("has two arguments as input", function(){
      expect(mergeArrays([2,1],[3,4])).to.have(arguments.length === 2);
    });
  it("returns only one array as output", function(){
    expect(mergeArrays([2,1],[3,4])).to.have.lengthOf(1);
  });  
  */

})



describe("mergeObjects", function() {
  it("takes in two objects and returns one object with the keys and values combined", function(){
    expect(mergeObjects(obj1,obj2)).to.deep.equal({
      test: "thing",
      name: "Foo",
      num: 55
    }); 
  });
  
  it("includes the original array's members in return array", function(){
      expect(mergeObjects([2,1],[3,4])).to.include.deep.members([1,2,3,4]);
  }); 
  /* WORKING ON THIS
  it("has two arguments as input", function(){
      expect(mergeObjects([2,1],[3,4])).to.have(arguments.length === 2);
    });
  it("returns only one array as output", function(){
    expect(mergeObjects([2,1],[3,4])).to.have.lengthOf(1);
  });  
  */

})






/*
- Write a function called `mergeObjects` which takes in two objects and return an object with 
the keys and values combined. If the second parameter has the same key - it should override 
first one. There is a built in function called `Object.assign` - research it, but do not use
 it, try to do this on your own!

```javascript
var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}
mergeObjects(obj1, obj2) 

{
    name: "Foo",
    test: "thing",
    num: 55
}

```
*/






















