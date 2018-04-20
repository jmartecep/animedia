const express = require("express");
const router = express.Router();

const models = require("../../models");

router.get("/shows", (req, res) => {
  models.Show.findAll().then(function (results) {
    results = JSON.stringify(results)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(results)
  }).catch(err => {
    console.log(err)
  })
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
    res.status(200).json({ results })
  })
});

module.exports = router;
