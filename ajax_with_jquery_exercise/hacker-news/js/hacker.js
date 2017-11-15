$(document).ready(function () {

  let $sign_submit = $(".sign_sub");
  let $login_btn = $("#login-btn");
  let story = "Story Title";

//////////////////////////////////////////////// Populate the page with 10 Stories if logged in
  $.getJSON('https://hack-or-snooze.herokuapp.com/stories').then(function (response) {
    console.log(response);
    for (var i = 0; i < 10; i++) {
      let story_title = response.data[i].title;
      let story_author = response.data[i].author;
      let story_url = response.data[i].url;
      $(".article_list").append(`<li id=${story_title} class="my-2"><i class="fa fa-star-o" aria-hidden=true id="test"></i><h6 class="font-weight-bold d-inline-block ml-1"><a href="${story_url}" target="_blank">${story_title}</a></h6> <p class="toSort d-inline-block"><small> - ${story_author}</small></p></li>`);
    
    }
  })

  //clicking on an empty star next to a story marks it as a "favorite." 
  $("ol.article_list").on("click", "li i", function () {
    $(this).toggleClass("fa-star-o fa-star");
    });
  
  // Check if have a token and able to logged someone in
  $.ajax({
    url: 'https://hack-or-snooze.herokuapp.com/users/mangosing',
    headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
    }
  })
    .then(function (response) {
      $(".login_text").text("Logout");
      console.log(response);
    })




  $(".show_link").on('click', function(e){
    $("form").toggleClass('visible');
  })
  $(".submit_btn").on('click', function (e) {
    e.preventDefault();
    let titleVal = $('#title').val();
    let siteVal = $('#url').val();

    $(".article_list").append(`<li id=${titleVal}><i class="fa fa-star-o" aria-hidden=true></i><span class="font-weight-bold">${titleVal}</span> <span class="toSort"><small>${siteVal}</small></span></li>`);
  });

  $sign_submit.on("click", function(e){
    e.preventDefault();
    let fullName = $("#fullname_signup").val();
    let userName = $("#username_signup").val();
    let password_sign = $("#password_signup").val();

    $.ajax({
      url: 'https://hack-or-snooze.herokuapp.com/users',
      method: "POST",
      data: {
        data: {
          name: `${fullName}`,
          username: `${userName}`,
          password: `${password_sign}`
        }
      }
    })
    .then(function (response) {
      $(".login_text").text("Logout");
      console.log(response);
      $.ajax({
        url: 'https://hack-or-snooze.herokuapp.com/auth',
        method: "POST",
        data: {
          data: {
            username: `${userName}`,
            password: `${password_sign}`
          }
        }

      })
      .then(function(response){
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
    })
  })

  $(".submit_story_btn").on('click',function(e) {
    $.ajax({
      url: 'https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=10',
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      },
      method: 'POST',
      data: {
        data: {
          username: 'mangosing',
          title: 'something title',
          author: 'Sean Mangosing',
          url: 'http://www.google.com'
        }
      }
    })
    .then(function(response){
      console.log(response);
    })
  });































});
