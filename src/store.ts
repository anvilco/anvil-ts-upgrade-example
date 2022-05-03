import Todo, { TodoData } from './models/Todo'

interface LocalAppStore {
  [key: number]: Todo
}

const localStore: LocalAppStore = {}

class StoreException extends Error {
}

const store = {
  getAll() {
    return Object.values(localStore)
  },

  get(id: number) {
    const item = localStore?.[id]
    if (!item) {
      throw new StoreException('Cannot remove an item that does not exist')
    }
    return item
  },

  add(data: TodoData) {
    const newItem = new Todo(data)
    localStore[newItem.id] = newItem
    return newItem
  },

  update(id: number, data: TodoData) {
    let item = localStore?.[id]
    if (!item) {
      throw new StoreException('Cannot update an item that does not exist')
    }

    item = { ...item, ...data }
    localStore[id] = item

    return item
  },

  remove(id: number) {
    const item = localStore?.[id]
    if (!item) {
      throw new StoreException('Cannot remove an item that does not exist')
    }

    delete localStore[id]
    return localStore
  },

  clear() {
    for (let k in localStore) {
      delete localStore[k]
    }
  }
}

export default store
