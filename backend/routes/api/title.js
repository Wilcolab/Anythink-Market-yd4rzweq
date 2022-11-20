var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of tags
router.get("/:title", function (req, res) {
  const title = req.params.title;
  const result = Item.filter((item) => item.title.includes(title) == true);
  res.status(200).json({
    result,
  });
});

module.exports = router;
