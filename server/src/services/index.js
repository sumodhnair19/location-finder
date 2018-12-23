const profiles = require('./profiles/profiles.service.js');
const users = require('./users/users.service.js');
const apartments = require('./apartments/apartments.service.js');
const locations = require('./locations/locations.service.js');
const graphql = require('./graphql/graphql.service.js');

module.exports = function () {
  const app = this;
  app.configure(profiles);
  app.configure(users);
  app.configure(apartments);
  app.configure(locations);
  app.configure(graphql);
};
