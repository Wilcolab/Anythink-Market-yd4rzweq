var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of tags
router.get("/", function (req, res, next) {
  Item.find()
    .distinct("filter")
    .then(function (filters) {
      return res.json({ filters: filters });
    })
    .catch(next);
});

module.exports = router;