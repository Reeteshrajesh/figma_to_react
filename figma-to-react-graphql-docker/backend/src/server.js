const { ApolloServer, gql } = require('apollo-server');

// Schema definition
const typeDefs = gql\`
  type Query {
    hello: String
  }
\`;

// Resolver
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
