const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = 8080
require('dotenv').config()

const userRoutes = require('./routes/user.routes')

app.use(morgan('dev'))
app.use(express.json()) 

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mxtdupi.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))

  //route mid
app.use('/user', userRoutes)
 
app.get('/', (req, res) => {
  res.send('Hello Worldss!')
})


app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})