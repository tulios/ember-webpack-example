import Ember from 'ember'

export default Ember.Route.extend({

  beforeModel: function() {
    console.log('Todos Route')
  },

  model: function() {
    return {
      todos: [
        {id: 1, name: 'Buy new clothes'},
        {id: 2, name: 'renew internet'},
        {id: 3, name: 'close github issue'}
      ]
    }
  }

})
