const eventModel = require("../Models/event");
const responseResult = require("../Helpers/formResponse");

const eventController = {
  //CREATE METHOD
  //post with upload file
  addEvent: (req, res) => {
    eventModel
      .addEvent(req.body)
      .then((result) => {
        responseResult.success(res, req.body);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //READ METHOD
  searchAndPaginate: (req, res) => {
    eventModel
      .searchAndPaginate(req.query)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
};
module.exports = eventController;
