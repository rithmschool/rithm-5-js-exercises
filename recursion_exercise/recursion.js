/*
- Write a function called `productOfArray` which takes in an array of numbers and returns 
the product of them all

```javascript
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
productOfArray([0,1,2,3]) // 0 
productOfArray([1,-2,3]) // -6
*/

function productOfArray(arr) {
  //create var result
  var result = 1;
  //create helper hunction to get product
  function helper(array) {
    if(array.length === 0) return;
    var removed = array[0] 
    result = result * removed;
    helper(array.slice(1));
  }
  //run helper recursive function 
  //return result
  helper(arr);
  return result;
}


/*
- Write a function called `collectStrings` which accepts an object and returns an array of all
 the values in the object that have a typeof string

```
var obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
```
*/

function collectStrings(obj,result) {
  //create result arr
  //base case? until no keys left (select smaller subset each time)
  if (typeof result == 'undefined') {
    result = []
  }
  
  //for in loop to go thru keys 
  //if "typeof obj['data']['val']" === 'object' then keep recursion going, if 
  //typeof obj['data']['val'] === 'string' then push  obj['data']['val'] to result.
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'string') {
        // store string in result   
        result.push(obj[key]); 
      }

      else if (typeof obj[key] === 'object') {
        //make input different for recursion?
        collectStrings(obj[key], result);
      }
    }
  } 
  return result;
}

  


