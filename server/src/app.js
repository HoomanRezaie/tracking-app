const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.get('/status', (req, res) => {
    res.send({
        message: 'Dorood Giti~'
    })
})


app.post('/register', (req, res) => {
    res.send(`Dorood ${req.body.email} | Uw gebruiker is toegevoegd! | Ga verder.!`)
})





app.listen(process.env.PORT || 8081)