require('dotenv').config();
const { Pool } = require('pg');

module.exports = new Pool({
    host:'localhost',
    user:`${process.env.ROLE_NAME}`,
    database:'inventory_app',
    password:`${process.env.ROLE_PASSWORD}`,
    port:5432
})
