const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const connection = 'mysql://netuser:netpass@localhost:3306/librarycreateConnection(process.env.SQL_SERVER)';
module.exports = connection;