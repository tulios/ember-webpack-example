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
      this.get('model')
        .forEach((todo) => {
          todo.isCompleted = !todo.isCompleted
          this.target.send('updateTodo', todo);
        })
    }
  }

})
