const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const models = require("../models");

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/artist/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    const controller = require("./controller");

    server.use("/api", require("./routes/shows"));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    models.sequelize.sync().then(function() {
      server.listen(3000, err => {
        if (err) throw err;
        console.log("> Ready on http://localhost:3000");
      });
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
