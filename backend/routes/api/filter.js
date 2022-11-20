var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of tags
router.get("/", function (req, res, next) {
  Item.filter((item) => item.title == title)
    .then(function (Item) {
      return res.json({ Item });
    })
    .catch(next);
});

module.exports = router;
