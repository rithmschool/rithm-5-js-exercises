$(function() {
	//Set up counters
	let favClickBool = true;
	let submitClickBool = true;
	let sortedClickBool = true;
	let counterNumFavs = 0;

	//How to show submit form
	$("#submitClick").on("click", function(e) {
		e.preventDefault();
		$formDiv = $("form").parent();
		if (submitClickBool) {
			$formDiv.css("display", "block");
		} else {
			$formDiv.css("display", "none");
		}
		submitClickBool = !submitClickBool;
	});
	//How to submit a new story
	$("#submitNewStory").on("submit", function(e) {
		e.preventDefault();
		const $title = $(e.target.title);
		const $site = $(e.target.site);
		const titleVal = $title.val();
		const siteVal = $site.val();
		if (
			titleVal.match(/.+/) === null ||
			//This is probably not the best regExp to match all of the inputs correctly, but it's worked the best so far
			siteVal.match(
				/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/
			) === null
		) {
			alert(
				"Invalid: please make sure you entered a title and included the 'www' in a valid website. Thank you!"
			);
			return;
		}
		$title.val("");
		$site.val("");
		const $id = $("#stories li:last-child");
		const newId = Number($id.attr("id")) + 1;
		$("#stories").append(`
<li id=${newId} class="list-group-item text-secondary bg-light">${newId}. <i class="fa fa-star-o" aria-hidden=true></i> <span class=text-dark> ${titleVal} </span> <span class="toSort">(${siteVal})</span></li>`);
	});

	//How to favorite a story
	$("#stories").on("click", "i", function(e) {
		e.preventDefault();
		const $icon = $(this);
		const currStar = $icon.attr("class");
		const $pillNumFavs = $("#pillNumFavs");

		if (currStar === "fa fa-star") {
			$icon.attr("class", "fa fa-star-o");
			counterNumFavs--;
			$pillNumFavs.text(counterNumFavs);
		} else {
			$icon.attr("class", "fa fa-star");
			counterNumFavs++;
			$pillNumFavs.text(counterNumFavs);
		}
	});

	//How to show favorite news
	$("#favoritesClick").on("click", function(e) {
		e.preventDefault();
		const $pillNumFavs = $("#pillNumFavs");
		if (favClickBool) {
			const $sortedLis = $("#stories")
				.children()
				.filter(function(i, el) {
					let $star = $(el).find("i");
					if (
						$star.attr("class") === "fa fa-star-o" &&
						$(el).css("display") !== "none"
					)
						console.log(el);
					return (
						$star.attr("class") === "fa fa-star-o" &&
						$(el).css("display") !== "none"
					);
				});
			$sortedLis.each(function(i, el) {
				$(el).css("display", "none");
				$(el).data("fav", "favClicked");
			});
			$pillNumFavs.html("<small>Show All</small>");
		} else {
			const $sortedLis = $("#stories li").filter(function(i, el) {
				return $(el).data("fav") === "favClicked";
			});
			$sortedLis.each(function(i, el) {
				$(el).css("display", "block");
				$(el).data("fav", "");
			});
			$pillNumFavs.html(counterNumFavs);
		}
		favClickBool = !favClickBool;
	});

	//How to sort by url
	$("#stories").on("click", ".toSort", function(e) {
		e.preventDefault();
		const $thisWebsite = $(this);
		if (sortedClickBool) {
			const $sortedLis = $("#stories li").filter(function(i, el) {
				let $website = $(el)
					.find(".toSort")
					.text();
				return $website !== $thisWebsite.text();
			});
			$sortedLis.each(function(i, el) {
				$(el).css("display", "none");
				$(el).data("site", "siteClicked");
			});
		} else {
			const $sortedLis = $("#stories li").filter(function(i, el) {
				return $(el).data("site") === "siteClicked";
			});
			$sortedLis.each(function(i, el) {
				$(el).css("display", "block");
				$(el).data("site", "");
			});
		}
		sortedClickBool = !sortedClickBool;
	});
});
