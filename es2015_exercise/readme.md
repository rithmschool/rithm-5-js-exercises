## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
let name = "Josie"
console.log(`When ${name} comes home, so good`)
```

```javascript
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // TypeError
```

```javascript
let arr = [1,2]
[arr[0], arr[1]] = [arr[1], arr[0]]
```

```javascript
const double = (arr) => arr.map((val) => val * 2);
```

```javascript
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var {a, b} = obj.numbers;
```

```javascript
const add = (a = 10, b = 10) => a + b;
```

Research the following functions - what do they do?

`Array.from` - creates an array from an iterable or array-like object (Strings, Arguments, Sets, Maps HTML nodes). Returns an array.

`Object.assign` - makes a clone of an object and can be used to merge objects. Returns the first parameter object.

`Array.includes` - checks if a value is stored as an element in an array. Returns a boolean.

`String.startsWith` - checks if a string begins with the passed in string. Returns a boolean.
