const express = require('express')
const { isDevMode } = require('./utils')
const cors = require('cors')
const db = require('./db');
const port = 3000

var corsOptions = {
  origin: 'https://sushe-app.vercel.app',
  optionsSuccessStatus: 200
}

const app = express()
app.use(cors(corsOptions))

app.get("/api/ciola", async (req, res) => {
  const result = await db.query(`SELECT * FROM ciola`)
  res.json(
    result.rows
  );
})

if (isDevMode()) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app

