<div id="top"></div>

<h1 align="center"> Instagram Clone </h1>



<!-- ---------------------------------------------------------------------------------------------------------------------- -->

<div align="center">

![Contributors](https://img.shields.io/github/contributors/riyajha2305/Instagram-Clone?style=for-the-badge)
  ![Forks](https://img.shields.io/github/forks/riyajha2305/Instagram-Clone?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/riyajha2305/Instagram-Clone?style=for-the-badge)
![License](https://img.shields.io/github/license/riyajha2305/Instagram-Clone?style=for-the-badge)
![PRs-Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)  

![](https://img.shields.io/github/issues-raw/riyajha2305/Instagram-Clone?color=orange&style=for-the-badge)
![](https://img.shields.io/github/issues-closed/riyajha2305/Instagram-Clone?style=for-the-badge)
![](https://img.shields.io/github/issues-pr/riyajha2305/Instagram-Clone?style=for-the-badge)
![](https://img.shields.io/github/issues-pr-closed-raw/riyajha2305/Instagram-Clone?style=for-the-badge)
  
</div>



<!-- ---------------------------------------------------------------------------------------------------------------------- -->

<p align="center">
  <strong> Created a clone of Instagram using MERN stack. </strong>
    <br />
  <br />
    <a href="https://instaclone2305.herokuapp.com/"><strong>Instagram Clone Official Website »</strong></a>
    <br />
    <a href="https://github.com/riyajha2305/Instagram-Clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/riyajha2305/Instagram-Clone/issues">Request Extension </a>
  </p>




<!-- ---------------------------------------------------------------------------------------------------------------------- -->
<!-- TABLE OF CONTENTS --> 

#### Table of Contents :
* [Overview](#Overview)
* [Folder Structure](#Folder-Structure)
* [Prerequisites](#Prerequisites)
* [Snapshots of this Project](#Snapshots-of-this-Project)
* [Open Source programs this repo has been part of](#Open-Source-programs-this-repo-has-been-part-of)
* [Contribution Guidelines](#Contribution-Guidelines)
* [Contributors](#Contributors)
* [Feedback](#Feedback)


  
<p align="right">(<a href="#Bottom">Bottom</a>)</p>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
## Overview

Instagram Clone | MERN Stack

### Features:

Uers can update their profile and sort posts based on their followings User authetication with enability to reset password via email notification Lets users post images with title Lets users like & dislike posts Lets users comment on others post Lets users view other users profile Lets user follow & unfollow other users Search feature to search people on this webiste

### About
I started developing a social media app in my spare time for about 2 months or so and ended up with this cool Instagram-Clone!
Basically it allows you to login and upload posts (with images & coordinates), search posts (by names), like and comment on posts.

I learnt a lot about react & backend stuff while doing this including:
- best ways to upgrade a projects packages (which proves to be hard some times)
- write clean client-side & server-side modules
- changing the boilerplate
- optimize bits of code
- much more...

<p align="right">(<a href="#top">back to top</a>)</p>

### What I learnt about react
- It's really easy to prototype web-apps quickly, but when it comes to refining them and adding smaller details, the development time starts to slow down. 
- The styling is quite hard, at first, to get right.
- It's got an amazing community that spends a lot of time improving the codebase everyday!
- Changing react versions can prove to be a hard task. Build error, npm package dependcies, and more...
  

 #### Tech-Stack used :

  ![HTML 5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  ![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Mangodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  



<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
## Folder Structure

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

<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

## Prerequisites

Usage (run fullstack app on your machine)

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

###  Client-side usage(PORT: 3000)
```terminal
$ cd client    // go to client folder
$ npm i       // npm install packages
$ npm start  // run the client side app

```

###  Server-side usage(PORT: 5000)

<p align="right">(<a href="#top">back to top</a>)</p>

####  Prepare your secret

run the script at the first level:

### Start

```terminal
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



<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

## Snapshots of this Project

### User can sign in or sign up

![User can sign in or sign up](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/1.png)

<br>

### User visit Feed page

![User visit Feed page](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/2.png)

<br>

<p align="right">(<a href="#top">back to top</a>)</p>

### User can go to his/her profile page

![User can go to his/her profile page](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/3.png)

<br>

### User can visit other users profile and follow/unfollow

![User can visit other users profile and follow/unfollow](https://github.com/riyajha2305/Instagram-Clone/blob/master/screenshots/4.png)



<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
## Open Source programs this repo has been part of
<a href="https://github.com/riyajha2305/Instagram-Clone"><img src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103"></a>


<div align="center">
<img src="https://media-exp1.licdn.com/dms/image/C560BAQEp7MUBpYE93g/company-logo_200_200/0/1608129179676?e=1651708800&v=beta&t=71R--Oo_R0AHY17EVdLFe50g8M5UAJ4vizvw--RaBAE" width="150px">
</div>

<div align="center">
    <a href="https://jwoc.tech/">JGEC Winter of Code</a>

</div>

<br>


<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

## Contribution Guidelines

 <br />

<summary><b>Never made an open source contribution before? Here's a quick rundown!</b></summary>
     <br />

*  Fork [this](https://github.com/riyajha2305/Instagram-Clone) repository.


*  Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/Instagram-Clone.git
```


* Navigate to the project directory :file_folder: .

```
cd clone-it
```


* Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/riyajha2305/Instagram-Clone.git 
```

<p align="right">(<a href="#top">back to top</a>)</p>


* Check the remotes for this repository.

```
git remote -v
```


* Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```


* Create a new branch.

```
git checkout -b <your_branch_name>
```


* Perfom your desired changes to the code base.


* Track your changes:heavy_check_mark: .

```
git add . 
```

<p align="right">(<a href="#top">back to top</a>)</p>

* Commit your changes .

```
git commit -m "Relevant message"
```


* Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```


* To create a pull request, click on `compare and pull requests`.


* Add appropriate title and description to your pull request explaining your changes and efforts done.


* Click on `Create Pull Request`.


* Congrats :exclamation: You have made a PR to the harshita2216/hello-jobs :boom: . Wait for your submission to be accepted and your PR to be merged.


* Wait for the pull request to be reviewed by a maintainer, Make changes to the pull request if the reviewing maintainer recommends them.


* Celebrate  🥳  your success after your pull request is merged!

<br>

<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->


## Contributors
<a href="https://github.com/riyajha2305/Instagram-Clone"><img src="https://forthebadge.com/images/badges/built-by-developers.svg"  ></a> 
<a href="https://github.com/riyajha2305/Instagram-Clone"><img src="https://forthebadge.com/images/badges/built-with-love.svg"  ></a> 
<a href="https://github.com/riyajha2305/Instagram-Clone"><img src="https://forthebadge.com/images/badges/built-with-swag.svg" ></a>   

<br>


Thanks to all the **people who contribute** 💜

![Contributors](https://contributors-img.web.app/image?repo=riyajha2305/Instagram-Clone)



<br>

<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

## Feedback

If you have any feedback or suggestions please reach out to Project - Maintainer.  
* [RiyaJha](https://github.com/riyajha2305) 
  
Or you can create a  <a href="https://github.com/riyajha2305/Instagram-Clone/issues">issue</a> and mention there , which new features can make this Project more good.

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<br>
  
<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<div align="center">

### Show some ❤️ by starring this awesome Repository!

</div>
  
  
<div id="Bottom"></div>


<br>
