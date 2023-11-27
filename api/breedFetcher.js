const request = require('request');

const breedFetcher = function(breedName) {
  // API endpoint URL
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Making the request to TheCatAPI
  request(apiUrl, (error, response, body) => {
    if (error) {
      // Handle request errors
      console.error(`Error fetching data: ${error}`);
      return;
    }

    // Parse the JSON response
    const data = JSON.parse(body);

    // Check if breed is found
    if (data.length === 0) {
      console.log(`Breed "${breedName}" not found.`);
    } else {
      // Print breed description
      console.log(data[0].description);
    }
  });
};

// Get breed name from command-line arguments, default to "Siberian"
const breedName = process.argv[2] || "Siberian";

// Call the breedFetcher function
breedFetcher(breedName);

