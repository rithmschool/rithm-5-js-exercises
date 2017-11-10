function productOfArray(arr){
	if(arr.length === 1) return arr[0]
	return arr[0] * productOfArray(arr.slice(1))
}

function contains(obj, value){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			if(contains(obj[key], value)) {
			    return true
			}
		} else {
			if(obj[key] === value){
				return true
			} 
		}
	}
	return false 
}


function realSize(arr) {
  // Force be with you, code warrior!
  var num = 0
  
  function helper(arr){
      for(var i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            helper(arr[i])
        } else{
            if(typeof arr[i] === "number"){
                console.log(arr[i])
                num += 1
            }
        }
      }
  }

  helper(arr)
  
  return num;
}


function SumSquares(arr){
    var sum = 0

    function helper(arr){
    	for(var i =0; i<arr.length; i++){
    		if(Array.isArray(arr[i])){
    			helper(arr[i])
    		} else if (typeof arr[i] === "number") {
    			sum += arr[i] * arr[i]
    		}
    	}
    }

    helper(arr)

    return sum
}


function replicate(num1, num2){
	var out = []

	if(num1<0){
		return []
	}

	function helper(num1, num2){
		if(num1 === 0){
			return
		} else{
			out.push(num2)
			helper(num1 -1, num2)
		}
	}

	helper(num1, num2)
	return out
}



function search(arr, num){
    var tracker = 0
    var len = arr.length
    function helper(arr, num){
        if(arr.length === 0){
            return -1
        } else {
            if(arr.shift() === num){
                return tracker
            }
            tracker += 1
            helper(arr, num)
        }
    }
    
    helper(arr,num)

    if(tracker === len){
        return -1
    }
    return tracker
}


// function binarySearch(arr, num){

// 	var tracker = arr.length - 1

// 	function helper(arr, num){
// 		tracker = Math.ceiling((arr.length - 1)/2)
// 		var middle = arr[tracker]

// 		if(arr.length === 1){
// 			if(arr[0] !=== num){
// 				return -1
// 			} return true
// 		}

// 		if(middle === num){
// 			return tracker
// 		} else {
// 			if(middle > num){
// 				helper(arr.slice(0, tracker), num)
// 			} else {
// 				helper(arr.slice(tracker + 1, arr.length)
// 			}
// 		}
// 	}

// 	helper(arr, num)

//     if(tracker === len){
//         return -1
//     }
//     return tracker
// }


function stringifyNumbers(obj){
	for(var key in obj){
		if(typeof obj[key] === "number"){
			obj[key] = obj[key].toString()
		} else if (typeof obj[key] === 'object'){
			stringifyNumbers(obj[key])
		}
	}
}