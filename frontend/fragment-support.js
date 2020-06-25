import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

/**
 * @see https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces
 */
async function introspectSchema() {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variables: {},
      query: `
        {
          __schema {
            types {
              kind
              name
              possibleTypes {
                name
              }
            }
          }
        }
      `,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText} (${response.status})`);
  }
  const { data } = await response.json();

  // We're filtering out any type information unrelated to unions or interfaces.
  const filteredData = data.__schema.types.filter(
    type => type.possibleTypes !== null,
  );
  data.__schema.types = filteredData;

  return data;
}

export async function createFragmentMatcher() {
  const introspectionQueryResultData = await introspectSchema();

  return new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
  });
}
