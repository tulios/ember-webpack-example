import Ember from 'ember'

export default Ember.Route.extend({
  todoService: Ember.inject.service('todo-localstorage'),

  model() {
    return this.todosList()
  },

  setupController(controller, model) {
    this._super(controller, model)
    var allTodos = this.todosList()
    controller.set('remaining', allTodos.filterBy('isCompleted', false))
    controller.set('completed', allTodos.filterBy('isCompleted', true))
  },

  actions: {
    createTodo(title) {
      if (!title) return
      this.get('todoService').create({title: title})
      this.refresh()
    },

    updateTodo(data) {
      this.get('todoService').update(Ember.Object.create(data))
      this.refresh()
    },

    removeTodo(todoId) {
      this.get('todoService').remove(todoId)
      this.refresh()
    },

    clearCompleted() {
      var completedIds = this.completedTodos().map((todo) => todo.id)
      this.get('todoService').removeList(completedIds)
      this.refresh()
    }
  },

  todosList() {
    return Em.A(this.get('todoService').list().records)
  },

  completedTodos() {
    return this.todosList().filterBy('isCompleted', true)
  }

})
