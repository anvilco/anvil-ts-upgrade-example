
const app = require('./app')

const LISTEN_PORT = 4000
app.listen(LISTEN_PORT, function () {
  console.log(`Listening to port ${LISTEN_PORT}`)
})
