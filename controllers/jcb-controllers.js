const express = require("express");
const router = express.Router();

// Routes
// =========================================================
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/forsale", function (req, res) {
  res.render("forsale");
});

router.get("/rentals", function (req, res) {
  res.render("rentals");
});

module.exports = router;
