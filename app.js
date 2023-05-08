const express = require("express");
const { format } = require("date-fns");
const app = express();

app.get("/", (request, response) => {
  let todayDate = new Date();
  todayDate.setTimezoneOffset(-330); // offset is in minutes
  let formattedDate = format(todayDate, "DD-MM-YYYY");
  response.send(formattedDate);
});

module.exports = app;
