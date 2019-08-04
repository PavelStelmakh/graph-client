import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import logo from './logo.svg';
import { UserService } from './services/user.service';
import './App.css';

const mutation = gql`
input User {
  email: String!
  name: String!
  lastName: String!
  password: String!
}
mutation CreateUser($user: User) {
  createUser(user: $user) {
    id
    name
    lastName
    email
  }
}
`;

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mutation mutation={mutation}>
          {() => (
            <form></form>
          )}
        </Mutation>
        {/* <UserService.GetUser Component={({ data: { author, director } }) => (
          <Fragment>
            <h2>{author.email}</h2>
            <h3>{`${author.name}`}</h3>
            <p>{author.id}</p>
            <h2>{director.email}</h2>
            <h3>{`${director.name} ${director.money}`}</h3>
          </Fragment>
        )} variables={{
          "aId": "5d330792a99d852f28c6450a",
          "dId": "5d330a9a2eb9dc093089ec2e",
          "hasId": true
        }} /> */}
        {/* <UserService.GetUsers Component={({ data }) => data.users.map(user => (
          <Fragment>
            <h2>{user.email}</h2>
            <h3>{`${user.name} ${user.lastName}`}</h3>
            <p>{user.id}</p>
          </Fragment>    
        ))} /> */}
      </header>
    </div>
  );
}

// export const ConnectedApp = () => <UserService.GetUsers Component={App} />;
