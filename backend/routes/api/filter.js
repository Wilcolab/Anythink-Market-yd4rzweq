var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of titles
router.get("/", function (req, res, next) {
  Item.find()
    .distinct("title")
    .then(function (titles) {
      return res.json({ titles: titles });
    })
    .catch(next);
});

module.exports = router;
