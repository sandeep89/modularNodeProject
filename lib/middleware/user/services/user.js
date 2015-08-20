var userService = module.exports;
var userModel = require("../model/user");


userService.save = function (fname, lname, age) {
    var user = new userModel({fname: fname, lname: lname, age: age})
    user.save();
}

userService.get = function(cb){
    userModel.get(cb);
}