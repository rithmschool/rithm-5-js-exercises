$(document).ready(function() {
  //Show news
  listNews();
  if (localStorage.getItem("token")) $(".nav>span").toggleClass("hidden");
  var userName = getUserNameFromToken();

  //Click login link
  $("#loginLink").on("click", function() {
    $("#authSection").toggle("swing");
  });

  //Click logout link
  $("#logoutLink").on("click", function() {
    logOutUser();
  });

  //Click news link
  $("#newsLink").on("click", function() {
    listNews();
  });

  //Click submit link
  $("#submitLink").on("click", function() {
    $("#formSubmit").toggle("swing");
  });

  //Click profile link
  $("#profileLink").on("click", function() {
    if($("#userProfile:visible").length === 0) {getName()}
    $("#userProfile").toggle("swing");
    
  });

  //Login user
  $("#loginForm").on("submit", function(e) {
    e.preventDefault();
    $("#authSection").toggle("swing");
    let userName = $("#loginName").val();
    let password = $("#loginPassword").val();
    logInUser(userName, password);
    $(`#authSection input`).val("")
    });

  //Create user and login
  $("#createUserForm").on("submit", function(e) {
    e.preventDefault();
    $("#authSection").toggle("swing");
    let name = $("#createName").val();
    let userName = $("#createUserName").val();
    let password = $("#createPassword").val();
    createUser(name, userName, password);
    logInUser(userName, password);
    $(`#authSection input`).val("")
  });

  //Submit new story
  $("#formSubmit").on("submit", function(e) {
    e.preventDefault();
    $("#formSubmit").toggle("swing");
    let title = $("#title").val();
    let author = $("#author").val();
    let url = $("#urlLink").val();
    submitStory(userName, title, author, url);
    $("#formSubmit").trigger("reset");
  });

  //Select a favorite
  $("#list").on("click", "li span.empty-star", function() {
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
  $("#list").on("click", "li span.full-star", function() {
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
    try {
      var tokenMiddle = localStorage.getItem("token").split(".")[1];
      var userObj = JSON.parse(atob(tokenMiddle));  
      return userObj.username;
    } catch(e) {
      return ""
    }    
  }

  function listNews() {
    $("#list").remove();
    $("#storiesSection").append("<ol id='list'></ol>");
    let userName = getUserNameFromToken();
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=20"
    })
      .then(function firstAjaxCall(response) {
        let stories = response.data;
        for (let i = 0; i < stories.length; i++) {
          let title = stories[i].title;
          let url = stories[i].url;
          let storyId = stories[i].storyId;
          $("#list").append(
            `<li data-storyid=${storyId}><span class="empty-star">&#9734;&nbsp</span><span class="full-star hidden">&#9733;&nbsp</span><a href=" ${url} "> ${title} </a><span class='hostDomain' >( ${extractHostDomain(
              url
            )})</span></li>`
          );
        }
        return response;
      })
      .then(function secondAjaxCall(response) {
        var data = response;
        $.ajax({
          url: `https://hack-or-snooze.herokuapp.com/users/${userName}`,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }).then(function finalAjaxResponse(user) {
          var stories = data.data;
          var favorites = user.data.favorites;
  
        });
      });
  }

  function logInUser(uName, password) {
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/auth",
      method: "POST",
      data: {
        data: {
          username: uName,
          password: password
        }
      }
    }).then(function(response) {
      let token = response.data.token;
      localStorage.setItem("token", token);
      userName = uName;
      $(".nav>span").toggleClass("hidden");
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
    $("#userProfile").find("span.name").text("");
    $("#userProfile").find("span.userName").text("");
    $("#formSubmit, #userProfile").hide("swing");
    localStorage.clear();
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
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(function(response) {
    });
  }

  function deleteFavorite(userName, storyId) {
    $.ajax({
      url: `https://hack-or-snooze.herokuapp.com/users/${userName}/favorites/${storyId}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(function(response) {
    });
  }

  // Get user's name
  function getName() {
    $.ajax({
      url: `https://hack-or-snooze.herokuapp.com/users/${userName}`,
      method: "GET",
      headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
      },
      data: {
          data: {
            username: userName
          }
      }

    }).then(function(response){
      name = response.data.name;
      $("#userProfile").find("span.name").text(`${name}`)
      $("#userProfile").find("span.userName").text(`${userName}`)
    });
  }

});
