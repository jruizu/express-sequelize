
const express = require('express');

// Config Server
const config = require('./server');

// Initialization Server Config
const app = config(express());

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    try {
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
});

module.exports = app;