// $(document).ready(function() {

//   $('#s').click(function(){
//     $('#form').show();
//   });

//   $("#form").submit(function(e) {
//    e.preventDefault();
//     $('#form').slideUp();

//     var toAdd = $("#news").val();
//     var news = $("#news").val("");
//     if (typeof toAdd === "string" && toAdd.length > 0){
//      $("ol").append("<li>" + toAdd + "</li>");
//     }

//   });

// });

//     function validateURL(textval) {
//     var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
//     return urlregex.test(textval);
// }

$(document).ready(function() {
  $("#submitLink").click(function() {
    $("#form").show("swing");
  });

  $("#formSubmit").submit(function(e) {
    e.preventDefault();
    $("#form").slideUp();
    var toAddTitle = $("#title").val();
    var toAddUrl = $("#urlLink").val();
    $("#list").append(
      '<li><span class="empty-star">&#9734;&nbsp</span><span class="full-star hidden">&#9733;&nbsp</span><a href="' +
        toAddUrl +
        '">' +
        toAddTitle +
        "</a><span class='hostDomain'>(" +
        extractHostDomain(toAddUrl) +
        ")</span></li>"
    );
    $("#title").val("");
    $("#urlLink").val("");
  });

  //clicking on an empty star next to a story marks it as a "favorite."
  $("#list").on("click", "li span.empty-star", function() {
    //event handler on parent so all new elements get access to event
    //hide empty star
    $(this).toggleClass("hidden");
    //display full star
    $(this)
      .siblings(".full-star")
      .toggleClass("hidden");
  });

  //clicking on a full star returns it back to not-favorite
  $("#list").on("click", "li span.full-star", function() {
    //hide full star
    $(this).toggleClass("hidden");
    //display empty star
    $(this)
      .siblings(".empty-star")
      .toggleClass("hidden");
  });

  //clicking on favorites shows only full-star items

  // BONUS 2 part 1: display domain after article title:
  // take full URL and create new var with only hostDomain
  //display this at end of every li item
  function extractHostDomain(url) {
    var hostname;

    if (url.indexOf("www.") > -1) {
      hostname = url.split("www.")[1];
    } else {
      hostname = url.split("/")[2];
    }

    //find & remove port number
    hostname = hostname.split(":")[0];
    //find & remove "?"
    hostname = hostname.split("?")[0];
    hostname = hostname.split("/")[0];

    return hostname;
  }

  // BONUS 2 Part 2: when When users click on the hostname,
  // all stories with different hostnames are filtered out
  // use :not:(contains:('matching domain name')) to select + hide
  // all other non-matching list items and

  //this below is currently BROKEN
  $("#list").on("click", "li span.hostDomain", function(event) {
    //hide non-matching domains
    $selectedDomain =
      "'" +
      $(event.target)
        .text()
        .slice(1, -1) +
      "'";
    $("#list li:not(:contains(" + $selectedDomain + "))").toggleClass("hidden");
    $("#allLink").toggleClass("hidden");
    $("#favoritesLink").toggleClass("hidden");

    // EXAMPLE of what didn't work:  $('"#list li:not(:contains(' + $selectedDomain + '))"').toggleClass("hidden");
    // NO Quotes:
    // var $selectedDomain = $(event.target).text().slice(1,-1);
    // $("#list li:not(:contains($selectedDomain))").toggleClass("hidden");
  });

  $("#allLink").on("click", function(event) {
    //unhide all domains
    $("#list li").removeClass("hidden");
    $("#allLink").toggleClass("hidden");
    $("#favoritesLink").toggleClass("hidden");
  });

  //WORK IN PROGRESS -- displaying only favorites
  // $("#favoritesLink")
  //   .on("click", function(event){
  //   //unhide all domains
  //   $("li span.full-star").removeClass("hidden");
  //   $("#allLink").toggleClass("hidden");
  //   $("#favoritesLink").toggleClass("hidden");
  // });
});

$.getJSON("https://hack-or-snooze.herokuapp.com/stories").then(function(
  response
) {
  console.log(response);
});
