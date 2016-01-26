import Ember from 'ember'

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isEditing:editing', 'isCompleted:completed '],
  isCompleted: Ember.computed.oneWay('data.isCompleted'),

  actions: {
    updateTodo() {
      this.send('cancelEditing')
      this.sendAction('onChange', this.get('data'))
    },

    editTodo() {
      this.set('isEditing', true)
    },

    cancelEditing() {
      this.set('isEditing', false)
    },

    removeTodo() {
      this.sendAction('onDestroy', this.get('data.id'))
    }
  }

})
