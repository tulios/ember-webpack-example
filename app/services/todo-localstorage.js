const STORAGE_NAME = 'todo_webpack'
const EMPTY_LIST = '{"records": []}'

export default Ember.Service.extend({

  list() {
    return JSON.parse(localStorage.getItem(STORAGE_NAME) || EMPTY_LIST)
  },

  create(data) {
    var todos = this.list()
    var newTodo = Object.assign(data, {id: this.uuid(), isCompleted: false})

    todos.records.push(newTodo)
    localStorage.setItem(STORAGE_NAME, JSON.stringify(todos))
  },

  update(updatedTodo) {
    var todos = this.list()
    todos.records.forEach((t) => {
      if (t.id === updatedTodo.id) {
        Object.assign(t, updatedTodo.getProperties(['title', 'isCompleted']))
      }
    })

    localStorage.setItem(STORAGE_NAME, JSON.stringify(todos))
  },

  uuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  }

})
