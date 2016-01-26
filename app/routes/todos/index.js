import Ember from 'ember'

const STORAGE_NAME = 'todo_webpack'
const EMPTY_LIST = '{"records": []}'

export default Ember.Route.extend({

  model() {
    return this.getTodos()
  },

  actions: {
    createTodo(title) {
      if (!title) return

      var newTodo = {id: this.uuid(), title: title, isCompleted: false}
      var todos = this.getTodos()
      todos.records.push(newTodo)
      localStorage.setItem(STORAGE_NAME, JSON.stringify(todos))
      this.refresh()
    },

    updateTodo(data) {
      var updatedTodo = Ember.Object.create(data)
      var todos = this.getTodos()
      todos.records.forEach((t) => {
        if (t.id === updatedTodo.id) {
          Object.assign(t, updatedTodo.getProperties(['title', 'isCompleted']))
        }
      })

      localStorage.setItem(STORAGE_NAME, JSON.stringify(todos))
      this.refresh()
    }
  },

  uuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  },

  getTodos() {
    return JSON.parse(localStorage.getItem(STORAGE_NAME) || EMPTY_LIST)
  }

})
