$(function() {
  // get stories
  $.getJSON("https://hack-or-snooze.herokuapp.com/stories?limit=10").then(
    function(response) {
      console.log("newest stories loaded.");
      console.log(response);
      //looping through each array item in data object
      response.data.forEach(function(val, idx, arr) {
        //article title
        var $newTitle = $("<a>")
          .attr("href", arr[idx].url)
          .attr("target", "_blank")
          .text(" " + arr[idx].title + " ");

        //hostname
        var $newHostname = $("<small>")
          .attr("class", "text-muted hostname")
          .append(newHostname(arr[idx].url));

        var $storyId = $("<a>")
          .attr("href", "#")
          .attr("class", "storyID")
          .text(arr[idx].storyId)
          .hide();
        //star
        var $starsDefault = $("<i>")
          .attr("class", "fa fa-star-o")
          .attr("aria-hidden", "true")
          .append($storyId);

        //combine into list item
        var $newLi = $("<li>")
          .attr("class", "row list-group-item")
          .append($starsDefault)
          .append($newTitle)
          .append($newHostname);

        //push into article body
        $("ol").append($newLi);
      });
    }
  );

  //login user function < will be reused
  function loginUser() {
   
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/auth",
      method: "POST",
      data: {
        data: {
          username: $username,
          password: $password
        }
      }
    })
      .then(function(response) {
        //storing username and token in localStorage to be used for later
        let $token = response.data.token;
        localStorage.setItem("username", $username);
        localStorage.setItem("token", $token);
        console.log(response, "login successful!");
        
        $(".loginHeader").text($username);
        $(".signupHeader").text("sign out");
        $(".loginHeader").text($username);
        
        //signout
      
        $(".signupHeader").on("click", function(e) {
          localStorage.clear();
          alert("signed out");
          $(".loginHeader").text("login");
          $(".signupHeader").text("sign up");
        });
      })
      .catch(function() {
        alert("username or password don't match");
        console.log("login failed!");
      });
  }

  //login user
  $("#loginForm").on("submit", function(e) {

    e.preventDefault();
    $(this).collapse("hide");

    $username = $("#username").val();
    $password = $("#userPassword").val();

    //authorization check

    loginUser();

 //<h6 class="dropdown-header signupHeader" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" type="text">sign up</h6>
  });

  //new user
  $("#signupForm").on("submit", function(e) {

    e.preventDefault();
    $(this).collapse("hide");

    let $newUser = $("#newUser").val();
    let $newUsername = $("#newUsername").val();
    let $newUserPassword = $("#newUserPassword").val();

    //sign in new user
    $.ajax({
      method: "POST",
      url: "https://hack-or-snooze.herokuapp.com/users",
      data: {
        data: {
          name: $newUser,
          username: $newUsername,
          password: $newUserPassword
        }
      }
    })
      .then(function(response) {
        console.log(response);
        alert("successfully registered!!");
        //redefine login credentials to login new user
        $username = $newUsername;
        $password = $newUserPassword;

        //login new user
        loginUser();
      })
      .catch(function(error) {
        console.log(error);
        alert("username taken");
      });
  });

  //hostname filter
  $("ol").on("click", "li > .hostname > a", function(e) {
    e.preventDefault();
    let $a = $("small > a");
    let $link = $(this).text();
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

  // set favorites
  $(".favall").on("click", function(e) {
    let el = $(this);
    if (el.text() === "favorites") {
      el.text("all");
      $("ol > li > i.fa-star-o")
        .parent()
        .hide();
    } else if (el.text() === "all") {
      el.text("favorites");
      $("ol > li > i.fa-star-o")
        .parent()
        .show();
      $("ol > li").show();
    }
  });

  //submit new story
  const $form = $(".form");

  $form.on("submit", function(e) {
    e.preventDefault();

    let $title = $("#newTitle").val();
    let $URL = $("#newURL").val();
    let $author = $("#newAuthor").val();
    let $token = localStorage.getItem("token");
    let $username = localStorage.getItem("username");
    let $password = localStorage.getItem("password");

    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/stories",
      method: "POST",
      headers: { Authorization: "Bearer " + $token },
      data: {
        data: {
          username: $username,
          title: $title,
          author: $author,
          url: $URL
        }
      }
    })
      .then(function(e) {
        console.log("adding new article!");

        let $title = $("#newTitle").val();
        
        let $URL = $("#newURL").val();

        let $starDefault = $("<i>")
          .attr("class", "fa fa-star-o")
          .attr("aria-hidden", "true");

        let $domain = newHostname($URL);

        let $hostname = $("<small>")
          .attr("class", "text-muted")
          .attr("class", "hostname")
          .append("<a>")
          .attr("href", "#")
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

        //adding new stories to the top of the pile
        $(".articles").prepend($newLi);

        //clear form
        $("#newTitle").val("");
        $("#newURL").val("");
        $("#newAuthor").val("");
      })
      .catch(function(error) {
        console.log(error, "post failed");
        alert("please log in to post!");
      });
  });

  //starz
  $("ol").on("click", "li > i", function(e) {
    let $storyID = $(this).text();
    let $stars = $(this);
    let $username = localStorage.getItem("username");
    let $token = localStorage.getItem("token");

    $.ajax({
      url:
        "https://hack-or-snooze.herokuapp.com/users/" +
        $username +
        "/favorites/" +
        $storyID,
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(function(response) {
        $stars.toggleClass("fa fa-star-o fa fa-star");
        console.log(response, "favorites added!");
      })
      .catch(function(error) {
        alert("please log in to add favorites");
      });
  });

  //hostname extract function
  function newHostname(url) {
    let URL = "";
    for (let i = url.indexOf("/") + 2; i < url.length; i++) {
      if (url[i] === "/") {
        break;
      }
      URL += url[i];
    }

    let domain = $("<a>")
      .attr("href", "#")
      .text("(" + URL + ")");

    return domain;
  }
});
