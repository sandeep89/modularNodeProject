var express = require('express');
var router = express.Router();
var services = require("./services");
/* GET users listing. */
router.get('/', function(req, res, next) {
    services.get(function(err, data){
        res.send(data);
    })
});

router.post('/', function(req, res, next){
    var data = req.body? req.body : {};
    services.save(data.fname, data.lname, data.age);
    res.send("User created successfully");
})

module.exports = router;
