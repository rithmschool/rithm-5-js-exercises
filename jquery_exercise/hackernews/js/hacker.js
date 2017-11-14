
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














});
