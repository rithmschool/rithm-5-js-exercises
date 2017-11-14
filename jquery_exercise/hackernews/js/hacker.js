
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

//console.log stories
  // $.getJSON('https://hack-or-snooze.herokuapp.com/stories')
  //               .then(function(response){
  //                   console.log(response);
  //     });


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
       .fail(function(){
         alert("OH NO, FAILED!!")
       })
      });








});
