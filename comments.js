// Create web server
// 1. Import express
const express = require('express');
// 2. Create a server
const app = express();
// 3. Listen to port 3000
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
// 4. Create an API endpoint
app.get('/comments', (req, res) => {
  res.send('This is comments page');
});
// 5. Create another API endpoint
app.get('/comments/new', (req, res) => {
  res.send('This is new comments page');
});