var expect = chai.expect;
//1

 describe ('replaceWith',function(){
    it ('should replace all instances of char1 to char2',function() {
        expect(replaceWith('awesome','e','z')).to.equal('awzsomz');
        expect(replaceWith('Foo','F','B')).to.equal('Boo');
    });
});

//2

describe('expand',function(){
		expect(expand(['foo','test'],1)).to.deep.equal(['foo','test']);
	it ('should duplicate the array n amount times', function () {
		expect(expand([1,2,3],3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
	});
});

//3
describe('acceptNumbersOnly',function(){
    it('should return true if all the arguments passed in are numbers', function(){
    expect(acceptNumbersOnly(1,'foo')).to.equal(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false)
    });

});

//4
describe('mergeArrays',function(){
	it('should combine two arrays',function(){
		expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4])
	});
});

//5
describe('mergeObjects',function(){
	it('should merge the two objects',function(){
		  var obj1= {
           name: "Foo",
          num: 33
       }
      var obj2 = {
           test: "thing",
           num: 55
       }
		expect(mergeObjects(obj1,obj2)).to.deep.equal({name:'Foo',test:'thing',num:55});

	});
});