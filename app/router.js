import Ember from 'ember'

export default Ember.Router.map(function() {
  this.resource('todos', {path: '/'}, function () {
    this.route('active');
    this.route('completed');
  });
})
