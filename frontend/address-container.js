import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

const HELLO_QUERY = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      address {
        ... on EuUserAddress {
          addressFirstLine
          addressSecondLine
        }
        ... on UsUserAddress {
          street
          addressFirstLine
          addressSecondLine
          country
        }
      }
    }
  }
`;

export default function AddressContainer() {
  const id = 'eu';
  const { loading, error, data } = useQuery(HELLO_QUERY, { variables: { id } });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <pre>
      <code>{JSON.stringify(data.user, null, 2)}</code>
    </pre>
  );
}
