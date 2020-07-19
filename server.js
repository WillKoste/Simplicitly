const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');

const app = express();

connectDB();

app.use(cors());

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use('/api/customers', require('./routes/customers'));

if(process.env.NODE_ENV === 'production' || 'development'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Express server running on port ${port}, in ${process.env.NODE_ENV} mode`.cyan.underline.bold)
});