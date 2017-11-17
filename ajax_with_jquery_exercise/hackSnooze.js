$(function() {
  let userFavorites;
  let token = localStorage.getItem("token");
  let $username = localStorage.getItem("username");
  let $password;

  const $form = $("#needs-validation");
  const $createNewUser = $("#createNewUser");
  const $login = $("#login");

  onLoadAttemptLogin();
  //load stories
  getStories();

  function onLoadAttemptLogin() {
    if ($username && token) {
      $("#loginNav").text(`${$username}`);

      //call getUserfavorites
    }
  }

  function clearStories() {
    $("ol").empty();
  }

  function getStories() {
    $.getJSON(
      "https://hack-or-snooze.herokuapp.com/stories?limit=25"
    ).then(function(response) {
      response.data.forEach(function(value, index, array) {
        if (array[index].username === $username) {
          $("ol").append(`
            <li class="list-group-item" data-id=${array[index]
              .storyId} style="display: list-item;">
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <a class="px-3 text-dark" href=${array[index]
                .url} target="_blank" style="text-decoration: none;">${array[
            index
          ].title}</a>
              <span class="text-muted small">created by ${array[index]
                .username} ${moment(array[index].updatedAt).fromNow()}  </span>
              <a class="text-muted small">(${getDomain(array[index].url)})</a>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </li>
          `);
        } else {
          $("ol").append(`
            <li class="list-group-item" data-id=${array[index]
              .storyId} style="display: list-item;">
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <a class="px-3 text-dark" href=${array[index]
                .url} target="_blank" style="text-decoration: none;">${array[
            index
          ].title}</a>
              <span class="text-muted small">created by ${array[index]
                .username} ${moment(array[index].updatedAt).fromNow()}  </span>
              <a class="text-muted small">(${getDomain(array[index].url)})</a>
              <i class="fa" aria-hidden="true"></i>
            </li>
          `);
        }
      });
    });
  }

  //login user function
  function loginUser(username, password) {
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/auth",
      method: "POST",
      data: {
        data: {
          username: username,
          password: password
        }
      }
    })
      .then(function(response) {
        token = response.data.token;
        localStorage.setItem("username", username);
        localStorage.setItem("token", token);
        $("#loginNav").text(`${username}`);
      })
      .then(function() {
        $.ajax({
          url: `https://hack-or-snooze.herokuapp.com/users/${username}`,
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }
        }).then(function(response) {
          userFavorites = response.data.favorites;
          console.log(userFavorites);
        });
      });
  }

  // create a user
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
      loginUser($newUserName, $newPassword);
      clearStories();
      getStories();
    });
  });

  //click login to login user

  $login.on("click", function(e) {
    e.preventDefault();
    loginUser($("#username").val(), $("#password").val());
    clearStories();
    getStories();
  });

  //DELETE USER'S OWN STORY
  $("ol").on("click", "li > .fa-trash-o", function(e) {
    let storyIdToRemove = $(e.target)
      .parent()
      .attr("data-id");
    $.ajax({
      url: `https://hack-or-snooze.herokuapp.com/stories/${storyIdToRemove}`,
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    }).then(function(response) {
      clearStories();
      getStories();
    });
  });

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
        headers: { Authorization: `Bearer ${token}` },
        data: {
          data: {
            username: JSON.parse(atob(token.split(".")[1])).username,
            title: titleInput,
            author: authorInput,
            url: urlInput
          }
        }
      }).then(function() {
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

  //toggle favorite mark to server (page star does not persist)

  $("ol").on("click", ".fa-star, .fa-star-o", function(e) {
    let username = JSON.parse(atob(token.split(".")[1])).username;
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
        headers: { Authorization: `Bearer ${token}` },
        username: JSON.parse(atob(token.split(".")[1])).username,
        storyId: storyIdNum
      }).then(function(response) {
        console.log(response);
      });
    } else {
      $star.removeClass("fa-star text-warning").addClass("fa-star-o");
      $.ajax({
        url: `https://hack-or-snooze.herokuapp.com/users/${username}/favorites/${storyIdNum}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
        username: JSON.parse(atob(token.split(".")[1])).username,
        storyId: storyIdNum
      }).then(function(response) {
        console.log("Successfully removed from favorites");
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
ONLY SHOW TRASHCANS ON STORIES USER COULD DELETE
*/
