// Convert the following es5 code blocks into es2015 code:

// var name = "Josie"
// console.log("When " + name + " comes home, so good")

let name = "Josie";
console.log(`When ${name} comes home, so good`)


const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!

let arr = [1,2]
[arr[0], arr[1]] = [arr[1], arr[0]]; 

double = arr => arr.map(val => val*2);


let obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}
let {a,b} = obj.numbers

let add = (a=10,b=10) => (a + b);

//Research the following functions - what do they do?

// Array.from
    //The Array.from() method creates a new Array instance from an array-like or iterable object, such as a string, the function arguments or an array.
        //ie. let arr = Array.from('hello')
// Object.assign
    //The Object.assign() method copies values of all enumerable own properties
    //from  source objects to a target object. It will return the target object.
        //ie. 
        let o1 = { a: 1 };
        let o2 = { b: 2 };
        let o3 = { c: 3 };
        let objMerge = Object.assign(o1, o2,o3)
        o1; //{a: 1, b: 2, c: 3}
        objMerge; // {a: 1, b: 2, c: 3}

// Array.includes
    //The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
    //It can optionally take an index to start searching from a  certain index.
        // example: 
        let arr2 = [1,2,3,4,5,6,7,8,9];
        arr2.includes(3, -8) //true


// String.startsWith
    //The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate. 
        //It's case sensitive. Example:
        var str = 'To be, or not to be, that is the question.';
        console.log(str.startsWith('To be'));         // true;
        console.log(str.startsWith('to be'));         // false;


