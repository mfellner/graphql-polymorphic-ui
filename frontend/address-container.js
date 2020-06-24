import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';

const HELLO_QUERY = gql`
  {
    hello
  }
`;

export default function AddressContainer() {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return data.hello;
}
