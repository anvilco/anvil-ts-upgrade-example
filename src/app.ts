import store from './store'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (_, res) {
  res.send('Hello')
})

app.route('/items')
  .get(function (_, res) {
    res.json(store.getAll())
  })
  .post(function (req, res) {
    // Take user input directly and use it as an item.
    // This is definitely not ideal and all user input should be sanitized
    // and validated before being used.
    const newItem = store.add(req.body)

    // Send back the updated state
    res.json(newItem)
  })

app.route('/items/:item_id')
  .get(function (req, res) {
    const itemId = parseInt(req.params.item_id, 10)
    const item = store.get(itemId)
    res.json(item)
  })
  .delete(function (req, res) {
    const itemId = parseInt(req.params.item_id, 10)
    const newStore = store.remove(itemId)
    res.json(newStore)
  })

export default app
