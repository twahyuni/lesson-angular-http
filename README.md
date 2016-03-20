# Lesson: Angular HTTP

In this lesson we will implement an Angular frontend that can communicate with a Web API. The Web API is set up as a Node.js application using MongoDB as the database.

## Set up

  1. Fork and clone
  1. **api**
    1. Go to the `api` folder
    1. Run `npm install` to install the required modules
  1. **presidentsapp**
    1. Go to the `presidentsapp` folder
    1. Run `bower install --save`


## How to run

Before you start the application, please start your local MongoDB first (use `mongod` or whatever tools you have).

  1. Go to the `api` folder.
  1. Run `npm start` to run the web app.
  1. Test: Open Chrome and go to `http://localhost:3000/presidents`, you should receive an empty collection of `presidents`.
  1. Finally, use Chrome to open `presidentsapp/index.html`. By default, you should see 4 hardcoded presidents.

<img width="752"  src="https://cloud.githubusercontent.com/assets/25366/9017871/7cf4a79e-378e-11e5-85d8-d018f0a7ab21.png">

