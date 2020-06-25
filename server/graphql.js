const { gql } = require('apollo-server-express');

const users = [
  {
    id: 'eu',
    address: {
      addressFirstLine: 'Alexanderplatz, 10 Deutschland GmbH',
      addressSecondLine: '10110, Berlin, GERMANY',
    },
  },
  {
    id: 'us',
    address: {
      street: '256 Silicon Boulevard',
      addressFirstLine: 'Computers Inc.',
      addressSecondLine: 'Seattle, WA 151294',
      country: 'USA',
    },
  },
];

const typeDefs = gql`
  type EuUserAddress {
    addressFirstLine: String
    addressSecondLine: String
  }

  type UsUserAddress {
    street: String
    addressFirstLine: String
    addressSecondLine: String
    country: String
  }

  union UserAddress = EuUserAddress | UsUserAddress

  type User {
    id: ID!
    address: UserAddress
  }

  type Query {
    user(id: ID): User
  }
`;

const resolvers = {
  UserAddress: {
    __resolveType(obj, context, info) {
      if (obj.street || obj.country) {
        return 'UsUserAddress';
      }
      return 'EuUserAddress';
    },
  },
  Query: {
    user(obj, { id }) {
      return users.find(user => user.id === id);
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
