exports.shows = app => (req, res) => {
  const actualPage = "/post";
  const queryParams = { id: req.params.id };
  app.render(req, res, actualPage, queryParams);
};
