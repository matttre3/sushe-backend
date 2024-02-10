const express = require('express')
const cors = require('cors')
const sql = require('@vercel/postgre')
const { Pool } = require('pg');

// Configura il pool di connessioni
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false, // Assicurati di impostare questo valore correttamente in produzione
  },
});

// Test della connessione
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Errore durante la connessione al database:', err);
  }
  console.log('Connessione al database avvenuta con successo');

  // Esegui query o altre operazioni qui

  // Rilascia la connessione
  release();
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

module.exports = app