

function replaceWith(str,replacee,replacer) {
  //create result str
  var result = '';
  //replace chars using str.split and str.join
  result = str.split(replacee);
  result = result.join(replacer);
  //return result
  return result;
}





function expand(arr, times) {
    var result = [];
    //loop thru arr and use concat on result to update results
    for(var i = 0;i < times; i++) {
      result = result.concat(arr);
    }
    return result;
}





function acceptNumbersOnly(...var_args) {
  //handle edgecase NaN by checking for it 
  //check whether typeof arguments is 'number'
  for(var i = 0; i < arguments.length; i++) {
    if(Number.isNaN(arguments[i])) {return false}
    if(typeof arguments[i] !== 'number') {return false}
  }
  return true;
  
}


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


function mergeObjects(obj1,obj2) {
  //create result obj
  var result = {};
  //for in loop obj1 and assign to result
  for(var key in obj1) {
    result[key] = obj1[key];
  }
  //for in loop obj2 and assign to result
  for(var otherKey in obj2) {
    result[otherKey] = obj2[otherKey];
  }
  return result;
}
