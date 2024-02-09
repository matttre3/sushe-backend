
import express from 'express'
import cors from 'cors'


var corsOptions = {
  origin: 'sushe-backend-p9to.vercel.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
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