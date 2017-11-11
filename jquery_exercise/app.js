$(document).ready(function(){
    $("#form").hide();

    $('#submit').on('click', function(e) {
    	$('#form').slideToggle('slow');  
    });


    

    function website(str) {
	  for (var i = 7; i < str.length; i++) {
	    if (str[i]+str[i+1]+str[i+2]+str[i+3] === 'www.') {
	      var value = str.split('www.');
	      return value[value.length-1];
	    } else {
	      var http = str.split('//');
	      return http[http.length-1];
	    }
	  }
	}
    

    $('#form').on('submit', function(e) {
    	//Check to see if URL is valid
    	var title = $('input').eq(0).val()
    	var url = $('input').eq(1).val()
    	
    	var cleanurl = website(url);




    	var newLi = `<li><span class="fa fa-star-o"></span> <b>${title}</b> (${cleanurl})</li>`;
    	//If yes, append

    	$('.urlLinks').append(newLi);
    	$('#form').slideToggle('slow');

    	$('#form').trigger('reset');
    	//if no, 
   
   });
});