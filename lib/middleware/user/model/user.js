var db = require("./db");

var user = module.exports = db.model('User', {fname: String, lname: String, age: Number});

user.save=function(cb){
    console.log("Saving data ", this);

    this.save(cb);
}

user.get= function (cb) {
    this.find({},cb);
}
