import Ember from 'ember'
import Router from './app/router'

window.App = Ember.Application.create({
  rootElement: '#ember-app',
  ready() {
    document.getElementById('ember-app').innerHTML = '';
  }
})

App.Router = Router
