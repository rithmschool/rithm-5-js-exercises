$(function() {
  const $form = $(".form");

  $("ol").on("click", "li > .hostname > a", function(e) {
    e.preventDefault();
    console.log("I am " + $(this).text());
    let $a = $("small > a");
    console.log("a is " + $a);
    let $link = $(this).text();
    // let $siblings = $(this)
    //   .parent()
    //   .parent()
    //   .siblings()
    //   .children()
    //   .children();
    // console.log($siblings);
    $a.each(function(i, ele) {
      if ($(ele).text() !== $link) {
        $(ele)
          .parent()
          .parent()
          .hide();
      }
    });
    $(".favall").text("all");
  });

  function hostnameURL($URL) {
    let URL = "";
    for (let i = $URL.indexOf(".") + 1; i < $URL.length; i++) {
      URL = URL.concat($URL[i]);
      if ($URL[i] === "/") {
        break;
      }
    }
    let domain = $("<a>")
      .attr("href", "#")
      .text("(" + URL + ")");
    return domain;
  }

  $(".favall").on("click", function(e) {
    let el = $(this);
    if (el.text() === "favorites") {
      el.text("all");
      $("ol > li > i.fa-star-o")
        .parent()
        .hide();
    } else if (el.text() === "all") {
      el.text("favorites");
      //ol > li > .homstname .parent().show()
      $("ol > li > i.fa-star-o")
        .parent()
        .show();
      $("ol > li").show();
    }
  });

  $form.on("submit", function(e) {
    // append form submission
    e.preventDefault();
    let $title = $("#abc").val();
    let $URL = $("#xyz").val();
    let $starDefault = $("<i>")
      .attr("class", "fa fa-star-o")
      .attr("aria-hidden", "true");
    let $domain = hostnameURL($URL);

    let $hostname = $("<small>")
      .attr("class", "text-muted hostname")
      .append($domain);
    let $newLink = $("<a>")
      .attr("href", $URL)
      .attr("target", "_blank")
      .text(" " + $title + " ");

    let $newLi = $("<li>")
      .attr("class", "row list-group-item")
      .append($starDefault)
      .append($newLink)
      .append($hostname);

    $(".articles").append($newLi);

    $("#abc").val("");
    $("#xyz").val("");
    $("#exampleAccordion > .item > #exampleAccordion1").toggleClass("show");
    $("#exampleAccordion > .nav-link .item > a").toggleClass("collapsed");
  });

  $("ol").on("click", "li > i", function(e) {
    $(this).toggleClass("fa fa-star-o fa fa-star");
  });

  // $("ul").on("click", "li > i", function(e){
  //  $(this).toggleClass('fa fa-star-o fa fa-star')

  // });
});
