$(document).ready(function(){
    
    // Populate with articles
    // Here's the block of HTML elements which will be appended to the DOM
    // <li>
    //     <span class="fa fa-star-o"></span> 
    //     <a href=${story.url} target=_blank>
    //         <b> ${story.title}</b>
    //     </a>
    //     <span class="link"> (${filterURL(story.url)})</span>
    //     <span id="story-id">${story.storyId}</span><br>
    //     <span id="article-user">by ${story.username}</span>
    // </li>


    function getStories(){
        $.getJSON('https://hack-or-snooze.herokuapp.com/stories').then(function(response) {
            response.data.forEach(function(story) {
            var newLi = `<li class= "list-group-item"><span class="fa fa-star-o"></span> <a href=${story.url} target=_blank><b> ${story.title}</b></a><span class="link"> (${filterURL(story.url)})</span><span class="story-id">${story.storyId}</span><br><span id="article-user">by ${story.username}</span></li>`;

            $('.urlLinks').append(newLi);

            })
        })      
    }

    getStories()


    // Create new users
    $('#create-form').on("submit", function(e){
        e.preventDefault()
        $name = $("#create_name").val()
        $userName = $("#create_userName").val()
        $password = $("#create_password").val() 
        
        $.ajax({
            url: "https://hack-or-snooze.herokuapp.com/users",
            method: "POST",
            data: {
                data: {
                    name: $name,
                    username: $userName,
                    password: $password
                }
            }
        }).then(function(response){
            $('#create-form').trigger('reset')
            $('#loginModal').modal('hide');
            console.log(response)
        })
    })


    // Login user
    $('#login-form').on("submit", function(e){
        e.preventDefault()
        $user_login = $("#login_user").val()
        $password = $("#login_password").val() 
        
        $.ajax({
            url: "https://hack-or-snooze.herokuapp.com/auth",
            method: "POST",
            data: {
                data: {
                    username: $user_login,
                    password: $password
                }
            }
        }).then(function(response){
            $('#login-form').trigger('reset')
            $('#loginModal').modal('hide')
            localStorage.setItem('token', response.data.token)
        })
    })


    // Get user document
    function getUserName(){
        var userObj = JSON.parse(atob(localStorage.getItem("token").split(".")[1]))
        return userObj.username
    }

    var userName = getUserName()
    $.ajax({
        url: `https://hack-or-snooze.herokuapp.com/users/${userName}`,
        method: "GET",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }).then(function(response){
        
        // DESTRUCTURE THE RESPONSE OBJECT
        var {name, username, favorites, stories} = response.data
        
        // APPEND THE USER PROFILE INFORMATION
        $('#panel1').append(`<p id="profile_text">Name - ${name}</p>`)
        $('#panel1').append(`<p id="profile_text">Username - ${username}</p>`)
        
        // APPEND THE FAVORITE STORIES DOM ELEMENTS

        favorites.forEach(function(favorite){
            $("#panel2 ul").append(`<li class="list-group-item">${favorite.title} <button type="button" class="btn btn-danger btn-sm" id="deleteFavorite">Delete</button><span class="story-id">${favorite.storyId}</span></li>`)
        })
        
        // APPEND THE USER STORIES 

        stories.forEach(function(story){
            $("#panel3 ul").append(`<li class="list-group-item">${story.title} <button type="button" class="btn btn-danger btn-sm" id="deleteStory">Delete</button><span class="story-id">${story.storyId}</span></li>`)
        })
        
        console.log(response)
    })


    //Delete a story from user profile
    // Need event delegation since these elements technically don't exist yet
    $('.list-group').on("click", "#deleteStory", function(e){

        var $storyId = $(e.target).parent().find('.story-id').text()

        $.ajax({
            url: `https://hack-or-snooze.herokuapp.com/stories/${$storyId}`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(function(response){
            $(e.target).parent().remove()
            $()
            console.log(response)
        })
    })


    // Delete favorite from user profile
    $('.list-group').on("click", "#deleteFavorite", function(e){
        userName = getUserName()

        var $storyId = $(e.target).parent().find('.story-id').text()

        $.ajax({
            url: `https://hack-or-snooze.herokuapp.com/users/${userName}/favorites/${$storyId}`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(function(response){
            $(e.target).parent().remove()
            console.log(response)
        })
    })

    // Slide submit form on click
    $('#submit').on('click', function(e) {
    	$('#form').slideToggle('slow');  
    });


    
    // Extract the domain name from the website
    function filterURL(string){
      var urlArray = string.split("//")
      var cleanURL = urlArray[1].split("/")
      if(cleanURL[0].slice(0, 4) === "www."){
        return cleanURL[0].slice(4)
      } else {
        return cleanURL[0]
      }
    }   

    // Append the new element once the form has been submitted 
    $('#form').on('submit', function(e) {
    	//Check to see if URL is valid
        var userName = getUserName();
    	var $title = $('#inputTitle').val();
    	var $url = $('#inputURL').val();
        var $author = $('#inputAuthor').val();


        $.ajax({
            method: "POST",
            url: "https://hack-or-snooze.herokuapp.com/stories",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: {
                data: {
                    username: userName,
                    title: $title,
                    author: $author,
                    url: $url
                }
            }
        }).then(function(response){
            $('.urlLinks').empty()
            getStories()

        })


    	$('#form').slideToggle('slow');

    	$('#form').trigger('reset');
   
    });

    // Event Delegation must be used as new items are added. They wont have the event listener
    // Make the stars clickable if want to add to favorite
    $("ol").on("click", ".fa-star-o", function(e){
        $(e.target).toggleClass("fa-star fa-star-o")
        
        var userName = getUserName()
        $storyIdentity = $(e.target).parent().find(".story-id").text()
        

        $.ajax({
            url: `https://hack-or-snooze.herokuapp.com/users/${userName}/favorites/${$storyIdentity}`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(function(response) {
            console.log(response)
        })

    })

    $("ol").on("click", ".fa-star", function(e){
        $(e.target).toggleClass("fa-star-o fa-star")

    })


    // Filter out the favorites
    $("#favorites").on("click", function(e){
        $text = $("#favorites").text()


        if($text === "Favorites"){
            // Change text
            $("#favorites").text("All")


            // Hide if has empty star
            $("li").filter(function(i, el){
                return $(el).children().hasClass("fa-star-o")
            }).hide()

        } else {
            $("#favorites").text("Favorites")
            $("li").show()
        }


    })


    // Use event delegationt to add listener on ol
    // Filter down to only show elements which have the same domain name
    $("ol").on("click", ".link", function(e){
        var $hostName = $(e.target).text()

        $("li").filter(function(i, el){
            return $(el).find(".link").text() !== $hostName
        }).hide()

        $("#favorites").text("All")

    })


});

    
// JAVASCRIPT FOR MODAL!!
    function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
    }
    function showLoginForm(){
        $('#loginModal .registerBox').fadeOut('fast',function(){
            $('.loginBox').fadeIn('fast');
            $('.register-footer').fadeOut('fast',function(){
                $('.login-footer').fadeIn('fast');    
            });
            
            $('.modal-title').html('Login with');
        });       
         $('.error').removeClass('alert alert-danger').html(''); 
    }

    function openLoginModal(){
        showLoginForm();
        setTimeout(function(){
            $('#loginModal').modal('show');    
        }, 230);
        
    }
    function openRegisterModal(){
        showRegisterForm();
        setTimeout(function(){
            $('#loginModal').modal('show');    
        }, 230);
        
    }

    function loginAjax(){
        /*   Remove this comments when moving to server
        $.post( "/login", function( data ) {
                if(data == 1){
                    window.location.replace("/home");            
                } else {
                     shakeModal(); 
                }
            });
        */

    /*   Simulate error message from the server   */
         shakeModal();
    }

    function shakeModal(){
        $('#loginModal .modal-dialog').addClass('shake');
                 $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
                 $('input[type="password"]').val('');
                 setTimeout( function(){ 
                    $('#loginModal .modal-dialog').removeClass('shake'); 
        }, 1000 ); 
    }