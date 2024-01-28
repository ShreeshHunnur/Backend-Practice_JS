require('dotenv').config()
const express = require('express')

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req,res) => {
    res.send('github.com/users/ShreeshHunnur')
})

app.get('/login', (req , res) => {
    res.send('<h1>Please Login at HeySiri.AI</h1>')
})

app.get("/youtube", (req , res) =>{
    res.send("<h2>Chai aur Code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})