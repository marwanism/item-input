const router = require("express").Router()
const Item = require("../models/Item");

// App Routes
router.get("/", async(req, res) => {
    const allItem = await Item.find();
    res.render("index", {item: allItem})
})


module.exports = router;
