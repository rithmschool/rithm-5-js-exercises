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

function search (array, num) {
   for (var i = 0; i < array.length; i++) {
     if(array[i] === num) {
         return i;
     }
   }
   return -1;
}


function binarySearch (array, num) {
    if (array.length === 0) {
        return -1;
    }

   if (array[Math.ceil(array.length/2)] === num) {
       return Math.ceil(array.length/2);
   } if (num > array[Math.ceil(array.length/2)]) {
       return binarySearch(array.splice(Math.ceil(array.length/2), num));
   } else {
       return binarySearch(array.splice(0, Math.ceil(array.length/2 + 1)), num);
   }
}
binarySearch([1,2,3,4,5],4);

function stringifyNumbers(obj) {
    var result = obj;

    
    function helper(obj) {
        for (var key in obj) {
          if (typeof obj[key] === 'number') { 
                  obj[key] = obj[key].toString();
            }
            
            // if (typeof obj[key] !== 'number' || typeof obj[key] !== 'object') {
            //     if(result.hasOwnProperty(key)) {
            //       result[key] = obj[key];
            //     }
            // }
            
            if (typeof obj[key] === 'object') {
                // result[key] = obj[key];
                helper(obj[key]);
            } 
            
            
            // result[key] = obj[key];
            
        }

    }
    helper(result);
    return result;
}



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
    }

stringifyNumbers(obj);

/* ******************* CODE WARS PROBLEMS *****************************

function realSize(arrays) {
  //loop through the array 
  //if you ever encounter a number then count++
  //go until there are no more array positions 
var count = 0;

function helper(arrays) {
  for (var i = 0; i < arrays.length; i++) {
    if(typeof arrays[i] === 'number') {
      count++;
    } if (Array.isArray(arrays[i])) {
       helper(arrays[i]);
    }
   }
}
helper(arrays);
return count;
}



function SumSquares(l){
  var sum = 0;
  
  function helper(l) {
    for (var i = 0; i < l.length; i++) {
      if (Array.isArray(l[i])) {
        helper(l[i]);
      } else if (typeof l[i] === 'number') {
          sum += l[i] * l[i];
      }
    }
  }

helper(l);
return sum;
}


function replicate(times, number) {
  var result = [];

  function helper(times, number) {
    if(times <= 0) {
      return;
    }
  
    result.push(number);

    if(times > 0) {
      helper(times-1, number);
    }
  }
  helper(times, number);
 return result;
}
replicate(10,6);
*/