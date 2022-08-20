require('dotenv').config();
const express = require('express');
const UsersRoutes = require('./routes/user');
const PlacesRoutes = require('./routes/places');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', UsersRoutes);
app.use('/places', PlacesRoutes);



module.exports = app;