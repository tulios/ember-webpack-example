import './stylesheets'
import Ember from 'ember'
import Router from './router'

window.App = Ember.Application.create({
  rootElement: '#ember-app',
  ready() {
    document.getElementById('ember-app').innerHTML = '';
  }
})

App.Router = Router
