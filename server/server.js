const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const { typeDefs, resolvers } = require('./graphql');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const webpackCompiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(webpackCompiler, {
    // webpack-dev-middleware options
  }),
);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`),
);
