import React, { Fragment } from 'react';
import logo from './logo.svg';
import { UserService } from './services/user.service';
import { useApolloClient } from '@apollo/react-hooks';
import './App.css';

const Component = ({ data: { author, director } }, client) => {
  const somedata = useApolloClient();
  console.log(somedata);
  return (
    <Fragment>
      <h2>{author.email}</h2>
      <h3>{`${author.name}`}</h3>
      <p>{author.id}</p>
      <h2>{director.email}</h2>
      <h3>{`${director.name} ${director.money}`}</h3>
    </Fragment>
  )
}

export const App = () => {
  // let value;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Mutation mutation={mutation}>
          {(sendData, { data }) => data
          ? (
            <Fragment>
              <h2>{data.createUser.email}</h2>
              <h3>{`${data.createUser.name}`}</h3>
            </Fragment>
          )
          : (
            <form onSubmit={(e) => {
              e.preventDefault();
              sendData({ variables: {
                user: {
                  email: value.value,
                  name: value.value,
                  lastName: value.value,
                  password: value.value,
                }
              } });
            }}>
              <input ref={node => {value = node}} />
              <button>send</button>
            </form>
          )}
        </Mutation> */}
        <UserService.GetUser Component={Component} variables={{
          "aId": "5d330792a99d852f28c6450a",
          "dId": "5d330a9a2eb9dc093089ec2e",
          "hasId": true
        }} />
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
