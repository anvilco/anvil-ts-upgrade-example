const TodoModel = require('./models/Todo')

const localStore = {}

class StoreException extends Error {
}

const store = {
  getAll() {
    return Object.values(localStore)
  },

  get(id) {
    const item = localStore?.[id]
    if (!item) {
      throw new StoreException('Cannot remove an item that does not exist')
    }
    return item
  },

  add(data) {
    const newItem = new TodoModel(data)
    localStore[newItem.id] = newItem
    return newItem
  },

  update(id, data) {
    let item = localStore?.[id]
    if (!item) {
      throw new StoreException('Cannot update an item that does not exist')
    }

    item = { ...item, ...data }
    localStore[id] = item

    return item
  },

  remove(id) {
    const item = localStore?.[id]
    if (!item) {
      throw new StoreException('Cannot remove an item that does not exist')
    }

    delete localStore[id]
    return localStore
  }
}

module.exports = store
