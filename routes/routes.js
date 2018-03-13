const express = require('express');
const router = express.Router();

// modules this api provides routing for
const requestparser = require('../request-header/parser');

// Request Header Microservice
// (note, catching a variety of urls and routing them to the same place)
router.route('/').get(requestparser.parse);


// If it's not an api request, display the index page (found in frontend)


module.exports = router;