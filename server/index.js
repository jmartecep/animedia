const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV == "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000

const models = require("../models");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use("/api", require("./routes/shows"));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    models.sequelize.sync().then(function () {
      server.listen(PORT, err => {
        if (err) throw err;
        console.log("> Ready on http://localhost");
      });
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
