'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

app.use(cors());


// Add middleware functions

app.use(logger);


// Add person route handlers
app.get('/person', (req, res, next) => {
  const name = req.query.name;
  if (name) {
    res.status(200).json({ name: name });
  }

  if (!name) {
    // If the name parameter is not provided, send back a 400 Bad Request response
    res.status(400).json({ error: 'Name parameter is required' });
  } else { 
    // If the name parameter is not a valid alpha string, send back a 400 Bad Request response
    res.status(400).json({ error: 'Invalid name parameter' });
  } 
});

// Error-handling middleware
app.use(error404);
app.use(error500);

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log('Server is listening');
  }),
};