const express = require('express')
const cors = require('cors')

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