
$(document).ready(function(){
  $("#storyForm").submit(function(e) {
    e.preventDefault();
      $('#storyForm').slideUp();
      var addTitle = $("#Title").val();
      var addURL = $("#URL").val();
        $("#storyList").append("<li><i class='fa fa-newspaper-o' aria-hidden='true'></i>" + " " + addTitle + "</li>");
  });

  $(".nav-link.submit").click(function(e) {
    $("#storyForm").slideDown();
  });

  $(".nav-link.login").click(function(e) {
    $("#storyList").hide();
    $("#logInForm").slideDown();
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

         $("#storySubmit").click(function(e){
           $("#storyForm").show();
         });



      });


    $("#storyForm").hide();







});
