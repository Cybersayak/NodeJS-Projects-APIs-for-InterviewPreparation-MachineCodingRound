const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');  
const cors = require('cors');

const routes= require('./routes');
const { errorHandler } = require('./middlewares');
const {logger} = require('./utils');

const app = express();

// Security middleware 
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
        }
    }
}));

// CORS Configuration
app.use(cors({
    origin: process.env.AllOWED_ORIGINS ? split(',') || ['http://localhost:3000' ],
    credentials: true,
}));
    
