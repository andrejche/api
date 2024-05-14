// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // Choose any port you prefer

// Define a route that returns "true"
app.get('/api', (req, res) => {
  res.send('true');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
