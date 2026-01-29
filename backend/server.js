require('dotenv').config()
require('./db/connection')
const express = require('express')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT
const productRoutes = require('./routes/productRoutes')


app.use(express.urlencoded());
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(productRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})