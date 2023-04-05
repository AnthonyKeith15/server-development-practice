'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

app.use(cors());


// Add middleware functions
app.use(logger);
app.use(validator);

// Add person route handlers
app.get('/person', (req, res) => {
  const name = req.query.name;
  res.json({ name: name });
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