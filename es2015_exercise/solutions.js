var name = "Josie"
//console.log("When " + name + " comes home, so good")
console.log(`When ${name} comes home, so good`);


const DO_NOT_CHANGE= 42;
DO_NOT_CHANGE = 50; // stop me from doing this!


var arr = [1,2]
[arr[0],arr[1]] = [arr[1],arr[0]]

function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
var double = arr => arr.map( val => val * 2 )

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

function add(a=10, b=10){
    return a+b
}


var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}
var {a, b} = obj.numbers


`Array.from` -  //creates a new array from an array-like (arguments, strings) or iterable objects(set, map).

`Object.assign` - //is used to copy all the enumerable properties of one or more obj into a new obj, using getters and setters.
//Since it only copies property values, cant be used for deep cloning.

`Array.includes` -//searcehes for an element in a array, returning a boolean.
//With a given optional argument, it will start the search from that position.

`String.startsWith` - `str.startsWith(searchString[, position])` 
//searchis for a char at the beginning of a string or from position specified.
//Returns a boolean.

