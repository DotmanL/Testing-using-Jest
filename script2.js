//Asynchrounous testing

const fetch = require('node-fetch');

//promises
const getPeoplePromise = fetch => {
    return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
        return{
            count: data.count,
            results: data.results
        }
    })
}

//async await
const getPeople = async fetch => {
 const getRequest = await fetch('https://swapi.co/api/people')
    const data = await getRequest.json();
        return{
            count: data.count,
            results: data.results
        }
}

module.exports = {
    getPeople,
    getPeoplePromise
}
