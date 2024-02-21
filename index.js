const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for GET requests to /ping
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
