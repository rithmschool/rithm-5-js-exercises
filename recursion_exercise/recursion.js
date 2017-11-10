function productOfArray(arr) {
  //base case - the array length is 0
  //this solution works  - but it mutates the original array
  //return arr.pop() * productOfArray(arr;
// lets make this a pure function
//return arr[0] * productOfArray(arr.slice(1));


}
function flatten(arr){
  var newArr = []
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arrr[i])){
      flatten(arr[i]) //dont want to return the result of your recursive call

    } else {
        newArr.push(arr[i])
    }
  }
  return newArr;
}
