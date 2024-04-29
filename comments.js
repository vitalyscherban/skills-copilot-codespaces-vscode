// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

// Import the http module
const http = require('http');

// Import the fs module
const fs = require('fs');

// Create the web server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'text/html');

  // Read the comments.html file
  fs.readFile('./comments.html', (err, data) => {
    // Check for errors
    if (err) {
      // Log the error
      console.error(err);

      // Set the response status code
      res.statusCode = 500;

      // Set the response body
      res.end('Internal Server Error');

      // Return early
      return;
    }

    // Set the response body
    res.end(data);
  });
});

// Start the web server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: comments.html
// Create a web page that displays comments
// Create a web page called comments
