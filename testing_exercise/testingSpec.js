var expect = chai.expect;

// // WRITE YOUR TESTS HERE!

    
    describe ("replaceWith function", function(){
      it("allows for replacing a character in a string", function(){
        expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
        expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
         });
    })

//***************************************************************

describe ("expand function", function(){
    it("returns a copy of the array with as many numbers as specified", function(){
        expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
        expect(expand(["foo", "test"],1)).to.deep.equal(["foo","test"]);
    });
})

//*****************************************************************


describe ("acceptNumbersOnly function", function(){
    it("returns true if all of them  arguments are numbers", function(){
        expect(acceptNumbersOnly(1,"foo")).to.equal(false);
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
    });
})

//******************************************************************

describe ("mergeArrays function", function(){
    it("takes in two arrays and returns one array with the values sorted", function(){
        expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4]);
    });
})

//******************************************************************

describe ("mergeObjects function", function(){
    it("takes in two objects and returns an object with the keys and values combined", function(){
        var obj1= {
            name: "Foo",
            num: 33
        };
        var obj2 = {
            test: "thing",
            num: 55
        };

        var result = {
		    name: "Foo",
		    test: "thing",
		    num: 55
		};

        expect(mergeObjects(obj1, obj2)).to.deep.equal(result);
    });
})











