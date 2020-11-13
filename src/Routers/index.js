//Package import
const express = require("express");
//Filepath import
const eventRouter = require("./event");
//Declaration
const indexRouter = express.Router();

//Implementation
//PRIVATE ROUTE
indexRouter.use("/event", eventRouter);

//Export
module.exports = indexRouter;
