const request = require('request');
const breed = (process.argv)[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error !== null) {
    console.log("404: Page not found\nThe page you are looking for doesn't exist or an other error occured.");
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
    process.exit();
  }
  console.log(data[0].description);
});