var express = require("express");
var router = express.Router();
let scholar = require("google-scholar-extended");

var result = {};

/* GET home page. */
router.get("/", async function(req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

router.post("/searchScholarButton", async function(req, res, next) {
  var searchValue = req.body.searchString;

  console.log(searchValue);

  await scholar.search(searchValue)
    .then(resultsObj => {
      result = resultsObj;
      console.log(result);
    });

  res.send(result);

});

module.exports = router;