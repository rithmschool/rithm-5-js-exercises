function productOfArray(arr) {
  if(arr.length === 1) {
    return arr[0];
  }

  return arr[0] * productOfArray(arr.slice(1));
}


function collectStrings(obj) {
  var result = [];
  
  function imAHelper(obj) {
    for (var key in obj) {
      if (typeof obj[key] === 'string') {
        result.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        imAHelper(obj[key]);
      }
    }
  }
  
  imAHelper(obj);
  return result;
}

function contains(obj, val) {
    
    for (var key in obj) {
      //if it's an object keep looping through object
      if (typeof obj[key] === 'object') {
         if(contains(obj[key], val)){
             return true
         }
      }
      
      //if the object key equals value return true
      if(obj[key] === val) {
        return true;
      } 
    }

    return false;
}


