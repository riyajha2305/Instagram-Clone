
# Instagram-Clone
Instagram Clone | MERN Stack

Created a clone of Instagram using MERN stack.

Features:

Uers can update their profile and sort posts based on their followings
User authetication with enability to reset password via email notification
Lets users post images with title
Lets users like & dislike posts
Lets users comment on others post
Lets users view other users profile
Lets user follow & unfollow other users
Search feature to search people on this webiste

Discover about different people by having a visit at this Instagram-Clone
https://instaclone2305.herokuapp.com/
=======
<h1 align="center">Instagram-Clone-Social-Media-App</h1>
<br>

<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, Reactjs, Nodejs
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

Discover about different people by having a visit at this Instagram-Clone : 
https://instaclone2305.herokuapp.com/


# About
I started developing a social media app in my spare time for about 2 months or so and ended up with this cool Instagram-Clone!
Basically it allows you to login and upload posts (with images & coordinates), search posts (by names), like and comment on posts.

I learnt a lot about react & backend stuff while doing this including:
- best ways to upgrade a projects packages (which proves to be hard some times)
- write clean client-side & server-side modules
- changing the boilerplate
- optimize bits of code
- much more...

# What I learnt about react
- It's really easy to prototype web-apps quickly, but when it comes to refining them and adding smaller details, the development time starts to slow down. 
- The styling is quite hard, at first, to get right.
- It's got an amazing community that spends a lot of time improving the codebase everyday!
- Changing react versions can prove to be a hard task. Build error, npm package dependcies, and more...



## clone or download
```terminal
$ git clone https://github.com/riyajha2305/Instagram-Clone.git
$ npm i
```

## folder structure
```terminal
client/
  public
  src
config
middleware
models
routes
   app.js
   package-lock.json
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client    // go to client folder
$ npm i       // npm install packages
$ npm start  // run the client side app

```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

### Start

```terminal
$ cd myproject  // go to server folder
$ npm i       // npm install packages
$ nodemon app // this will run the server side app
```

## Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm run deploy:heroku
```


# Screenshots of this project

User can sign in or sign up
![User can sign in or sign up](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/1.png)

User visit Feed page
![User visit Feed page](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/2.png)

User can go to his/her profile page
![User can go to his/her profile page](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/3.png)

User can visit other users profile and follow/unfollow
![User can visit other users profile and follow/unfollow](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/4.png)

