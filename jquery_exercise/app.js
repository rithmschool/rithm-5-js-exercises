$(function() {
	//set up counters
	let favClickCounter = 1;
	let submitClickCounter = 1;
	let sortedClickCounter = 1;
	let numFavs = 0;

	//How to show submit form
	$("#submitClick").on("click", function(e) {
		e.preventDefault();
		$formDiv = $("form").parent();
		if (submitClickCounter % 2) {
			$formDiv.css("display", "block");
		} else {
			$formDiv.css("display", "none");
		}
		submitClickCounter++;
	});
	//How to submit a new story
	$("#submitNewStory").on("submit", function(e) {
		e.preventDefault();
		var $title = $(e.target.title);
		var $site = $(e.target.site);
		var titleVal = $title.val();
		var siteVal = $site.val();
		if (
			titleVal.match(/.+/) === null ||
			siteVal.match(
				/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
			) === null
		) {
			alert(
				"Invalid: please make sure you entered a title and included the 'www' in a valid website. Thank you!"
			);
			return;
		}
		$title.val("");
		$site.val("");
		var $id = $("#stories li:last-child");
		var newId = Number($id.attr("id")) + 1;
		$("#stories").append(`
<li id=${newId} class="list-group-item text-secondary bg-light">${newId}. <i class="fa fa-star-o" aria-hidden=true></i> <span class=text-dark> ${titleVal} </span> <span class="toSort">(${siteVal})</span></li>`);
	});

	//How to favorite a story
	$("#stories").on("click", "i", function(e) {
		e.preventDefault();
		var $icon = $(this);
		var currStar = $icon.attr("class");
		var $numFavs = $("#numFavs");

		if (currStar === "fa fa-star") {
			$icon.attr("class", "fa fa-star-o");
			numFavs--;
			$numFavs.text(numFavs);
		} else {
			$icon.attr("class", "fa fa-star");
			numFavs++;
			$numFavs.text(numFavs);
		}
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
		var $numFavs = $("#numFavs");
		if (favClickCounter % 2) {
			$lis.css("display", "none");
			$numFavs.html("<small>Show All</small>");
		} else {
			$lis.css("display", "block");
			$numFavs.html(numFavs);
		}
		favClickCounter++;
	});

	//How to sort by url
	$("#stories").on("click", ".toSort", function(e) {
		e.preventDefault();
		var $toSort = $(this);
		if (sortedClickCounter % 2) {
			var $sortedLis = $("#stories li").filter(function(i, el) {
				return (
					$(el)
						.find(".toSort")
						.text() !== $toSort.text()
				);
			});
			$sortedLis.each(function(i, el) {
				$(el).css("display", "none");
			});
		} else {
			var $sortedLis = $("#stories li").filter(function(i, el) {
				return $(el).css("display") === "none";
			});
			$sortedLis.each(function(i, el) {
				$(el).css("display", "block");
			});
		}
		sortedClickCounter++;
	});
});
