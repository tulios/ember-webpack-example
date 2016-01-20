import Ember from 'ember'

export default Ember.Router.map(function() {
  this.route('about', {path: '/about'})

  this.route('todos', {path: '/todos'}, function() {
    this.route('item', {path: ':id'})
  })
})
