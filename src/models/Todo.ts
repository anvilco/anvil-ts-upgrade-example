let NEXT_ID = 1

export interface TodoData {
    id?: number,
    title?: string,
    description?: string,
}

class Todo {
  id: number
  title: string | undefined
  description: string | undefined

  constructor (data: TodoData) {
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


export default Todo
