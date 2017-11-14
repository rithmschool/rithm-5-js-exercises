function replaceWith(str, char1, char2) {
  return str.replace(RegExp(char1, 'g'), char2);
}

function expand(arr, num) {
  let newArr = [];
  for (var i = 0; i < num; i++) {
    newArr.push(arr);
  }
  return newArr.reduce(function (a, b) { return a.concat(b) }, []);
}

function acceptNumbersOnly() {
  for (var i = 0; i < arguments.length; i++) {
    if (typeof (arguments[i]) !== 'number' || isNaN(arguments[i])) {
      return false;
    }
  }
  return true;
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
};

var obj1 = {
  name: "Foo",
  num: 33
}
var obj2 = {
  test: "thing",
  num: 55
}

function mergeObjects(obj1, obj2) {
  var newObj = {};
  for (var key in obj1) {
    newObj[key] = obj1[key];
  }
  for (var key in obj2) {
    newObj[key] = obj2[key];
  }
  return newObj;
}