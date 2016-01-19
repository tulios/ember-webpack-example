import Ember from '../ember'

export default Ember.Router.map(function() {
  this.route('test', {path: '/test-url'})
  this.route('support', {path: '/support-url'})
})
