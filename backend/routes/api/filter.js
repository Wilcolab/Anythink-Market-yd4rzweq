var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of titles
router.get("/:title", function (req, res, next) {
  const title = req.params.title;

  Item.filter((Item) => Item.title == title)
    .then(function (titles) {
      return res.json({ titles: titles });
    })
    .catch(next);
});

module.exports = router;
