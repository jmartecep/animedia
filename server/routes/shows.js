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

router.get("/album/:id", (req, res) => {
  request
    .get("https://api.spotify.com/v1/albums/" + req.params.id)
    .end((err, response) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json(response.body);
    });
});

module.exports = router;
