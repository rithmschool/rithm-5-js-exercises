## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
```

let name = 'Josie';
console.log(`When ${name} comes home, so good`);

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

const  DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50 // Won't work!!!

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
```

let [a,b] = [1,2]
let arr = [b,a]

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
```

var double = arr => {
    return arr.map(val => val*2);
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

var {a,b} = obj.numbers;

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

var add = (a=10, b=20) => {
    return a+b;
}

Research the following functions - what do they do?

`Array.from` - creates a new array that copies another (iterable object)

`Object.assign` - copies values from one or multiples objects to another object

`Array.includes` - see if an array includes an item. can search at index as well

`String.startsWith` - test to see if a string starts with another string
