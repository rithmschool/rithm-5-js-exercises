function replaceWith(string, let, replacer){
	var out = ""
	for(var i =0; i<string.length; i++){
		if(string[i] === let){
			out += replacer
		} else {
			out += string[i]
		}
	}
	return out
}