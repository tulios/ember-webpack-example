import Ember from 'ember'

const ENTER_KEY = 13
const ESC_KEY = 27

export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: ['placeholder', 'type', 'value'],
  type: 'text',

  didInsertElement() {
    this.$().focus()
  },

  keyUp(e) {
    switch(e.keyCode) {
      case ENTER_KEY:
        this.sendAction('onEnter', this.get('value'))
        this.set('value', '')
        break
      case ESC_KEY:
        this.sendAction('onCancel')
        break
      default:
        this.set('value', e.target.value)
    }
  }
})
