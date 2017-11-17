## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
```
var name = 'Josie'
'When ${name} comes home, so good'

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```
const DO_NOT_CHANGE = 42;

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
```
[arr[0],arr[1]] = [arr[1],arr[0]]
```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
```
function double(arr){
    return arr.map(val => val *2)
}
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
var {a,b} = obj.numbers
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
function add (a = 10,b = 10) {
    return a +b
}
Research the following functions - what do they do?
`Array.from` - this method creates a new array instance of the passed in parameter to a new array-like object.
`Object.assign` - It's used to copy an object which can be used to merge with objects.
`Array.includes` - Checks if the array includes the specific element
`String.startsWith` - Determines if a string begins with the characters of a specified string, it will return a boolean.
