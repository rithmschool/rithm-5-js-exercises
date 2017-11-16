
$(document).ready(function(){
  $("#storyForm").submit(function(e) {
    e.preventDefault();
    var $storyTitle = $("#Title").val();
    var $storyURL = $("#URL").val();
    var $username = localStorage.getItem('userName');
    var $author = $("#author").val();

    $.ajax({
      method: "POST",
      url:"https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=10",
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      },
      data:  {
        data: {
          username: $username,
          title: $storyTitle,
          author: $author,
          url: $storyURL

        }
      }.done(function(data){
        console.log(data);
      })
    });


      $('#storyForm').slideUp();
      var addTitle = $("#Title").val();
      var addURL = $("#URL").val();
        $("#storyList").append("<li><i class='fa fa-newspaper-o' aria-hidden='true'></i>" + " " + addTitle + "</li>");
  });


  $(".nav-link.login").click(function(e) {
    $("#storyList").hide();
    $("#logInForm").slideDown();
    $("#storyForm").hide();
  });





//console.log stories
  $.getJSON('https://hack-or-snooze.herokuapp.com/stories')
                .then(function(response){
                    console.log(response);
                    var arr = response.data;
                    for (let i = 1; i < 10; i++){
                      $("#storyList").append('<li>' + "<i class='fa fa-newspaper-o' aria-hidden='true'></i>" + " " + arr[i].title + "</li>");
                    }

      });


  $("#logInForm").submit(function(e){
       e.preventDefault()
       $name = $("#name").val();
       $username = $("#userName").val();
       $password = $("#password").val();

       var data = { name: $name, username: $username, password: $password };
       //try it with getJSON
       $.ajax({
         method: "POST",
         url:"https://hack-or-snooze.herokuapp.com/users",
         data: { data }
       })
       .done(function(data){
         console.log(data);
       })

       $.ajax({
         method: "POST",
         url:"https://hack-or-snooze.herokuapp.com/auth",
         data: {
           data:{
             username: $username,
             password: $password
          }
         }
       })
       .done(function(response) {
         console.log(response);
       })
       .fail(function(){
         alert("OH NO, FAILED!!")
       })


        //after submitting login info
         $("#logInForm").hide();
         $("#storyList").slideDown();

         $("#navStorySubmit").click(function(e){
           $("#storyForm").show();
           $("#loginForm").hide();
         });

        $("#storyForm").hide();

      });









});
