export default Ember.Controller.extend({

  canToggle: Ember.computed('model.length', function() {
    var anyTodos = this.get('model.length');
    var isEditing = this.get('model').isAny('isEditing');

    return anyTodos && !isEditing;
  }),

  actions: {
    updateTodo(todo) {
      this.target.send('updateTodo', todo);
    },

    removeTodo(todoId) {
      this.target.send('removeTodo', todoId);
    },

    clearCompleted() {
      this.target.send('clearCompleted');
    },

    toggleSelect() {
      var model = this.get('model')
      var isAllCompleted = model.reduce((result, todo) => result && todo.isCompleted, true)

      this.get('model')
        .forEach((todo) => {
          todo.isCompleted = !isAllCompleted
          this.target.send('updateTodo', todo);
        })
    }
  }

})
