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




    	var newLi = `<li><a href='#' class="fa fa-pied-piper"></a> <b>${title}</b> <span>(${cleanurl})</span></li>`;
    	//If yes, append

      if (url !== '') {
    	$('.urlLinks').append(newLi);
    	$('#form').slideToggle('slow');

    	$('#form').trigger('reset');
      }
   
   });



    //Fill in Star Code 
    //target each list item star icon 
    //if clicked 
      //if empyty then fill
      //if full then empty it 

    $('ol').on('click', 'a', function(e) {
        // e.preventDefault();
        $(e.target).toggleClass('fa fa-pied-piper-pp fa fa-pied-piper');
        if ($(e.target).hasClass('fa-pied-piper')) {
            $(e.target).css('color', 'gray');
     } else {
        $(e.target).css('color', 'black');

       }
});      


//if click favorites 
  //filter list items for those wil 'PP' icon
  //switch the navbar text to all 
//if click all 
  //remove filter 
  //switch nave to favorites



var onOrOff = 0;
var listAll = 0;
$('#favoriteList').on('click', function(e) {

if(listAll === 0) {
    $('.navbar-nav > #favoriteList').text('All');
    listAll = 1;
} else {
    $('.navbar-nav > #favoriteList').text('Favorites');
    listAll = 0;
}

    if(onOrOff === 0) {
        $(".urlLinks li a[class='fa fa-pied-piper']").parent().hide();
        onOrOff = 1;
    } else {
        $(".urlLinks li a[class='fa fa-pied-piper']").parent().show()
        onOrOff = 0;
    }

});







});