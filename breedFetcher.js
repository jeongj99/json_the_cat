const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, _, body) => {
    if (error !== null) {
      body = null;
      callback(error, body);
      process.exit();
    }
    if (body === '[]') {
      error = 'Invalid breed name';
      body = null;
    } else {
      body = JSON.parse(body)[0].description;
    }
    callback(error, body);
  });
};

module.exports = { fetchBreedDescription };