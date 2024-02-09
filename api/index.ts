
import express from 'express'

const app = express()
app.get("/api/ciola",(req,res) => {
  res.json({
    nome: 'Matteo',
    cognome: 'Romano'
});
})

module.exports = app