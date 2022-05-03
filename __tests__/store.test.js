const store = require('../src/store')

describe('store', function () {
  beforeEach(function () {
    store.clear()
  })

  describe('get', function () {
    it('works', function () {
      const item = store.add({ title: 'Test', description: 'get' })
      expect(store.get(item.id)).toStrictEqual(item)
    })
  })

  describe('getAll', function () {
    beforeEach(function () {
      expect(store.getAll()).toHaveLength(0)
      expect(store.getAll()).toStrictEqual([])
    })

    it('works', function () {
      store.add({ title: 'Test', description: 'getAll' })
      expect(store.getAll()).toHaveLength(1)
    })
  })

  describe('add', function () {
    it('works', function () {
      expect(store.getAll()).toHaveLength(0)
      const item = store.add({ title: 'Test', description: 'add' })
      expect(item.description).toEqual('add')
      expect(item.title).toEqual('Test')
      expect(store.getAll()).toHaveLength(1)
    })
  })

  describe('update', function() {
    it('works', function () {
      const item = store.add({ title: 'Test', description: 'update' })
      expect(store.get(item.id)).toStrictEqual(item)

      const updatedItem = store.update(item.id, { description: 'new update' })
      expect(updatedItem.id).toEqual(item.id)
      expect(updatedItem.title).toEqual('Test')
      expect(updatedItem.description).toEqual('new update')
    })
  })

  describe('remove', function() {
    it('works', function () {
      expect(store.getAll()).toHaveLength(0)
      const item = store.add({ title: 'Test', description: 'delete' })
      expect(store.getAll()).toHaveLength(1)
      store.remove(item.id)
      expect(store.getAll()).toHaveLength(0)
    })
  })
})
