const express = require('express')
const app = express()
const port = 420
const ip = '192.168.100.25'

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Esto se va a comunicar con la base de datos')
})

app.get('/barra', (req, res) => {
    res.send('esto con la base de datos de la barra')
})

app.listen(port, ip, () => {
  console.log(`Dead Memories server is running on ${ip}:${port}`)
})