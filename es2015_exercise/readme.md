## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
```

```javascript
var name = "Josie"
console.log(`When ${name} comes home, so good`)
```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

```javascript
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; //TypeError: assignment to constant variable. 
```

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
```
```javascript
arr = [arr[1], arr[0]]
```

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
```
```javascript
var double = (arr) => arr.map(val => val * 2)
```

```javascript
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;
```

``` javascript
var {a,b} = obj.numbers;
```

```javascript
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
```
```javascript
function add(a=10, b=10){
    return a + b
}
```

Research the following functions - what do they do?

`Array.from` - `Array.from()` creates an array from an array-like object or iterable: arguments, strings, immutable arrays (declared with `const`), etc.

`Object.assign` - `Object.assign()` takes a target object as a first argument and one or more objects to copy values from as additional arguments. If there are keys with the same name, the last object passed in, overwrites the values of the previous objects.

`Array.includes` - `.includes()` was previous just a string method that returned a boolean indicating whether a substring could be found in the string, with an optional argument for starting and end indices. ES2015 generalized this method so it can now be used on arrays as well.

`String.startsWith` - `String.startsWith` accepts a substring and a string as arguments and returns a boolean whether the substring can be found at the start (with an optional argument to start at a different index) of the string.
