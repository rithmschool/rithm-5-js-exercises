$(document).ready(function() {

  //Open form when Submit is clicked in nav bar
  $('#submitLink').click(function(){
    $('#form').show('swing');
  });

  //Add article to end of article list after user submits form
  $("#formSubmit").submit(function(e){
    e.preventDefault();
    $('#form').slideUp();
    var toAddTitle = $("#title").val();
    var toAddUrl = $("#urlLink").val();
    //add article title, link and domain
    $("#list").append('<li><span class="empty-star">&#9734;&nbsp</span><span class="full-star hidden">&#9733;&nbsp</span><a href="' + toAddUrl + '">' + toAddTitle + "</a><span class='hostDomain'>(" + extractHostDomain(toAddUrl) + ")</span></li>");    
    $("#title").val("");
    $("#urlLink").val("");
  });
    
  //clicking on an empty star next to a story marks it as a "favorite."
  //adds 'favorite'class to li item; hides empty star and displays full star. 
  $("#list")
    .on("click","li span.empty-star", function(){ //event handler on parent so all new elements get access to event
    //hide empty star
    $(this).toggleClass("hidden");
    $(this).parents("li").toggleClass("favorite")
    //display full star
    $(this).siblings(".full-star").toggleClass("hidden");
  });  
 
  //clicking on a full star returns it back to not-favorite and hides
  //full star and displays empty star 
  $("#list")
    .on("click","li span.full-star", function(){
    //hide full star
    $(this).toggleClass("hidden");
    $(this).parents("li").toggleClass("favorite")

    //display empty star
    $(this).siblings(".empty-star").toggleClass("hidden");

  });

  //clicking on favorites shows only full-star items, hides everything else.
  $("#favoritesLink")
    .on("click", function(event){
    //unhide all domains
    $("#list li.favorite").removeClass("hidden");
    $("#list li:not(.favorite)").addClass("hidden");
    //shows 'all' button in nav bar, hides Favorites button 
    $("#allLink").toggleClass("hidden");
    $("#favoritesLink").toggleClass("hidden");
  });


  //Display domain after article title: 
  // take full URL and create new var with only hostDomain
  //display this at end of every li item
  function extractHostDomain(url) {
    var hostname;

    if (url.indexOf("www.") > -1) {
        hostname = url.split('www.')[1];

    }
    else {
        hostname = url.split('/')[2];
    }
    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];
    //remove path
    hostname = hostname.split('/')[0];

    return hostname;
  }

  // When users click on the hostname,
  // all stories with different hostnames are filtered out 


  $("#list")
      .on("click","li span.hostDomain", function(event){
      //hide non-matching domains
      $selectedDomain = "'" + $(event.target).text().slice(1,-1) + "'";
      $(`#list li:not(:contains(${$selectedDomain}))`).toggleClass("hidden"); 
      $("#allLink").toggleClass("hidden");
      $("#favoritesLink").toggleClass("hidden");
             
    });

  $("#allLink")
    .on("click", function(event){
    //unhide all domains
    $("#list li").removeClass("hidden"); 
    $("#allLink").toggleClass("hidden");
    $("#favoritesLink").toggleClass("hidden");
  });

  

});


