$(function() {
	//set up counters
	let favCounter = 1;
	let submitCounter = 1;

	//How to show submit form
	$("#submitClick").on("click", function(e) {
		e.preventDefault();
		$formDiv = $("form").parent();
		if (submitCounter % 2) {
			$formDiv.css("display", "block");
		} else {
			$formDiv.css("display", "none");
		}
		submitCounter++;
	});
	//How to submit a new story
	$("#submitNewStory").on("submit", function(e) {
		e.preventDefault();
		var $title = $(e.target.title);
		var $site = $(e.target.site);
		var titleVal = $title.val();
		var siteVal = $site.val();
		if (
			siteVal.match(
				/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
			) === null
		) {
			alert(
				"Invalid website, please re-enter correctly (include the 'www' please!)"
			);
			return;
		}
		$title.val("");
		$site.val("");
		var $id = $("#stories li:last-child");
		var newId = Number($id.attr("id")) + 1;
		$("#stories").append(`
<li id=${newId} class="list-group-item text-secondary bg-light">${newId}. <i class="fa fa-star-o" aria-hidden=true></i> <span class=text-dark> ${titleVal} </span> (${siteVal})</li>`);
	});

	//How to favorite a story
	$("#stories").on("click", "li", function(e) {
		e.preventDefault();
		var $li = $(this);
		var $icon = $li.find("i");
		var currStar = $icon.attr("class");
		if (currStar === "fa fa-star") $icon.attr("class", "fa fa-star-o");
		else $icon.attr("class", "fa fa-star");
	});

	//How to show favorite news
	$("#favoritesClick").on("click", function(e) {
		e.preventDefault();
		$lis = $("#stories")
			.children()
			.filter(function(i, el) {
				var $star = $(el).find("i");
				return $star.attr("class") === "fa fa-star-o";
			});
		if (favCounter % 2) {
			$lis.css("display", "none");
		} else {
			$lis.css("display", "block");
		}
		favCounter++;
	});
});
