import Ember from 'ember'
import TodoIndexRoute from 'app/routes/todos/index'

export default TodoIndexRoute.extend({
  templateName: 'todos/index',
  controllerName: 'todos-index',

  model() {
    return this
      .todosList()
      .filter((todo) => !todo.isCompleted)
  }

})
