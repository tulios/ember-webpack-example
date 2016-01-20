import Ember from 'ember'

export default Ember.Route.extend({

  beforeModel: function() {
    console.log('Todos Item Route')
  },

  model: function() {
    return {id: 1, name: 'Buy new clothes'}
  }

})
