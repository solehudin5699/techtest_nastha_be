const dbConnect = require("../Configs/dbConnect");

const eventModel = {
  //CREATE METHOD

  addEvent: (body) => {
    return new Promise((resolve, reject) => {
      let postQuery = `INSERT INTO event SET ?`;
      dbConnect.query(postQuery, body, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  },

  //READ METHOD

  searchAndPaginate: (query) => {
    return new Promise((resolve, reject) => {
      const { title, orderBy, page, limit } = query;
      const offset = (page - 1) * limit;
      // const checkData = `SELECT * FROM event`;
      let queryString = `SELECT * FROM event WHERE event.title LIKE '%${title}%' ORDER BY event.id ${orderBy} LIMIT ${Number(
        limit
      )} OFFSET ${offset}`;

      dbConnect.query(queryString, (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
};

module.exports = eventModel;
