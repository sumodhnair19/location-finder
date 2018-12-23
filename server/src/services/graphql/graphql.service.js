
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { get } = require('lodash');

import Resolvers from  './graphql.resolvers.js';
import Schema from './graphql.schema.js';

module.exports = function () {
  const app = this;

  const schema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(app)
  });

  app.use('/graphql', bodyParser.json(), graphqlExpress((req) => {
    return {
      schema: schema,
      context: req.feathers,
      formatResponse: (response, { context }) => {
        response.data.meta = context.meta;
        return Object.assign({}, response);
      },
      formatError: (err) =>  {
        const status = get(err, 'originalError.code', 500);
        return {
          message: err.message,
          status
        };
      }
    };
  }));

  app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};
