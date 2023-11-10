const express = require("express");
const app = express();
const { User } = require("../models/index");
const { Show } = require("../models/index");

const db = require("../db/connection");



const RoutesForUser = require("../routes/UserRoutes");
const RoutesForShows= require("../routes/ShowsRoutes");


app.use("/users", RoutesForUser);
app.use("/shows", RoutesForShows);




module.exports = app;