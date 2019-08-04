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
query GetUser($aId: ID!, $dId: ID!, $hasId: Boolean!) {
  author: user(id: $aId) {
      name
      email
    ...authorFields
  }
  director: user(id: $dId) {
      name
      email
    ... on Director {
      id @include(if: $hasId)
      money
      articles {
        title
      }
    }
  }
}

fragment authorFields on Author {
  id @include(if: $hasId)
}
`;

export const UserService = {
    GetUsers: ({ Component }) => (
        <Query query={getUsersQuery}>
            {({ loading, error, data }) => {
                if (loading) return <h1>loooooadiing....</h1>
                if (error) return <h1>eeeeerror.....</h1>

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
