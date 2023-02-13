var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var bokModel = require("../models/bokModel.js");

//req och res här är request- respektive response-objekten
router.get("/", function (req, res, next) {
  //find är Mongoose funktion. err innehåller eventuellt fel, annars kommer resultatet att finnas i “bilarna”
  bokModel.find(function (err, bockerna) {
    if (err) return next(err);
    else {
      //Om det inte uppstår fel så skicka bilarna i jsonformat
      res.json(bockerna);
    }
  });
});

module.exports = router;
