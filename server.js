// server.js
// where your node app starts

// init project
const express = require('express');
const http = require('http');
const app = express();

// Get our API routes
const api = require('./routes/routes');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Route to the routes :D
app.use('/', api);

// Create the server and fire it up
const server = http.createServer(app);
const port = process.env.PORT || '3000';
app.set('port', port);
server.listen(port, () => console.log(`API running on localhost:${port}`));