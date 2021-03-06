const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fs = require("fs");

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
// Load env vars
dotenv.config({ path: './config/config.env' })

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))