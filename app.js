const express = require('express');
const app = express()
var cors = require('cors')

app.use(cors())
const allRoutes = require('./routes');

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})