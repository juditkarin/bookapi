var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var bokModel = require("../models/bokModel.js");

//req och res här är request- respektive response-objekten
router.get("/", function (req, res, next) {
  //find är Mongoose funktion. err innehåller eventuellt fel, annars kommer resultatet att finnas i “bockerna"
  bokModel.find(function (err, bockerna) {
    if (err) return next(err);
    else {
      //Om det inte uppstår fel så skickad bockerna i jsonformat
      res.json(bockerna);
    }
  });
});

router.get("/:id", function (req, res, next) {
  bokModel.findById(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post("/", function (req, res, next) {
  //req.body är innehållet i requestobjektet, dvs en json med en bil
  bokModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post); //Här skickar vi tillbaka datan vi skickar in i databasen, om skrivningen gick bra
  });
});

router.delete("/:id", function (req, res, next) {
  bokModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.patch("/:id", function (req, res, next) {
  bokModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;

