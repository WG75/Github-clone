const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser());

const apiRoutes = require('./routes');

app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  // serve static files
  app.use(express.static(path.join(__dirname, '../build')));
  // handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

const mongoDB = 'mongodb://127.0.0.1/maersk';

mongoose.connect(
  mongoDB,
  { useNewUrlParser: true },
);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', err => console.error('MongoDB connection error:', err));

app.listen(3030, () => {
  console.log('app is up and ruuning on port 3030');
});
