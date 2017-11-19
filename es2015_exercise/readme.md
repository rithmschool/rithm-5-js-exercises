## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
```

let name = "Josie"
console.log(`When ${name} comes home, so good`)


```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

const DO_NO_CHANGE = 42

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
```

[arr[0], arr[1]] = [arr[1], arr[0]]

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
```

var double = arr => {
    return arr.map(val => val*2)
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

var add = (a=10,b=10) => {
    return a + b
}



Research the following functions - what do they do?

`Array.from` - Creates a new Array instance from an array-like or iterable object. Can pass a string or an array into this function. 

`Object.assign` - It is used to copy the values of all enumerable own properties from one or more soure object to a target object. 

`Array.includes` - Returns a boolean value if an array includes a certain element

`String.startsWith` - Returns a boolean value if a string starts with the passed in argument value
