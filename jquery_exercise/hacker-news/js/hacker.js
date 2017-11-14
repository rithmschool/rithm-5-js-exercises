document.addEventListener("DOMContentLoaded", function () {
  // $newId = "testing";
  // $siteVal = "Yes this works";
  console.log("Let's get ready to party with jQuery!");

  $(".show_link").on('click', function(e){
    $("form").toggleClass('visible');
  })
  $(".submit_btn").on('click', function (e) {
    e.preventDefault();
    $titleVal = $('#title').val();
    $siteVal = $('#url').val();

    $(".article_list").append('<li id=' + $titleVal + '><i class="fa fa-star-o" aria-hidden=true></i><span class="font-weight-bold"> ' + $titleVal + '</span> <span class="toSort"><small>' + $siteVal + '</small></span></li>');
  });
})