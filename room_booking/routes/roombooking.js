var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
console.log("First router entered")
var room=1;
var adults=1;
var childrens=0;
res.render('bookroom',{
	rooms:room,
adults:adults,
childrens:childrens,
});

});



module.exports = router;