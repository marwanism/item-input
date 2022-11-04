const router = require("express").Router();
const Item = require("../models/Item");

// routes
router
  .post("/add/item", (req, res) => {
    const { item } = req.body;
    const newItem = new Item({ item });

    // save the todo
    newItem
      .save()
      .then(() => {
        console.log("Successfully added item!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get("/delete/item/:_id", (req, res) => {
    const { _id } = req.params;
    Item.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Item Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
