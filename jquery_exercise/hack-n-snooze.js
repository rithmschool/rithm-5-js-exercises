$(function() {

$.getJSON('https://hack-or-snooze.herokuapp.com/stories').then(function(response){
    console.log(response)
});

// New User
$.ajax({
	url: 'https://hack-or-snooze.herokuapp.com/users',
	method: "POST",
	data: { // ajax method requires data
		data: {
			name: "user",
			username: "newuser",
			password: "password"

		}//,
	}
}).then(function(response){
	console.log(response)
});

// User Login
$.ajax({
	url: 'https://hack-or-snooze.herokuapp.com/auth',
	method: "POST",
	data: { // ajax method requires data
		data: {
			name: "user",
			username: "newuser",
			password: "password"

		}//,
	}
}).then(function(response){
	localStorage.setItem('token', response.data.token)
	console.log(response)
});

//headers:{
//		Authorization: "Bearer" + localStorage.getItem('token')
//	},


$('#SUBMIT').click(function() {
  $('#new-post').show()
});
// listen for a submit event on a form
$('#new-post').on('submit', function(e) {
  e.preventDefault() // do not refresh the page

  var nextTitle = $(link1).val();
  var url = $(link2).val()

  $(link1).val('')
  $(link2).val('')

  if (nextTitle.length === 0) return 0
  if (url.length === 0) return 0
  
  $('#new-post').slideUp()
  
  var newElement = `<li><span class='fa fa-star-o'></span><b>${nextTitle}</b><span class='link'> (${url})</span></li> ` 

  $('ul').append(newElement)

  

 // <li><span class='fa fa-star-o'></span><b>Helloo</b><span class='link'> (google.com)</span></li> 
  });

  $(function() {
  
    $('ul').on('click', 'span', function() {
      $(this).toggleClass('fa-star-o fa-star')
      
    })
  
  });

});