require('dotenv/config');

import { Response, Request } from 'express';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE']);
  res.header('Access-Control-Allow-Headers', ['Content-Type', 'Authorization', 'id']);

  app.use(cors());
  next();
});

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('DataBase connection'); 
  }).catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

module.exports = app;