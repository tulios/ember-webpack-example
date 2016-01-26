import Ember from 'ember'

export default Ember.Route.extend({
  todoService: Ember.inject.service('todo-localstorage'),

  model() {
    return this
      .get('todoService')
      .list()
      .records
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
    }
  }

})
