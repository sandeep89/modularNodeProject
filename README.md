# modularNodeProject
This project displays a working example of how to create a pluggable module for your custom project

## Pre-requisite
- Node, latest version
- Mongodb running on localhost, port 27017

To start the project use below commands 
```
npm install

node bin/www
```

## Project description

###Modules
One of the standard way of organizing node code is writing all your project related code in lib and exposing each module as a middleware

In this project, we have created user as one of the module which exposes below urls

```
curl -XGET http://localhost:3000/users
```
This call will list all the available users in the system

```
curl -XPOST http://localhost:3000/users -d '{fname:"Sandeeep", lname:"Pandey", age:18}'
```

This request will create a new user for system.

###Including module
The user module can be simply added in the application using below code 

```
var users = require('./lib/middleware/user');
app.use('/users', users);
```

Feel free to ask any questions, email:s4n989@gmail.com, skype : s4n989
