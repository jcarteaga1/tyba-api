const express = require('express');
const UsersRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', UsersRoutes);


module.exports = app;