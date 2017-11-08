function replaceWith(string, oldChar, newChar) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === oldChar) {
      newString += newChar;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

function expand(array, num) {
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    newArr = newArr.concat(array);
  }
  return newArr;
}

function acceptsNumbersOnly(...arguments) {
  for (let arg of arguments) {
    if (typeof arg !== "number" || isNaN(arg)) {
      return false;
    }
  }
  return true;
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

function mergeObjects(obj1, obj2) {
  let mergedObj = obj1;
  for (let key in obj2) {
    mergedObj[key] = obj2[key];
  }
  return mergedObj;
}
