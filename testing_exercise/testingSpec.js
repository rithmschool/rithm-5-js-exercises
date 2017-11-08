var expect = chai.expect;

describe("replaceWith", function() {
  it("should return a string", function() {
    expect(replaceWith("awesome", "e", "z")).to.be.a("string");
  });
  it("should return a string of equal length", function() {
    expect(replaceWith("Fffoo", "F", "B").length).to.equal("Bffoo".length);
  });
  it("should replace each character in string with the new character", function() {
    expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
  });
  it("should restrict by cases", function() {
    expect(replaceWith("Fffoo", "F", "B")).to.equal("Bffoo");
  });
});

describe("expand", function() {
  it("should preserve the input array", function() {
    let chaiArr = [1, 2, 3];
    expand(chaiArr, 3);
    expect(chaiArr).to.deep.equal([1, 2, 3]);
  });
  it("should repeat an array a given number of times", function() {
    expect(expand([1, 2, 3], 3)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });
  it("should return an empty array if repeated 0 times", function() {
    expect(expand(["foo", "test"], 0)).to.deep.an("array").that.is.empty;
  });
});

describe("acceptsNumbersOnly", function() {
  it("should return true if all arguments are numbers", function() {
    expect(acceptsNumbersOnly(1, 2, 3)).to.be.true;
  });
  it("should return false if an argument is not a number", function() {
    expect(acceptsNumbersOnly("foo", "bar")).to.be.false;
  });
  it("should return false if 'NaN' is passed in", function() {
    expect(acceptsNumbersOnly(1, 2, NaN)).to.be.false;
  });
});

describe("mergeArrays", function() {
  it("should return an array", function() {
    expect(mergeArrays([2, 1], [3, 4])).to.be.an("array");
  });
  it("should return a sorted array", function() {
    expect(mergeArrays([2, 1], [3, 4])).to.deep.equal([1, 2, 3, 4]);
  });
  it("should preserve the original arrays", function() {
    let chaiArr1 = [2, 1];
    let chaiArr2 = [3, 4];
    mergeArrays(chaiArr1, chaiArr2);
    expect(chaiArr1).to.deep.equal([2, 1]) &&
      expect(chaiArr2).to.deep.equal([3, 4]);
  });
});

describe("mergeObjects", function() {
  let obj1 = {
    name: "Foo",
    num: 33
  };
  let obj2 = {
    test: "thing"
  };
  it("should return an object with the keys and values combined", function() {
    expect(mergeObjects(obj1, obj2)).to.deep.equal({
      name: "Foo",
      num: 33,
      test: "thing"
    });
  });
  let obj3 = {
    test: "thing",
    num: 55
  };
  it("should preserve the second key if a duplicate (overwrite the first)", function() {
    expect(mergeObjects(obj1, obj3)).to.deep.equal({
      name: "Foo",
      num: 55,
      test: "thing"
    });
  });
});
