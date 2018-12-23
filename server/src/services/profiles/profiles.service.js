const createService = require('feathers-mongodb');
const hooks = require('./profiles.hooks');

module.exports = function () {
  const app = this;
  const mongoClient = app.get('mongoClient');

  app.use('/profiles', createService({}));
  const service = app.service('profiles');

  mongoClient.then(db => {
    service.Model = db.collection('profiles');
  });

  service.hooks(hooks);
};
