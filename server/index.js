const express = require('express');
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

app.listen(3030, () => {
  console.log('app is up and ruuning on port 3030');
});
