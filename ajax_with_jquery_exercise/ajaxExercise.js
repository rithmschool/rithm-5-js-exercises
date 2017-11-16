$(document).ready(function() {
  //Show news

  if (localStorage.getItem("token") !== null) {
    $(".nav>span").toggleClass("hidden");
    var userName = getUserNameFromToken();
    hideAllSections();
    listNewsWithToken();
  } else {
    hideAllSections();
    listNews();
  }

  //Click login link
  $("#loginLink").on("click", function() {
    hideAllSections();
    $("#authSection").removeClass("hidden");
  });

  //Click logout link
  $("#logoutLink").on("click", function() {
    hideAllSections();
    logOutUser();
    listNews();
  });

  //Click news link
  $("#newsLink").on("click", function() {
    hideAllSections();
    if (localStorage.getItem("token") !== null) listNewsWithToken();
    else listNews();
  });

  //Click submit link
  $("#submitLink").on("click", function() {
    hideAllSections();
    $("#submitSection").removeClass("hidden");
  });

  //Click favorites link
  $("#favoritesLink").on("click", function() {
    hideAllSections();
    showFavorites();
    $("#favoritesSection").removeClass("hidden");
  });

  //Login user
  $("#loginForm").on("submit", function(e) {
    e.preventDefault();
    $("#authSection").addClass("hidden");
    let userName = $("#loginName").val();
    let password = $("#loginPassword").val();
    clearValues(loginName, loginPassword);
    logInUser(userName, password);
  });

  //Create user and login
  $("#createUserForm").on("submit", function(e) {
    e.preventDefault();
    $("#authSection").addClass("hidden");
    let name = $("#createName").val();
    let userName = $("#createUserName").val();
    let password = $("#createPassword").val();
    createUser(name, userName, password);
    logInUser(userName, password);
    clearValues(createName, createUserName, createPassword);
    listNewsWithToken();
  });

  //Submit new story
  $("#formSubmit").on("submit", function(e) {
    e.preventDefault();
    $("#formSubmit").addClass("hidden");
    let title = $("#title").val();
    let author = $("#author").val();
    let url = $("#urlLink").val();
    submitStory(userName, title, author, url);
    clearValues(title, author, urlLink);
    listNewsWithToken();
  });

  //Select a favorite
  $("#storiesList").on("click", ".empty-star", function() {
    //hide empty star
    $(this).toggleClass("hidden");
    //display full star
    $(this)
      .siblings(".full-star")
      .toggleClass("hidden");
    let storyId = $(this)
      .parents("li")
      .data("storyid");
    addFavorite(userName, storyId);
  });

  //Remove from favorites
  $("#storiesList").on("click", ".full-star", function() {
    //hide full star
    $(this).toggleClass("hidden");
    //display empty star
    $(this)
      .siblings(".empty-star")
      .toggleClass("hidden");
    let storyId = $(this)
      .parents("li")
      .data("storyid");
    deleteFavorite(userName, storyId);
  });

  //Nasty Repeat Code to select a favorite from Favorites Link (couldn't figure out how to pass on this)
  $("#favoritesList").on("click", ".empty-star", function() {
    //hide empty star
    $(this).toggleClass("hidden");
    //display full star
    $(this)
      .siblings(".full-star")
      .toggleClass("hidden");
    let storyId = $(this)
      .parents("li")
      .data("storyid");
    addFavorite(userName, storyId);
  });

  //Nasty Repeat Code to remove favorite from Favorites Link
  $("#favoritesList").on("click", ".full-star", function() {
    //hide full star
    $(this).toggleClass("hidden");
    //display empty star
    $(this)
      .siblings(".empty-star")
      .toggleClass("hidden");
    let storyId = $(this)
      .parents("li")
      .data("storyid");
    deleteFavorite(userName, storyId);
  });

  function getUserNameFromToken() {
    var tokenMiddle = localStorage.getItem("token").split(".")[1];
    var userObj = JSON.parse(atob(tokenMiddle));
    return userObj.username;
  }

  function listNews(skip, limit) {
    $("#storiesList").remove();
    $("#storiesSection").append("<ol id='storiesList'></ol>");
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=10"
    }).then(function(response) {
      response.data.forEach(e => {
        let title = e.title;
        let url = e.url;
        let storyId = e.storyId;
        $("#storiesList").append(
          `<li data-storyid=${storyId}><span class="empty-star">&#9734;&nbsp</span><span class="full-star hidden>&#9733;&nbsp</span><a href=" ${url} "> ${title} </a><span class='hostDomain' >( ${extractHostDomain(
            url
          )})</span></li>`
        );
      });
    });
    $("#storiesSection").removeClass("hidden");
  }

  function listNewsWithToken(skip, limit) {
    $("#storiesList").remove();
    $("#storiesSection").append("<ol id='storiesList'></ol>");
    let userName = getUserNameFromToken();
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=10"
    }).then(function(response1) {
      $.ajax({
        url: `https://hack-or-snooze.herokuapp.com/users/${userName}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then(function(response2) {
        let stories = response1.data;
        let favorites = response2.data.favorites;
        debugger;
        let favoritesSet = new Set();
        favorites.forEach(f => favoritesSet.add(f.storyId));
        stories.forEach(e => {
          let title = e.title;
          let url = e.url;
          let storyId = e.storyId;
          if (favoritesSet.has(storyId)) {
            $("#storiesList").append(
              `<li data-storyid=${storyId}><span class="empty-star hidden">&#9734;&nbsp</span><span class="full-star">&#9733;&nbsp</span><a href=" ${url} "> ${title} </a><span class='hostDomain' >( ${extractHostDomain(
                url
              )})</span></li>`
            );
          } else {
            $("#storiesList").append(
              `<li data-storyid=${storyId}><span class="empty-star">&#9734;&nbsp</span><span class="full-star hidden">&#9733;&nbsp</span><a href=" ${url} "> ${title} </a><span class='hostDomain' >( ${extractHostDomain(
                url
              )})</span></li>`
            );
          }
        });
      });
    });
    $("#storiesSection").removeClass("hidden");
  }

  function hideAllSections() {
    $("section").each((i, e) => {
      $(e).addClass("hidden");
    });
  }

  function clearValues(id) {
    for (i = 0; i < arguments.length; i++) {
      $(arguments[i]).val("");
    }
  }

  function logInUser(userName, password) {
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/auth",
      method: "POST",
      data: {
        data: {
          username: userName,
          password: password
        }
      }
    })
      .then(function(response) {
        let token = response.data.token;
        localStorage.setItem("token", token);
        $(".nav>span").toggleClass("hidden");
        listNewsWithToken();
        $("storiesSection").removeClass("hidden");
      })
      .catch(function(error) {
        $("authSection").removeClass("hidden");
        alert("incorrect login");
        $("#authSection").removeClass("hidden");
      });
  }

  function createUser(name, userName, password) {
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/users",
      method: "POST",
      data: {
        data: {
          name: name,
          username: userName,
          password: password
        }
      }
    });
  }

  function logOutUser() {
    $(".nav>span").toggleClass("hidden");
    $("#submitSection").hide("swing");
    localStorage.removeItem("token");
  }

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
    //remove path
    hostname = hostname.split("/")[0];

    return hostname;
  }

  function submitStory(userName, title, author, url) {
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=10",
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: {
        data: {
          username: userName,
          title: title,
          author: author,
          url: url
        }
      }
    }).then(function(response) {
      listNews();
    });
  }

  function addFavorite(userName, storyId) {
    $.ajax({
      url: `https://hack-or-snooze.herokuapp.com/users/${userName}/favorites/${storyId}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }

  function deleteFavorite(userName, storyId) {
    $.ajax({
      url: `https://hack-or-snooze.herokuapp.com/users/${userName}/favorites/${storyId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }

  function showFavorites() {
    $.ajax({
      url: `https://hack-or-snooze.herokuapp.com/users/${userName}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(function(response) {
      $("#favoritesList").remove();
      $("#favoritesSection h3").after("<ul id='favoritesList'></ul>");
      let favorites = response.data.favorites;
      favorites.forEach(e => {
        let title = e.title;
        let url = e.url;
        let storyId = e.storyId;
        $("#favoritesList").append(
          `<li data-storyid=${storyId}><span class="empty-star hidden">&#9734;&nbsp</span><span class="full-star">&#9733;&nbsp</span><a href=" ${url} "> ${title} </a><span class='hostDomain' >( ${extractHostDomain(
            url
          )})</span></li>`
        );
      });
    });
  }

  function addMoreStories() {}
});
