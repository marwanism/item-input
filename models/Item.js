const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Item", ItemSchema);
