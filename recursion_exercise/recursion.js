function productOfArray(arr) {
  //base case - the array length is 0
  //this solution works  - but it mutates the original array
  //return arr.pop() * productOfArray(arr;
// lets make this a pure function
//return arr[0] * productOfArray(arr.slice(1));


  if (arr.length === 1){
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));

}
function collectStrings(obj){
  // use typeof "string"
  //input is an obj
  //return an array of strings
  //use helper method that does the recursion in it, but build the array outside of the helper funciton
  let strings = [];
    function helper(obj){
      for (let key in obj) {
              if (typeof obj[key] === "string"){
                strings.push(obj[key]);
              }
              if (typeof obj[key] === "object")
                helper(obj[key]);
              }
    }
     helper(obj);
  return strings;
}



function contains(obj, val){
  //input: object and value;
  //returns true or false if value exists in object
  let result = false;
    function helper(obj, val){
      for (let key in obj){
          if (obj[key] === val){
            result = true;
            break;
          }
          if (typeof obj[key] === "object"){
            helper(obj[key], val);
          }
      }
    }
    helper(obj, val);
    return result;
}

function search(arr, val, index = 0){

  if (index === arr.length) return -1;
  if (arr[index] === val) return index;
  else{
    return search(arr, val, index + 1);
  }

}

function binarySearch (arr, val, start = 0, end = arr.length - 1){
  let mid = Math.floor((start + end)/ 2);
  if (start > end) return -1;
  if (arr[mid] === val) return mid;
  else if (arr[mid] < val) {
    start = mid + 1;
    return binarySearch(arr, val, start, end);
  }
  else if (arr[mid] > val) {
    end = mid - 1;
    return binarySearch(arr, val, start, end);
  }
}


function stringifyNumbers (obj){
  let strObj = {};
  for (let key in obj){
    if (typeof obj[key] === "number"){
      strObj[key] =  "" + obj[key];
    }
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key])){
      strObj[key] = stringifyNumbers(obj[key]);
    } else {
      strObj[key] = obj[key];
    }

  }
  return strObj;
}

// function flatten(arr){
//   var newArr = []
//   for(var i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//       flatten(arr[i]) //dont want to return the result of your recursive call
//
//     } else {
//         newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }
