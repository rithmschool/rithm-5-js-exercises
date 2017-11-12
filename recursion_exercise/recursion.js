//Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arr){
    if (arr.length <= 0){
        return 1;
    }else{
        return arr[0]*productOfArray(arr.slice(1));
    }
}

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60

//******************************************************************
function collectStrings(obj){
    var result = [];

    function helper(obj){
       for(var key in obj){
          if (typeof obj[key] === "string"){
             result.push(obj[key]);
           }
           if (typeof obj[key] === "object"){
               helper(obj[key]);
           }
        }
     }
    helper(obj);
    return result;
}
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
//*******************************************************************
function contains(obj, val){
    for(var key in obj){
           if (obj[key] === val){
               return true;
           }
           else if (typeof obj[key] === "object"){
               return contains(obj[key], val);
           }
           else{
               return false;
           }
       }
}

// contains(nestedObject, 44) // true
// contains(nestedObject, "foo") // false

//******************************************************************

//Given a multi-dimensional integer array, return the total number of integers,
// stored inside this array.

// with helper method
function realSize(arr) {
   var count = 0;

   function helper(arr){
      for (var i=0; i < arr.length; i++){
          console.log("Number.isInteger arr[i] " + Number.isInteger(arr[i]));
          if (Number.isInteger(arr[i])){
             count++;
          }
          if (Array.isArray(arr[i])){ 
             helper(arr[i]);
          }
      }
   }
  helper(arr);
  return count;
}

//pure recursion
function realSize(arr, count=0) {
      
         for (var i=0; i < arr.length; i++){
  
             if (Number.isInteger(arr[i])){
                count++;
             }
             if (Array.isArray(arr[i])){ 
                count = realSize(arr[i], count);
              }
          }
      return count;
     
}

//realSize([[[5], 3], 0, 2, [], [4, [5, 6]]]) //7
realSize([1],[2],[3]);

realSize([[[5], 3], 0, 2, [], [4, [5, 6]]]) //7

/*************************************************/

 function replicate(times, number){
     var result = [];
     if (times < 0) return [];
     
     function helper(times){
        if (times === 0) return;
        
        result.push(number);
        return helper(times-1);
     }
     helper(times);
     return result;
 }        

replicate(3, 5) //[5,5,5]

/************************************************/
//Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(arr){
   var sum = 0;

   function helper(arr){
      if (arr.length <=0) return;

      for(let i=0; i < arr.length; i++){
          if (typeof arr[i] === "number"){
             sum += arr[i] * arr[i];
             }

          if (Array.isArray(arr[i])){ 
             helper(arr[i]);
          }
      } 
   }
   helper(arr);
   return sum; 
}

var l = [1,2,3]
SumSquares(l) //== 14

var l = [[1,2],3]
SumSquares(l) //== 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) //== 1

var l = [10,[[10],10],[10]]
SumSquares(l) //== 400

//**************************************************************
//Write a function called stringifyNumbers which takes in an object and finds all of the values 
//which are numbers and converts them to strings. Recursion would be a great way to solve this!
function stringifyNumbers(obj){
    for (let key in obj){
        if (Number.isInteger(obj[key])){
            obj[key]=""+obj[key];
        }else if(Array.isArray(obj[key]) || typeof obj[key] === "object"){
            stringifyNumbers(obj[key]);
        }
    }
    return obj;
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





























