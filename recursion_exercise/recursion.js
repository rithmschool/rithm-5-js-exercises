// - Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all

function productOfArray(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array[0] * productOfArray(array.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// - Write a function called `collectStrings` which accepts an object and returns an array of all the values in the object that have a typeof string

// ```javascript
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
};

function collectStrings(obj) {
  let result = [];

  function treeClimber(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        result.push(obj[key]);
      }
      if (typeof obj[key] === "object") {
        treeClimber(obj[key]);
      }
    }
  }
  treeClimber(obj);
  return result;
}

//collectStrings(obj); // ["foo", "bar", "baz"])
// ```

// - Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.

// ```javascript
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44
          }
        }
      }
    }
  }
};

function contains(obj, value) {
  let bool = false;

  function treeClimber(obj, value) {
    for (let key in obj) {
      if (obj[key] === value) {
        bool = true;
      }
      if (typeof obj[key] === "object") {
        treeClimber(obj[key], value);
      }
    }
  }
  treeClimber(obj, value);
  return bool;
}
// PURE JS RECURSION SOLVED WITH SEAN
// function contains(obj, val, bool = false){
//   for(var prop in obj){
//     if(obj[prop] === val){
//       return true;
//     }
//     if(typeof (obj[prop]) === 'object'){
//       bool = contains(obj[prop], val, bool);
//     }
//   }
//   return bool;
// }

// contains(nestedObject, 44) // true
// contains(nestedObject, "foo") // false
// ```

// Complete the following CodeWars problems:

// - [https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript](https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript)

function realSize(arrays) {
  if (arrays.length < 1) {
    return 0;
  } else {
    let result = 0;
    let first = arrays.shift();
    result += Array.isArray(first) ? realSize(first) : 1;

    return result + realSize(arrays);
  }
}

// - [https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript](https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript)

function SumSquares(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

// - [https://www.codewars.com/kata/recursive-replication](https://www.codewars.com/kata/recursive-replication)
// replicate(3, 5) should return [5,5,5]

function replicate(times, number) {
  let newArr = [];

  if (times <= 0) {
    return newArr;
  }
  return newArr.concat(number, replicate(times - 1, number));
}
// **BONUS**

// - Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

function search(arr, num, count = 0) {
  //Base case
  if (count === arr.length) {
    return -1;
  }
  //recursion case
  if (arr[count] === num) {
    return count;
  }
  if (arr[count] !== num) {
    return search(arr, num, (count = count + 1));
  }
}

// ```javascript
// search([1,2,3,4,5],5) // 4
// search([1,2,3,4,5],15) // -1
// ```

// - Refactor your search function to use a faster algorithm called binary search [https://www.youtube.com/watch?v=JQhciTuD3E8](https://www.youtube.com/watch?v=JQhciTuD3E8).

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  let mid = Math.ceil((low + high) / 2);

  if (high < low) {
    return -1;
  }
  if (arr[mid] > val) {
    high = mid - 1;
    return binarySearch(arr, val, low, high);
  }
  if (arr[mid] < val) {
    low = mid + 1;
    return binarySearch(arr, val, low, high);
  } else {
    return mid;
  }
}

// ```javascript
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],15) // -1
// ```

// - Write a function called `stringifyNumbers` which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// ```javascript

var obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

function stringifyNumbers(obj) {
  let strNumObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      strNumObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      strNumObj[key] = "" + obj[key];
    } else {
      strNumObj[key] = obj[key];
    }
  }
  return strNumObj;
}

/*/
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/
// ```

// Complete [this](https://www.codewars.com/kata/mutual-recursion/train/javascript) codewars problem!

function F(n) {
  if (n === 0) {
    return 1;
  } else {
    return n - M(F(n - 1));
  }
}

function M(n) {
  if (n === 0) {
    return 0;
  } else {
    return n - F(M(n - 1));
  }
}