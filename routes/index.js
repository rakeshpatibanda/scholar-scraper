var express = require('express');
var router = express.Router();
let scholar = require('google-scholar-extended');

var searchValue = `"thematic analysis" AND "games" AND "HCI" AND "game design"`;
var result = {};

/* GET home page. */
router.get('/', function(req, res, next) {

  scholar.search(searchValue)
    .then(resultsObj => {
      result = resultsObj;
      console.log(result);
  })

  res.render('index', 
    {  
       title: 'Express', 
       queryResult: result 
    });
});

module.exports = router;
