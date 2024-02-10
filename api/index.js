const express = require('express')
const cors = require('cors')
const { sql } = require("@vercel/postgres");
const { Pool } = require('pg');

const pool = new Pool({
  user: 'default',
  host: 'ep-shy-bonus-a4wq96h7-pooler.us-east-1.aws.neon.tech',
  database: 'verceldb',
  password: 'jKZEJNap15rX',
  port: 3001, 
});

var corsOptions = {
  origin: 'https://sushe-app.vercel.app',
  optionsSuccessStatus: 200 
}

const app = express()
app.use(cors(corsOptions))
app.get("/api/ciola",(req,res) => {
  res.json({
    nome: 'Matteo',
    cognome: 'Romano'
});
})

app.get("/api/crea-tabella-utenti", async (req, res) => {
  const client = await pool.connect();

  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        user VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `;
    
    await client.query(createTableQuery);
    res.json({ message: 'Tabella utenti creata con successo' });
  } catch (error) {
    console.error('Errore durante la creazione della tabella:', error);
    res.status(500).json({ error: 'Errore interno del server' });
  } finally {
    client.release();
  }
});



module.exports = app