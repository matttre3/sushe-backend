const { Pool } = require('pg');
const { isDevMode } = require('./utils')


const config = isDevMode()?{
  user: 'admin',
  password: 'password',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'myapp'
}:{
  user: 'default',
  password: 'jKZEJNap15rX',
  host: 'ep-shy-bonus-a4wq96h7.us-east-1.aws.neon.tech',
  port: 5432, // default Postgres port
  database: 'verceldb'
}

const pool = new Pool(config)


module.exports = {
  query: (text, params) => pool.query(text, params)
};


