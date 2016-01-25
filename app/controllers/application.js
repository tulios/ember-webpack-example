export default Ember.Controller.extend({

  actions: {
    createTodo(title) {
      this.target.send('createTodo', title.trim());
    }
  }

})
