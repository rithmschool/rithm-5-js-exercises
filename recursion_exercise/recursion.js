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
  var strings = [];
    function helper(obj){
      for (var key in obj) {
              if (typeof obj[key] === "string"){
                strings.push(obj[key]);
              } else {
                helper(obj[key])
              }
          
    }


  return strings;

}
}


// function contains(){
//   //input: object and value;
//   //returns true or false if value exists in object
//
// }


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
