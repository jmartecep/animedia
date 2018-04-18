const express = require("express");
const router = express.Router();

const models = require("../../models");

router.get("/shows", (req, res) => {
  models.Show.findAll().then(function(results) {
    res.status(200).json(results);
  });
});

router.get("/artist/:id", (req, res) => {
  async.auto(
    {
      artist: function(callback) {
        request
          .get("https://api.spotify.com/v1/artists/" + req.params.id)
          .end((err, response) => callback(err, response.body));
      },
      albums: [
        "artist",
        (results, callback) => {
          request
            .get(
              "https://api.spotify.com/v1/artists/" + req.params.id + "/albums"
            )
            .query({
              album_type: "album",
              limit: req.query.limit,
              offset: req.query.offset
            })
            .end((err, response) => {
              callback(err, {
                items: response.body.items,
                limit: response.body.limit,
                offset: response.body.offset,
                total: response.body.total
              });
            });
        }
      ]
    },
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json(results);
    }
  );
});

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
