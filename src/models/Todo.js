let NEXT_ID = 1

class Todo {
  constructor (data) {
    if (!data.id) {
      this.id = NEXT_ID
      NEXT_ID += 1
    } else {
      this.id = data.id
    }
    this.title = data.title
    this.description = data.description
  }
}


module.exports = Todo
