const STORAGE_NAME = 'todo_webpack'
const EMPTY_LIST = '{"records": []}'

export default Ember.Service.extend({

  list() {
    return JSON.parse(localStorage.getItem(STORAGE_NAME) || EMPTY_LIST)
  },

  create(data) {
    var newTodo = Object.assign(data, {id: this.uuid(), isCompleted: false})
    var todos = this.list()
    todos.records.push(newTodo)
    this.saveList(todos)
  },

  update(updatedTodo) {
    var todos = this.list()
    todos.records.forEach((t) => {
      if (t.id === updatedTodo.id) {
        Object.assign(t, updatedTodo.getProperties(['title', 'isCompleted']))
      }
    })

    this.saveList(todos)
  },

  remove(id) {
    this.removeList([id])
  },

  removeList(ids) {
    var todos = this.list()

    todos.records
      .filter((todo) => ids.contains(todo.id))
      .forEach((todo) => todos.records.removeAt(todos.records.indexOf(todo)))

    this.saveList(todos)
  },

  saveList(list) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(list))
  },

  uuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  }

})
