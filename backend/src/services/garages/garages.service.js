// Initializes the `students` service on path `/students`
const createService = require('feathers-knex');
const createModel = require('../../models/parkingspaces.model');
const hooks = require('./parkingspaces.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'parkingspaces',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/parkingspaces', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('');parkingspaces

  service.hooks(hooks);
};