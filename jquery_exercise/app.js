$(document).ready(function(){

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



        
    	var newLi = `<li><span class="fa fa-star-o"></span><b> ${title}</b><span class="link"> (${cleanurl})</span></li>`;
    	//If yes, append

    	$('.urlLinks').append(newLi);
    	$('#form').slideToggle('slow');

    	$('#form').trigger('reset');
   
    });

    // Event Delegation must be used as new items are added. They wont have the event listener

    $("ol").on("click", ".fa-star-o", function(e){
        $(e.target).toggleClass("fa-star").toggleClass("fa-star-o")
    })

    $("ol").on("click", ".fa-star", function(e){
        $(e.target).toggleClass("fa-star-o").toggleClass("fa-star")
    })

    // Filter out the favorites

    $("#favorites").on("click", function(e){
        $text = $("#favorites").text()


        if($text === "Favorites"){
            // Change text
            $("#favorites").text("All")


            // Hide if has empty star
            $("li").filter(function(i, el){
                return $(el).children().hasClass("fa-star-o")
            }).hide()

        } else {
            $("#favorites").text("Favorites")
            $("li").show()
        }


    })

    // Use event delegationt to add listener on ol
    $("ol").on("click", ".link", function(e){
        var $hostName = $(e.target).text()

        $("li").filter(function(i, el){
            return $(el).find(".link").text() !== $hostName
        }).hide()

        $("#favorites").text("All")

    })

});