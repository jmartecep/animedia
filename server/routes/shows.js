const express = require("express");
const router = express.Router();

const models = require("../../models");

router.get("/shows", (req, res) => {
  models.Show.findAll().then(function (results) {
    res.status(200).json(results);
  });
});

router.get('/shows/:id', (req, res) => {
  models.Show.findAll({
    where: {
      id: req.params.id
    }
  }).then((results) => {
    res.status(200).json(results)
  })
})

router.get("/shows/:id/episodes", (req, res) => {
  models.Episode.findAll({
    where: {
      showId: req.params.id
    }
  }).then(results => {
    res.status(200).json(results)
  })
});

module.exports = router;
