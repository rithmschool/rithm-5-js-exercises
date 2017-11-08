/*
- Write a function called `replaceWith` that takes in a string, a character to replace and a
 character to replace it with and returns the string with the replacements. Write tests to 
 make sure this is case **sensitive**

```javascript
replaceWith("awesome", "e", "z") // "awzsomz"
replaceWith("Foo", "F", "B") // "Boo"
```
*/

function replaceWith(str,replacee,replacer) {
  //create result str
  var result = '';
  //replace chars using str.split and str.join
  result = str.split(replacee);
  result = result.join(replacer);
  //return result
  return result;
}



/*
- Write a function called `expand` which takes an array and a number and returns a copy 
of the array with as many numbers as specified

```javascript
expand([1,2,3],3) //[1,2,3,1,2,3,1,2,3]
expand(["foo", "test"],1) //["foo","test"]
```
*/

function expand(arr, times) {
    var result = [];
    //loop thru arr and use concat on result to update results
    for(var i = 0;i < times; i++) {
      result = result.concat(arr);
    }
    return result;
}




/*

- Write a function called `acceptNumbersOnly` which takes in any number of arguments and returns 
`true` if all of them are numbers. Watch out for `NaN` - it is a `typeof "number"`!

```javascript
acceptNumbersOnly(1,"foo") // false
acceptNumbersOnly(1,2,3,4,5,6,7) // true
acceptNumbersOnly(1,2,3,4,5,6,NaN) // false
```
*/

function acceptNumbersOnly(...var_args) {
  //handle edgecase NaN by checking for it 
  //check whether typeof arguments is 'number'
  for(var i = 0; i < arguments.length; i++) {
    if(Number.isNaN(arguments[i])) {return false}
    if(typeof arguments[i] !== 'number') {return false}
  }
  return true;
  
}

/*
 Write a function called `mergeArrays` which takes in two arrays and returns one array with
 the values sorted

```javascript
mergeArrays([2,1],[3,4]) // [1,2,3,4]
```
*/

function mergeArrays(arr1,arr2) {
  //create result var
  var result = [];
  //merge arr1 and arr2 into result
  result = arr1.concat(arr2);
  //sort + return result
  return result.sort(function(a,b) {
    return a - b;
  });
  //return result;

}


/*
- Write a function called `mergeObjects` which takes in two objects and return an object with 
the keys and values combined. If the second parameter has the same key - it should override 
first one. There is a built in function called `Object.assign` - research it, but do not use
 it, try to do this on your own!

```javascript
var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}
mergeObjects(obj1, obj2) 

{
    name: "Foo",
    test: "thing",
    num: 55
}

```
*/


