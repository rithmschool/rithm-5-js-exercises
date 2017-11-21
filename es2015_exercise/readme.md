## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
```

var name = "Josie";
console.log(`When ${name} comes home, so good`);

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

var arr = [1,2]
arr[arr[0], arr[1]] = [arr[1], arr[0]]
//Still do not understand this but somehow it works

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
```

function double(arr){
    return arr.map(val => val * 2);
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

{a, b} = obj.numbers

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

function add(a = 10, b = 10){
    return a+b;
}


Research the following functions - what do they do?

`Array.from` -

Creates an array from an array-like obj or iterable (like arguments, or strings)

`Object.assign` -

Copies all enumerable own properties from source objects to target object. Later source objects will override the earlier ones.

`Array.includes` -

Returns a boolean of if an array includes a value

`String.startsWith` -

Returns if a string starts with the characters passed in, with an optional starting index


