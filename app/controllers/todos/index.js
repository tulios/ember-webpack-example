export default Ember.Controller.extend({

  remaining: Ember.computed.filterBy('model.records', 'isCompleted', false),
  completed: Ember.computed.filterBy('model.records', 'isCompleted', true),

  canToggle: Ember.computed('model.length', function() {
    var anyTodos = this.get('model.records.length');
    var isEditing = this.get('model.records').isAny('isEditing');

    return anyTodos && !isEditing;
  }),

  actions: {
    updateTodo(todo) {
      this.target.send('updateTodo', todo);
    }
  }

})
