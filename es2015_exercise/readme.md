## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
console.log(`When ${name} comes home, so good`

```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!

const DO_NOT_CHANGE = 42;

```

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

var [b,a] = [2,1]
arr = [b,a]


```

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}

double = arr=> arr.map(val => val*2)

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

var {a,b} = obj.numbers
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

add = (a=10,b=10) => a+b

```

Research the following functions - what do they do?

`Array.from` - creates a new Array from an array-like object 
	`Array.from('foo') //['f','o','o']`

`Object.assign` - copies values values and keys from an object to a target

```javascript
var obj = { a: 1 };

var copy = Object.assign({}, obj);

console.log(copy); // { a: 1 }

```

`Array.includes` - checks to see if an array includes an element, returns a boolean

```javascript
var a = [1,2,3];
a.includes(2); //true
a.includes(4);//false
```


`String.startsWith` - checks to see if a string begins with a specified string, returns a boolean. Second optional parameter can indicate index to start from!

```javascript
var str = "To be, or not to be, that is the question.";
str.startsWith("To be") //true
str.starsWith("not to be") //false
str.startsWith("not to be", 10) //true
```
