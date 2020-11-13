const express = require("express");
const eventRouter = express.Router();
const eventController = require("../Controllers/event");
const uploadController = require("../Helpers/Middleware/uploadFile");

//Create method
//post with URL image
eventRouter.post("/", uploadController.singleUpload, eventController.addEvent);

//Read method
eventRouter.get("/search", eventController.searchAndPaginate);

//export
module.exports = eventRouter;
