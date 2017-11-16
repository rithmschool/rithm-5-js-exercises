$(function() {
  getStories();
  //load stories
  function clearStories() {
    $("ol").empty();
  }

  function getStories() {
    $.getJSON("https://hack-or-snooze.herokuapp.com/stories").then(function(
      response
    ) {
      response.data.forEach(function(value, index, array) {
        var $newTitle = $("<a>", {
          addClass: "px-3 text-dark",
          css: { "text-decoration": "none" },
          attr: { href: array[index].url, target: "_blank" },
          text: array[index].title
        });

        var $newDomain = $("<a>", {
          addClass: "text-muted small",
          text: "(" + getDomain(array[index].url) + ")"
        });

        var $newLi = $("<li>", {
          addClass: "list-group-item",
          attr: { "data-id": array[index].storyId },
          css: { display: "list-item" }
        });
        var $timeCreatedByUser = $("<span>", {
          addClass: "text-muted small",
          text:
            "created by " +
            array[index].username +
            " about " +
            moment(array[index].updatedAt).fromNow() +
            "  "
        })

        var $trashStory = $('<i>', {
          addClass: "fa fa-trash-o",
          attr: { "aria-hidden": "true"}
        });

        //append parts of list item together to create complete item
        $newLi.append('<i class="fa fa-star-o" aria-hidden="true"></i>');
        $newLi.append($newTitle);
        $newLi.append($timeCreatedByUser);
        $newLi.append($newDomain);
        $newLi.append($trashStory);

        //append new list item to document
        $("ol").append($newLi);
        });
      });
    };
  


  //login user function
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
    }).then(function(response) {
      $token = response.data.token;
      localStorage.setItem("username", $username);
      localStorage.setItem("token", $token);
      
    });
  }

  //global scope -- declare username and password vars
  let $username;
  let $password;
  let $token = localStorage.getItem("token");

  // create a user
  const $createNewUser = $("#createNewUser");

  $createNewUser.on("submit", function(e) {
    e.preventDefault();

    let $newName = $("#newName").val();
    let $newUserName = $("#newUserName").val();
    let $newPassword = $("#newPassword").val();

    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/users",
      method: "POST",
      data: {
        data: {
          name: $newName,
          username: $newUserName,
          password: $newPassword
        }
      }
    }).then(function(response) {
      $username = $newUserName;
      $password = $newPassword;

      loginUser();
      clearStories();
      getStories();
    });
  });

  //click login to login user
  //this calls loginUser function
  const $login = $("#login");

  $login.on("click", function(e) {
    e.preventDefault();

    $username = $("#username").val();
    $password = $("#password").val();

    loginUser();
    clearStories();
    getStories();
  });

  $('ol').on('click', 'li > .fa-trash-o', function(e) {
    let storyIdToRemove = $(e.target).parent().attr('data-id');
    console.log(e.target)
    console.log(storyIdToRemove)
    $.ajax({
      url: `https://hack-or-snooze.herokuapp.com/stories/${storyIdToRemove}`,
      method: "DELETE",
      headers: {Authorization: "Bearer " + $token}
    }).then(function(response) {
      console.log('i deleted it')
      clearStories()
      getStories()
    })
  })


  var $form = $("#needs-validation");

  //submit a news story
  $(".submitItem").on("click", "button#submit", function(e) {
    if ($form[0].checkValidity() === false) {
      $form[0].reportValidity();
      e.preventDefault();
      e.stopPropagation();
    } else {
      $form.addClass("was-validated");

      e.preventDefault();

      //get field values
      var titleInput = $("input#title").val();
      var authorInput = $("input#author").val();
      var urlInput = $("input#url").val();

      $.ajax({
        url: "https://hack-or-snooze.herokuapp.com/stories",
        method: "POST",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        data: {
          data: {
            username: JSON.parse(atob($token.split(".")[1])).username,
            title: titleInput,
            author: authorInput,
            url: urlInput
          }
        }
      }).then(function() {
        // console.log($username);
        // //create jQuery object for display
        // var $newTitle = $("<a>", {
        //   addClass: "px-3 text-dark",
        //   css: { "text-decoration": "none" },
        //   attr: { href: urlInput, target: "_blank" },
        //   text: titleInput
        // });

        // var $newDomain = $("<a>", {
        //   addClass: "text-muted small",
        //   text: "(" + getDomain(urlInput) + ")"
        // });

        // var $newLi = $("<li>", {
        //   addClass: "list-group-item",
        //   css: { display: "list-item" }
        // });

        // //append parts of list item together to create complete item
        // $newLi.append('<i class="fa fa-star-o" aria-hidden="true"></i>');
        // $newLi.append($newTitle);
        // $newLi.append($newDomain);

        // //prepend new list item to document
        // $("ol").prepend($newLi);

        //reset submit form
        urlInput = "";
        titleInput = "";
        $(".dropdown-toggle").dropdown("toggle");

        //check if favorite filter active & display new item accordingly
        if ($("#toggleFeed").text() === "all") {
          $newLi.addClass("d-none");
        }
        clearStories();
        getStories();
      });
    }
  });

  //toggle favorite mark

  //Adding favorites to login user
  //POST
  //username, storyId
  //url/users/{username}/favorites/{storyId}
  //header: authorization token needed

  $("ol").on("click", ".fa-star, .fa-star-o", function(e) {
    let username = JSON.parse(atob($token.split(".")[1])).username;
    var storyIdNum = $(e.target)
      .parent()
      .attr("data-id");
    var $star = $(e.target);
    $star.toggleClass("favorite");

    if ($star.hasClass("favorite")) {
      $star.removeClass("fa-star-o").addClass("fa-star text-warning");
      $.ajax({
        url: `https://hack-or-snooze.herokuapp.com/users/${username}/favorites/${storyIdNum}`,
        method: "POST",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        username: JSON.parse(atob($token.split(".")[1])).username,
        storyId: storyIdNum
      }).then(function(response) {
        console.log(response);
      });
    } else {
      $star.removeClass("fa-star text-warning").addClass("fa-star-o");
      $.ajax({
        url: `https://hack-or-snooze.herokuapp.com/users/${username}/favorites/${storyIdNum}`,
        method: "DELETE",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        username: JSON.parse(atob($token.split(".")[1])).username,
        storyId: storyIdNum
      }).then(function(response) {
        console.log("woahhhh it is gone!");
      });
    }
  });

  //filter by favorite
  $("#toggleFeed").on("click", function(e) {
    if ($(e.target).text() === "favorites") {
      $("li").addClass("d-none");
      $favorites = $("ol")
        .find("i.favorite")
        .parent();
      $favorites.removeClass("d-none");

      $(e.target).text("all");
    } else {
      $("li").removeClass("d-none");
      $(e.target).text("favorites");
    }
  });

  //get domain name

  function getDomain(data) {
    var a = document.createElement("a");
    a.href = data;
    if (a.hostname.slice(0, 4) === "www.") {
      return a.hostname.slice(4);
    } else {
      return a.hostname;
    }
  }

  //filter by domain name

  $("ol").on("click", "a.small", function(e) {
    var domainSelected = $(e.target).text();
    $allMatchingDomains = $("a:contains(" + domainSelected + ")").parent();
    $("li").addClass("d-none");
    $allMatchingDomains.removeClass("d-none");
    $("#toggleFeed").text("all");
  });
});

// Bugs to Squash
// create user does not empty the form and hide toggle on create account

//  Features needed
//  load icons when user logs in to show favorites in the feed (getStories)
// https://hackorsnoozeapi.docs.apiary.io/#reference/0/user/get-a-user
//  click username to toggle and see all stories submitted by user
//  fail messages for not failed login / create user / submit story
//  success messages
//  user profile section
//  user logout

// Accomplishments
// I made a clearStories and wrapped existing code into a getStories Function
// commented out duplicate code with functions
// I appended username and updatedAt times to the story li
// remove 'www.' from hostnames
// added usernames and timecreated to story


// IDEAs
/*
infinite scroll - http://jscroll.com/

Hide stars from non-logged in users
add storyId to the star as an id
Reveal empty stars when user logs in
Reveal filled stars if user favorite

function checkForLogin() {
  if (localStorage.getItem("token")) {
    $login.text("logout");
    $stars.show();
  } else {
    $login.text("login");
    $stars.hide();
    }
}
*/
