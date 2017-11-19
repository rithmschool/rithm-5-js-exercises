$(document).ready(function() {

  // check if there is a token and if so....show me favorites already!

  // if(localStorage.getItem('token')){

  // }

  //****************START OF PAGE - DISPLAY THE STORIES*******************

  $.getJSON('https://hack-or-snooze.herokuapp.com/stories')
    .then(function(response){
//?????????????? WHY IT WORKS SOMETIMES, AND IT DOESNT OTHER TIMES ***********************************************************     
      $(".submitFavorite").hide();
      console.log(response);
      var arr = response.data;
      for (let i=1; i < 11; i++){
        let title = arr[i].title;
        let url = arr[i].url;
        $("#storyList").append(`<li><a href="${url}" target="_blank">${title}</a></li>`);    
    }
  });

 
 // *********************** DISPLAYING LOG IN FORM  *******************************

  $("#logIn").click(function(){
    //hide the story list
  $("#storyPage").hide();
    //show the sign in form 
  $("#logInForm").show();
  });


//********************* LOG IN FORM (sending the username and password) *****
  $("#logInForm").submit(function(e){
    e.preventDefault();

//??????????????? IS IT GOOD PRACTICE TO SAVE THEM (NAME, USER, PASS) IN A LOCAL STORAGE ?????????????? 
    var $name = $("#name").val();
    var $username = $("#userName").val();
    var $password = $("#password").val();
  
    localStorage.setItem("username", $username);
    localStorage.setItem("password", $password);

    var data = { name: $name, username: $username, password: $password };

    $.ajax({
      method: "POST",
      url:"https://hack-or-snooze.herokuapp.com/users", 
      data: { data } 
    })
    .done(function(data){
      console.log(data);
      $.ajax({
        method: "POST",
        url:"https://hack-or-snooze.herokuapp.com/auth", 
        data: { 
          data:{ 
            username: $username, 
            password: $password
          }
        }  
      }).done(function(data){
        console.log(data);
  
        localStorage.setItem("username", $username);
        localStorage.setItem("token", data.data.token);
        //console.log("token is " + token);
         $("#logInForm").hide();
         // $("#storyList").fadeIn();
         $(".nav").show();
       
         $("#storyPage").show();
         //chainging the botton  to log out
         //hide the logIn btn
          $("#logIn").toggle("hidden");
          //show the logOut btn
          $("#logOut").toggle("hidden");

//*********CHECK THESE CODE HERE*************      
          // newId= "logOut";
          // $("#logIn").attr('id', 'newID');
          // show the user their favorites
          $(".submitFavorite").show(); 
         //$("#logIn").inner("Log Out");
      })//?????????/DOES THE CODE BELLOW GOES HERE????????????????/
      .fail(function(){
        alert("OH NO, FAILED!!")
      })
    })
    .fail(function(){
      alert("OH NO, FAILED!!")
    })
  });

  // get the token
  var token = localStorage.getItem('token');
  // get the middle part of the token by splitting on a .
  var payload = token.split(".")[1];
  // base64 decode that string and parse it and get the username key
  var usernameKey = JSON.parse(atob(payload)).username;


  // //*************ADDING STORY FORM***************
  
  $('#submitLink').click(function(){
    $("#storyList").hide();
    //$(".submitFavorite").text("Adding Story");
    $(this).toggleClass("hidden");
    $("#adding").toggle("hidden");
    $("#favoritesLink").toggle("hidden");
    $("#story").toggle("hidden");
    $('#form').show();
    $("#storyList").show();
  }); 


//*************** SUBMITING A NEW STORY (name, title, url)**********

  $("#formSubmit").submit(function(e){
    e.preventDefault()
    //var $storyName = $("#storyName").val();
    var $storyTitle = $("#title").val();
    var $storyUrl = $("#url").val();
    var $username = localStorage.getItem('username');
    var $author = $("#author").val();
      
    var data = { username: $username, title: $storyTitle, author: $author, url:$storyUrl};  

    $.ajax({
      method: "POST",
      url:"https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=10", 
      headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
      },
      data: { data } 
    })
    .done(function(data){
      console.log(data);
      $("#form").hide();
      $("#adding").toggle("hidden");
       $('#submitLink').toggle("hidden");
      $("#story").toggle("hidden");
      $("#favoritesLink").toggle("hidden");
      //$("#storyList").prepend(`<li><a data-storyId=${data.data.storyId} href="${data.data.url}" target="_blank">${data.data.author} - by: ${data.data.title}</li>`);
      $("#storyList").prepend(`<li><a data-storyId=${data.data.storyId} href="${data.data.url}" target="_blank">${data.data.title}</li>`);
      $("#storyList").show();
    })
  });


//************************************** LOG OUT ****************************************

  $("#logOut").click(function(){
    $(".submitFavorit").hide();
    $("#logOut").toggle("hidden");
    $("#logIn").toggle("hidden");
  });


























//***********   CODE BELLOW NOT RELEVANT AT THE MOMENT!!!  *******************

 //*************** SUBMITING THE NEW STORY (name, title, url)*****************************

  // $("#formSubmit").submit(function(e){
  //   e.preventDefault();
  //   $('#form').slideUp();
  //   var toAddTitle = $("#title").val();
  //   var toAddUrl = $("#urlLink").val();
  //   //add article title, link and domain
  //   $("#list").append('<li><span class="empty-star">&#9734;&nbsp</span><span class="full-star hidden">&#9733;&nbsp</span><a href="' 
  //     + toAddUrl + '">' + toAddTitle + "</a><span class='hostDomain'>(" + extractHostDomain(toAddUrl) + ")</span></li>");    
  //   $("#title").val("");
  //   $("#urlLink").val("");
  //   $("#storyName").val("");
  // }); 
  

  //clicking on an empty star next to a story marks it as a "favorite." 
  // $("#list")
  //   .on("click","li span.empty-star", function(){ //event handler on parent so all new elements get access to event
  //   //hide empty star
  //   $(this).toggleClass("hidden");
  //   //display full star
  //   $(this).siblings(".full-star").toggleClass("hidden");
  // });  
 
  // //clicking on a full star returns it back to not-favorite 
  // $("#list")
  //   .on("click","li span.full-star", function(){
  //   //hide full star
  //   $(this).toggleClass("hidden");
  //   //display empty star
  //   $(this).siblings(".empty-star").toggleClass("hidden");
  // });


  //clicking on favorites shows only full-star items
  // BONUS 2 part 1: display domain after article title: 
  // take full URL and create new var with only hostDomain
  //display this at end of every li item
  // function extractHostDomain(url) {
  //   var hostname;

  //   if (url.indexOf("www.") > -1) {
  //       hostname = url.split('www.')[1];

  //   }
  //   else {
  //       hostname = url.split('/')[2];
  //   }

  //   //find & remove port number
  //   hostname = hostname.split(':')[0];
  //   //find & remove "?"
  //   hostname = hostname.split('?')[0];
  //   hostname = hostname.split('/')[0];

  //   return hostname;
  // }

  // BONUS 2 Part 2: when When users click on the hostname,
  // all stories with different hostnames are filtered out 
  // use :not:(contains:('matching domain name')) to select + hide 
  // all other non-matching list items and 

  //this below is currently BROKEN
  // $("#list")
  //   .on("click","li span.hostDomain", function(event){
  //   //hide non-matching domains
  //   $selectedDomain = "'" + $(event.target).text().slice(1,-1) + "'";
  //   $("#list li:not(:contains(" + $selectedDomain + "))").toggleClass("hidden"); 
  //   $("#allLink").toggleClass("hidden");
  //   $("#favoritesLink").toggleClass("hidden");

              // EXAMPLE of what didn't work:  $('"#list li:not(:contains(' + $selectedDomain + '))"').toggleClass("hidden");    
              // NO Quotes:
              // var $selectedDomain = $(event.target).text().slice(1,-1);
              // $("#list li:not(:contains($selectedDomain))").toggleClass("hidden");
   // });

  // $("#allLink")
  //   .on("click", function(event){
  //   //unhide all domains
  //   $("#list li").removeClass("hidden"); 
  //   $("#allLink").toggleClass("hidden");
  //   $("#favoritesLink").toggleClass("hidden");
  // });

  //WORK IN PROGRESS -- displaying only favorites
  // $("#favoritesLink")
  //   .on("click", function(e){
    //unhide all domains
    //$("li span.full-star").removeClass("hidden"); 
    // $("#allLink").toggleClass("hidden");
    // $("#favoritesLink").toggleClass("hidden");
    //$("li span.empty-star").addClass("hidden");
  
//listItems[i].onclick = function(e) {li.parentNode.removeChild(li)};


});

    
   





