const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const apiRouter = require('./routes/api'); 
const cors = require('cors'); 


// parses JSON from incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

// define route handlers
app.use('/api', apiRouter, (req, res) => {
return res.status(200).send(res.locals.plants)
});


// catch-all error handler
app.get('*', (req, res) => {
  return res.status(404).send('This is not the page you\'re looking for...')})

// Global error handling middleware
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  

  module.exports = app;
