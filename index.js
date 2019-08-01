import { HOST, PORT } from './config';

const DOMAIN = `${HOST}:${PORT}/graphql`;

const getUsersButton = document.querySelector('.users');
const getUserButton = document.querySelector('.user-by-id');
const createUserButton = document.querySelector('.create-user');
const createActicleButton = document.querySelector('.create-article');

const resultBlock = document.querySelector('.result-block');
const graphql = (query, variables) => fetch(DOMAIN, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query,
        variables
    }),
}).then(r => r.json()).catch(e => console.log(e));

getUsersButton.addEventListener('click', () => {
    graphql(`
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
    `, {}).then(res => console.log(res));
    // resultBlock.innerText = 'fdf';
});

getUserButton.addEventListener('click', () => {
    graphql(`
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
    `, {
        "aId": "5d330792a99d852f28c6450a",
  "dId": "5d330a9a2eb9dc093089ec2e",
  "hasId": true
    }).then(res => console.log(res));
});

createUserButton.addEventListener('click', () => {
    
});

createActicleButton.addEventListener('click', () => {
    
});
