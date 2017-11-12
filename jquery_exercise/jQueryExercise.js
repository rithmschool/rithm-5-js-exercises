// $(document).ready(function() {

//   $('#s').click(function(){
//     $('#form').show();
//   });

//   $("#form").submit(function(e) {
//    e.preventDefault();
//     $('#form').slideUp();

//     var toAdd = $("#news").val();
//     var news = $("#news").val("");
//     if (typeof toAdd === "string" && toAdd.length > 0){
//      $("ol").append("<li>" + toAdd + "</li>");
//     }

//   });

// });

//     function validateURL(textval) {
//     var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
//     return urlregex.test(textval);
// }

$(document).ready(function() {
  $("#submitLink").click(function() {
    $("#form").show("swing");
  });

  $("#formSubmit").submit(function(e) {
    e.preventDefault();
    $("#form").slideUp();
    var toAddTitle = $("#title").val();
    var toAddUrl = $("#urlLink").val();
    $("#list").append(
      '<li><span class="empty-star">&#9734;&nbsp</span><a href="' +
        toAddUrl +
        '">' +
        toAddTitle +
        "</a></li>"
    );
    $("#title").val("");
    $("#urlLink").val("");
    // if (toAddUrl.slice(0,7) !== "http://") {
    //     validUrl = validateURL("http://" + toAddUrl);
    // } else {
    //     validUrl = validateURL(toAddUrl);
    // }
    // if (validUrl) {
    //if (typeof toAdd === "string" && toAdd.length > 0){
    // }else{
    //}
  });
  // $(".formInput").click(function() {
  //   $(this).closest('form').find("input[type=text], textarea").val("");
  // });
});
