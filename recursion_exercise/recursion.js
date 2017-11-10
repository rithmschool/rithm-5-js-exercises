function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj) {
  var arr = [];

  function collectHelper(obj, arr) {
    for (var key in obj) {
      if (typeof obj[key] === 'string') {
        arr.push(obj[key]);
      }
      if (typeof obj[key] === 'object') {
        collectHelper(obj[key], arr);
      }
    }
  }
  collectHelper(obj, arr);
  return arr;
}

function contains(obj, val) {
  for (var prop in obj) {
    if (obj[prop] === val) return true;

    if (typeof obj[prop] === 'object') {
      contains(obj[prop], val);
    }
  }
  return false;
}

function contains(obj, val, bool = false) {

  for (var prop in obj) {
    if (obj[prop] === val) {
      return true;
    }
    if (typeof (obj[prop]) === 'object') {
      bool = contains(obj[prop], val, bool);
    }
  }
  return bool;
}

function search(arr, num, count = 0) {
 
  if (count === arr.length) {
    return -1;
  }
  if (arr[count] === num) {
    return count;
  }
  if (arr[count] !== num) {
    return search(arr, num, (count = count + 1))
  }
}