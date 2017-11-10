//1
function replaceWith (str,char1,char2) {
return str.replace(RegExp(char1,'gi'), char2);
 }
//2
function expand(arr, x){
 var container = [];
    for( var i = 0 ; i < x ; i++)
      container.push(arr);
    return container.reduce(function(a,b){
      return a.concat(b)
    },[])
}
//3
function acceptNumbersOnly () {
for(var i = 0; i < arguments.length; i ++) {
  if (typeof arguments[i] !== 'number' || arguments[i] !== arguments[i])
    return false
  }
return true
}

//4
function mergeArrays (arr1,arr2) {
return arr1.concat(arr2).sort(function(a,b){
  return a - b;
})
}

//5

function mergeObjects(obj1, obj2) {
 	var container = {};
 	for (var key in obj1) {
 		container[key] = obj1[key];
 	}
 	for (var key in obj2) {
 		container[key] = obj2[key];
 		}
 	return container
 }