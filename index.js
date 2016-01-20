import Ember from 'ember'
import Router from './app/router'
import TodosRoute from 'app/routes/todos/todos'
import TodosItemRoute from 'app/routes/todos/item'

window.App = Ember.Application.create({
  rootElement: '#ember-app',
  ready() {
    document.getElementById('ember-app').innerHTML = '';
  }
})

App.Router = Router
App.TodosRoute = TodosRoute
App.TodosItemRoute = TodosItemRoute
