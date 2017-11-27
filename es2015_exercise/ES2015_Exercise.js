// ES2015 Exercise
// Convert the following es5 code blocks into es2015 code:

/*javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
*/
var name = "Josie"
console.log(`When ${name} comes home, so good`)


/*javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
*/
const DO_NOT_CHANGE = 42


/*javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
*/
var [a,b] = [arr[0], arr[1]]
[a,b] = [b,a]


/*javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
*/
function double(arr) {
  return arr.map(a => a*2)
}


/*javascript
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;
*/
var {a,b} = obj.numbers


/*javascript
function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
}
*/
function add(a=10, b=10) {
  return a+b;
}



/*

Research the following functions - what do they do?

`Array.from` - Creates a new Array instance from an array-like or iterable object.
Array.from has two optional parameters; mapFn and thisArg. Mapfn maps a function to call 
on each element in the object, while thisArg is the value used in the Mapfn call-back.


`Object.assign` - Copies enumerable and own properties from a source object to a target object.


`Array.includes` - Searches an array for a value and returns true or false. Has an optional
parameter, fromIndex, which will start the search from the given index.


`String.startsWith` - Checks a string to see if it starts with a given string. Has an optional
parameter, position, which will make the given index the starting point of the search.

*/
