import { HOST, PORT } from './config';

const DOMAIN = `${HOST}:${PORT}` 

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
}).then(r => r.json());

getUsersButton.addEventListener('click', () => {
    resultBlock.innerText = 'fdf';
});

getUserButton.addEventListener('click', () => {
    
});

createUserButton.addEventListener('click', () => {
    
});

createActicleButton.addEventListener('click', () => {
    
});
