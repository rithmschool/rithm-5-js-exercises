# AJAX with jQuery Exercise: Hack-or-Snooze

### In this exercise, we'll rework our Hacker News clone to use AJAX.
### We will be utilizing Rithm's very own [Hack-or-Snooze API](https://hackorsnoozeapi.docs.apiary.io/#). 

## Requirements

The requirements below are listed as Agile/Scrum requirements that you might see on a software engineering kanban board or task list. The tasks are phrased as "User Stories", which means they are written from the perspective of a user/customer.

1. As a user, I can see at least 10 latest stories on the homepage which link to the actual stories.
1. As a user, I can login or signup for an account on the homepage.
1. As a user, I can stay logged in for some time. _Technical: When the user logs in successfully, the server responds with a JSON Web Token (JWT) that is required for other requests. The token should be saved to `localStorage` to allow the user to stay logged in._
1. As a logged in user, I can create a new story.
1. As a logged in user, I can "favorite" a story which saves it to my profile.
1. As a logged in user, I can view my user profile which contains the fields I signed up with (except my password, which is hidden).
1. As a logged in user, I can view stories that I posted and my favorites in my profile.
1. As a logged in user, I can remove individual stories that I've created  from the list in my profile.
1. As a logged in user, I can remove individual favorites from the list of favorites in my profile.

### BONUS

* As a user, I can edit stories that I've created
* As a user, I can change my `name` and `password` in my profile.
* As a user, I want infinite scroll! When I scroll to the bottom of the page, it loads more stories.
* Come up with some other features you can build using what our Hack or Snooze API makes availalbe to you!


### To get started with the API, check out the [Quickstart section](https://hackorsnoozeapi.docs.apiary.io/#introduction/quickstart) of the documentation.

---

### How Token Auth Works
1. Make a request to receive a token (in our case at `/auth`).
1. On subsequent requests you make, the token gets placed in a special request header called `Authorization`.
1. The format is like so: `{ Authorization: 'Bearer ' + token }`, for example: `{ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1odWV0ZXIiLCJpYXQiOjE1MTAyMDcwMDl9.5oUeihYn2AkqGy6z3g5F5B46gWWgvGKilFr9S4gg-p4'}`.
1. The blob of characters is actually just a base64-encoded payload. You can decode it here: [https://www.base64decode.org/](https://www.base64decode.org/).
1. The token is NOT encrypted, as you can see it's just base64-encoded. This means sensitive data should not travel with it (such as password).
1. The purpose of the token is to let the API know who is making the request (i.e. authentication). The API has a secret/private key that it uses to generate and decode the tokens. It decodes and verifies the tokens on every request.
1. The secret key is unique for every API, so the API will know one of its own tokens when it sees it.
1. For more info check out [https://jwt.io](https://jwt.io).
