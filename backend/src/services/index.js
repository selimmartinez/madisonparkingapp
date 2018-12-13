// eslint-disable-next-line no-unused-vars
const garages = require('./garages/garages.service.js');
const floors = require('./students/floors.service.js');
const parkingspacess = require('./parkingspaces/subjects.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(garages);
  app.configure(floors);
  app.configure(parkingspaces);
};