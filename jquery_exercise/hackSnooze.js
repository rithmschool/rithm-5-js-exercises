$(function(){

var $form = $("#needs-validation");

//submit a news story
$(".submitItem").on("click", "button#submit", function (e){
	if($form[0].checkValidity()=== false){
		$form[0].reportValidity();
		e.preventDefault();
		e.stopPropagation();
		}
	else {	
		$form.addClass("was-validated");
	

		e.preventDefault();

		//get field values
		var $titleInput = $(e.target).parent().find("input#title");
		var $urlInput = $(e.target).parent().find("input#url");

		//create jQuery object for display
		var $newTitle = $("<a>", {
			addClass : "px-3 text-dark",
			css : {"text-decoration" : "none"},
			attr : {href : $urlInput.val(), target : "_blank"},
			text : $titleInput.val(),
		});

		var $newDomain = $("<a>", {
			addClass : "text-muted small",
			text : "(" + getDomain($urlInput.val()) + ")"
		});


		var $newLi = $("<li>", {
			addClass : "list-group-item",
			css : {display : "list-item"}
		}); 
		
		//append parts of list item together to create complete item
		$newLi.append('<i class="fa fa-star-o" aria-hidden="true"></i>');
		$newLi.append($newTitle);
		$newLi.append($newDomain);

		//prepend new list item to document
		$("ol").prepend($newLi);
	

		//reset submit form
		$urlInput.val("");
		$titleInput.val("");
		$(".dropdown-toggle").dropdown('toggle');

		
		//check if favorite filter active & display new item accordingly
		if($('#toggleFeed').text()=== "all"){
		$newLi.addClass("d-none");
		}
	}
});





//toggle favorite mark

$("ol").on("click", "i", function(e){
	var $star = $(e.target);
	$star.toggleClass("favorite");

	if ($star.hasClass("favorite")){
		$star.removeClass("fa-star-o");
		$star.addClass("fa-star");
		$star.addClass("text-warning");
	} else {
		$star.removeClass("fa-star");
		$star.removeClass("text-warning");
		$star.addClass("fa-star-o");
	}
})


//filter by favorite
$("#toggleFeed").on("click", function(e){
	
	if ($(e.target).text() === "favorites"){
		$("li").addClass("d-none");
		$favorites = $("ol").find("i.favorite").parent();
		$favorites.removeClass("d-none");

		$(e.target).text("all");
	}
	else {
		$("li").removeClass("d-none");
		$("li").removeClass("selected");
		$(e.target).text("favorites");
	}	




})

//get domain name

function getDomain(data) {
  var a = document.createElement('a');
         a.href = data;
  return a.hostname;
}

//filter by domain name

$("ol").on("click", "a.small", function(e){
	var domainSelected = $(e.target).text();
	$allMatchingDomains = $("a:contains("+ domainSelected + ")").parent();
	console.log($allMatchingDomains);
	$("li").addClass("d-none");
	$allMatchingDomains.removeClass("d-none");
	$("#toggleFeed").text("all");
})



})