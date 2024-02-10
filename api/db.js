const { Pool } = require('pg');
const { isDevMode } = require('./utils')


const config = isDevMode()?{
  user: 'admin',
  password: 'password',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'myapp'
}:{
    connectionString: process.env.POSTGRES_URL,
}


const pool = new Pool(config)


module.exports = {
  query: (text, params) => pool.query(text, params)
};


