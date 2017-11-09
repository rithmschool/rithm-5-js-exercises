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


