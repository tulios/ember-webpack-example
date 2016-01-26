export default Ember.Controller.extend({

  remaining: Ember.computed.filterBy('model', 'isCompleted', false),
  completed: Ember.computed.filterBy('model', 'isCompleted', true),

  canToggle: Ember.computed('model.length', function() {
    var anyTodos = this.get('model.length');
    var isEditing = this.get('model').isAny('isEditing');

    return anyTodos && !isEditing;
  }),

  actions: {
    updateTodo(todo) {
      this.target.send('updateTodo', todo);
    }
  }

})
