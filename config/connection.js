// // *********************************************************************************
// // CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// // *********************************************************************************
// // Dependencies

/* eslint-disable  no-unused-vars */
const mysql = require('mysql')
const ENV = process.env.NODE_ENV || 'development'
/* eslint-enable  no-unused-vars */

// // Creates mySQL connection using Knex.js
// // below is the original line of code, commented out
/* eslint-disable  no-undef */
const Knex = require('knex')(require('../knexfile')[ENV])
/* eslint-enable  no-undef */
// /* below is the edited line of code, removing [ENV] because I didn't just want to
// disable that linter rule */
// //const Knex = require('knex')(require('../knexfile'))

// // Exports the connection for other files to use
module.exports = Knex
