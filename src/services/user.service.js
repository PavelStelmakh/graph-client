import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const getUsersQuery = gql`
query GetUsers {
  users {
    id
    name
    lastName
    email
    articles {
      title
    }
  }
}
`;

const getUserQuery = gql`
query GetUser($aId: ID!) {
  author: user(id: $aId) {
      name
      email
  }
}
`;

export const UserService = {
    GetUsers: ({ Component }) => (
        <Query query={getUsersQuery}>
            {({ loading, error, data, client }) => {
                if (loading) return <h1>loooooadiing....</h1>
                if (error) return <h1>eeeeerror.....</h1>

                client.writeData({ data });

                return <Component data={data} />;
            }}
        </Query>
    ),
    GetUser: ({ Component, variables }) => (
        <Query query={getUserQuery} variables={variables}>
            {({ loading, error, data }) => {
                if (loading) return <h1>loooooadiing....</h1>
                if (error) return <h1>eeeeerror.....</h1>

                return <Component data={data} />;
            }}
        </Query>
    ),
}
