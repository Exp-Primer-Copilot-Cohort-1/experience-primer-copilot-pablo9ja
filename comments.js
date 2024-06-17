// Create web server with Express.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store comments
var comments = [];

// Create a new comment
app.post('/comments', function(req, res) {
  // Get comment from request
  var comment = req.body.comment;
  // Store comment in array
  comments.push(comment);
  // Send response
  res.send('Comment added');
});

// Get all comments
app.get('/comments', function(req, res) {
  // Send comments as JSON
  res.json(comments);
});

// Start server
app.listen(3000);
console.log('Server is listening on port 3000');