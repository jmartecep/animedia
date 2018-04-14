"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use("Route");

Route.group(() => {
  Route.resource("shows", "ShowController");
  Route.get("shows/:id/episodes/", "ShowController.episodes");
  Route.get("shows/:id/episodes/:episode", "ShowController.episodesSingle");
  Route.get(
    "shows/:id/episodes/bulk/:episodes",
    "ShowController.episodesWhere"
  );
}).prefix("/api");

Route.any("*", ({ view }) => view.render("welcome"));
