webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _ember = __webpack_require__(6);

	var _ember2 = _interopRequireDefault(_ember);

	var _router = __webpack_require__(13);

	var _router2 = _interopRequireDefault(_router);

	var _todoInput = __webpack_require__(14);

	var _todoInput2 = _interopRequireDefault(_todoInput);

	var _todoItem = __webpack_require__(15);

	var _todoItem2 = _interopRequireDefault(_todoItem);

	var _or = __webpack_require__(16);

	var _or2 = _interopRequireDefault(_or);

	var _pluralize = __webpack_require__(17);

	var _pluralize2 = _interopRequireDefault(_pluralize);

	var _active = __webpack_require__(18);

	var _active2 = _interopRequireDefault(_active);

	var _completed = __webpack_require__(20);

	var _completed2 = _interopRequireDefault(_completed);

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	var _todoLocalstorage = __webpack_require__(21);

	var _todoLocalstorage2 = _interopRequireDefault(_todoLocalstorage);

	var _application = __webpack_require__(22);

	var _application2 = _interopRequireDefault(_application);

	var _index3 = __webpack_require__(23);

	var _index4 = _interopRequireDefault(_index3);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.App = _ember2.default.Application.create({
	  rootElement: '#ember-app',
	  ready: function ready() {
	    document.getElementById('ember-app').innerHTML = '';
	  }
	});

	App.Router = _router2.default;

	App.TodoInputComponent = _todoInput2.default;
	App.TodoItemComponent = _todoItem2.default;
	App.OrHelper = _or2.default;
	App.PluralizeHelper = _pluralize2.default;
	App.TodosActiveRoute = _active2.default;
	App.TodosCompletedRoute = _completed2.default;
	App.TodosIndexRoute = _index2.default;
	App.TodoLocalstorageService = _todoLocalstorage2.default;
	App.ApplicationController = _application2.default;
	App.TodosIndexController = _index4.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ember = __webpack_require__(6);

	var _ember2 = _interopRequireDefault(_ember);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ember2.default.Router.map(function () {
	  this.resource('todos', { path: '/' }, function () {
	    this.route('active');
	    this.route('completed');
	  });
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ember = __webpack_require__(6);

	var _ember2 = _interopRequireDefault(_ember);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ENTER_KEY = 13;
	var ESC_KEY = 27;

	exports.default = _ember2.default.Component.extend({
	  tagName: 'input',
	  attributeBindings: ['placeholder', 'type', 'value'],
	  type: 'text',

	  didInsertElement: function didInsertElement() {
	    this.$().focus();
	  },
	  keyUp: function keyUp(e) {
	    switch (e.keyCode) {
	      case ENTER_KEY:
	        this.sendAction('onEnter', this.get('value'));
	        this.set('value', '');
	        break;
	      case ESC_KEY:
	        this.sendAction('onCancel');
	        break;
	      default:
	        this.set('value', e.target.value);
	    }
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ember = __webpack_require__(6);

	var _ember2 = _interopRequireDefault(_ember);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ember2.default.Component.extend({
	  tagName: 'li',
	  classNameBindings: ['isEditing:editing', 'isCompleted:completed '],
	  isCompleted: _ember2.default.computed.oneWay('data.isCompleted'),

	  actions: {
	    updateTodo: function updateTodo() {
	      this.send('cancelEditing');
	      this.sendAction('onChange', this.get('data'));
	    },
	    editTodo: function editTodo() {
	      this.set('isEditing', true);
	    },
	    cancelEditing: function cancelEditing() {
	      this.set('isEditing', false);
	    },
	    removeTodo: function removeTodo() {
	      this.sendAction('onDestroy', this.get('data.id'));
	    }
	  }

	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Ember.Helper.helper(function (params) {
	  return params[0] || params[1];
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Ember.Helper.helper(function (params) {
	  var singular = params[0];
	  var count = params[1];
	  // This is just an example, this code is definitely not
	  // production ready, just avoiding more dependencies
	  // (e.g: ember-inflector)
	  return count === 1 ? singular : singular + "s";
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ember = __webpack_require__(6);

	var _ember2 = _interopRequireDefault(_ember);

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _index2.default.extend({
	  templateName: 'todos/index',
	  controllerName: 'todos-index',

	  model: function model() {
	    return this.todosList().filter(function (todo) {
	      return !todo.isCompleted;
	    });
	  }
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ember = __webpack_require__(6);

	var _ember2 = _interopRequireDefault(_ember);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ember2.default.Route.extend({
	  todoService: _ember2.default.inject.service('todo-localstorage'),

	  model: function model() {
	    return this.todosList();
	  },
	  setupController: function setupController(controller, model) {
	    this._super(controller, model);
	    var allTodos = this.todosList();
	    controller.set('remaining', allTodos.filterBy('isCompleted', false));
	    controller.set('completed', allTodos.filterBy('isCompleted', true));
	  },

	  actions: {
	    createTodo: function createTodo(title) {
	      if (!title) return;
	      this.get('todoService').create({ title: title });
	      this.refresh();
	    },
	    updateTodo: function updateTodo(data) {
	      this.get('todoService').update(_ember2.default.Object.create(data));
	      this.refresh();
	    },
	    removeTodo: function removeTodo(todoId) {
	      this.get('todoService').remove(todoId);
	      this.refresh();
	    },
	    clearCompleted: function clearCompleted() {
	      var completedIds = this.completedTodos().map(function (todo) {
	        return todo.id;
	      });
	      this.get('todoService').removeList(completedIds);
	      this.refresh();
	    }
	  },

	  todosList: function todosList() {
	    return Em.A(this.get('todoService').list().records);
	  },
	  completedTodos: function completedTodos() {
	    return this.todosList().filterBy('isCompleted', true);
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ember = __webpack_require__(6);

	var _ember2 = _interopRequireDefault(_ember);

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _index2.default.extend({
	  templateName: 'todos/index',
	  controllerName: 'todos-index',

	  model: function model() {
	    return this.completedTodos();
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var STORAGE_NAME = 'todo_webpack';
	var EMPTY_LIST = '{"records": []}';

	exports.default = Ember.Service.extend({
	  list: function list() {
	    return JSON.parse(localStorage.getItem(STORAGE_NAME) || EMPTY_LIST);
	  },
	  create: function create(data) {
	    var newTodo = Object.assign(data, { id: this.uuid(), isCompleted: false });
	    var todos = this.list();
	    todos.records.push(newTodo);
	    this.saveList(todos);
	  },
	  update: function update(updatedTodo) {
	    var todos = this.list();
	    todos.records.forEach(function (t) {
	      if (t.id === updatedTodo.id) {
	        Object.assign(t, updatedTodo.getProperties(['title', 'isCompleted']));
	      }
	    });

	    this.saveList(todos);
	  },
	  remove: function remove(id) {
	    this.removeList([id]);
	  },
	  removeList: function removeList(ids) {
	    var todos = this.list();

	    todos.records.filter(function (todo) {
	      return ids.contains(todo.id);
	    }).forEach(function (todo) {
	      return todos.records.removeAt(todos.records.indexOf(todo));
	    });

	    this.saveList(todos);
	  },
	  saveList: function saveList(list) {
	    localStorage.setItem(STORAGE_NAME, JSON.stringify(list));
	  },
	  uuid: function uuid() {
	    function s4() {
	      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	  }
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Ember.Controller.extend({

	  actions: {
	    createTodo: function createTodo(title) {
	      this.target.send('createTodo', title.trim());
	    }
	  }

	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Ember.Controller.extend({

	  canToggle: Ember.computed('model.length', function () {
	    var anyTodos = this.get('model.length');
	    var isEditing = this.get('model').isAny('isEditing');

	    return anyTodos && !isEditing;
	  }),

	  actions: {
	    updateTodo: function updateTodo(todo) {
	      this.target.send('updateTodo', todo);
	    },
	    removeTodo: function removeTodo(todoId) {
	      this.target.send('removeTodo', todoId);
	    },
	    clearCompleted: function clearCompleted() {
	      this.target.send('clearCompleted');
	    },
	    toggleSelect: function toggleSelect() {
	      var _this = this;

	      var model = this.get('model');
	      var isAllCompleted = model.reduce(function (result, todo) {
	        return result && todo.isCompleted;
	      }, true);

	      this.get('model').forEach(function (todo) {
	        todo.isCompleted = !isAllCompleted;
	        _this.target.send('updateTodo', todo);
	      });
	    }
	  }

	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	Ember.TEMPLATES["application"] = Ember.HTMLBars.template((function() {
	  return {
	    meta: {
	      "fragmentReason": {
	        "name": "missing-wrapper",
	        "problems": [
	          "multiple-nodes"
	        ]
	      },
	      "revision": "Ember@2.2.0",
	      "loc": {
	        "source": null,
	        "start": {
	          "line": 1,
	          "column": 0
	        },
	        "end": {
	          "line": 23,
	          "column": 0
	        }
	      },
	      "moduleName": "application"
	    },
	    isEmpty: false,
	    arity: 0,
	    cachedFragment: null,
	    hasRendered: false,
	    buildFragment: function buildFragment(dom) {
	      var el0 = dom.createDocumentFragment();
	      var el1 = dom.createElement("section");
	      dom.setAttribute(el1,"class","todoapp");
	      var el2 = dom.createTextNode("\n  ");
	      dom.appendChild(el1, el2);
	      var el2 = dom.createElement("header");
	      dom.setAttribute(el2,"class","header");
	      var el3 = dom.createTextNode("\n    ");
	      dom.appendChild(el2, el3);
	      var el3 = dom.createElement("h1");
	      var el4 = dom.createTextNode("todos");
	      dom.appendChild(el3, el4);
	      dom.appendChild(el2, el3);
	      var el3 = dom.createTextNode("\n    ");
	      dom.appendChild(el2, el3);
	      var el3 = dom.createComment("");
	      dom.appendChild(el2, el3);
	      var el3 = dom.createTextNode("\n  ");
	      dom.appendChild(el2, el3);
	      dom.appendChild(el1, el2);
	      var el2 = dom.createTextNode("\n  ");
	      dom.appendChild(el1, el2);
	      var el2 = dom.createComment("");
	      dom.appendChild(el1, el2);
	      var el2 = dom.createTextNode("\n");
	      dom.appendChild(el1, el2);
	      dom.appendChild(el0, el1);
	      var el1 = dom.createTextNode("\n");
	      dom.appendChild(el0, el1);
	      var el1 = dom.createElement("footer");
	      dom.setAttribute(el1,"class","info");
	      var el2 = dom.createTextNode("\n  ");
	      dom.appendChild(el1, el2);
	      var el2 = dom.createElement("p");
	      var el3 = dom.createTextNode("Double-click to edit a todo");
	      dom.appendChild(el2, el3);
	      dom.appendChild(el1, el2);
	      var el2 = dom.createTextNode("\n  ");
	      dom.appendChild(el1, el2);
	      var el2 = dom.createElement("p");
	      var el3 = dom.createTextNode("\n    Created by\n    ");
	      dom.appendChild(el2, el3);
	      var el3 = dom.createElement("a");
	      dom.setAttribute(el3,"href","http://github.com/tomdale");
	      var el4 = dom.createTextNode("Tom Dale");
	      dom.appendChild(el3, el4);
	      dom.appendChild(el2, el3);
	      var el3 = dom.createTextNode(",\n    ");
	      dom.appendChild(el2, el3);
	      var el3 = dom.createElement("a");
	      dom.setAttribute(el3,"href","http://github.com/addyosmani");
	      var el4 = dom.createTextNode("Addy Osmani");
	      dom.appendChild(el3, el4);
	      dom.appendChild(el2, el3);
	      var el3 = dom.createTextNode("\n  ");
	      dom.appendChild(el2, el3);
	      dom.appendChild(el1, el2);
	      var el2 = dom.createTextNode("\n  ");
	      dom.appendChild(el1, el2);
	      var el2 = dom.createElement("p");
	      var el3 = dom.createTextNode("\n    Updated by\n    ");
	      dom.appendChild(el2, el3);
	      var el3 = dom.createElement("a");
	      dom.setAttribute(el3,"href","http://github.com/bantic");
	      var el4 = dom.createTextNode("Cory Forsyth");
	      dom.appendChild(el3, el4);
	      dom.appendChild(el2, el3);
	      var el3 = dom.createTextNode("\n  ");
	      dom.appendChild(el2, el3);
	      dom.appendChild(el1, el2);
	      var el2 = dom.createTextNode("\n  ");
	      dom.appendChild(el1, el2);
	      var el2 = dom.createElement("p");
	      var el3 = dom.createTextNode("Part of ");
	      dom.appendChild(el2, el3);
	      var el3 = dom.createElement("a");
	      dom.setAttribute(el3,"href","http://todomvc.com");
	      var el4 = dom.createTextNode("TodoMVC");
	      dom.appendChild(el3, el4);
	      dom.appendChild(el2, el3);
	      dom.appendChild(el1, el2);
	      var el2 = dom.createTextNode("\n");
	      dom.appendChild(el1, el2);
	      dom.appendChild(el0, el1);
	      var el1 = dom.createTextNode("\n");
	      dom.appendChild(el0, el1);
	      return el0;
	    },
	    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	      var element0 = dom.childAt(fragment, [0]);
	      var morphs = new Array(2);
	      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),3,3);
	      morphs[1] = dom.createMorphAt(element0,3,3);
	      return morphs;
	    },
	    statements: [
	      ["inline","todo-input",[],["class","new-todo","onEnter","createTodo","placeholder","What needs to be done?"],["loc",[null,[4,4],[6,55]]]],
	      ["content","outlet",["loc",[null,[8,2],[8,12]]]]
	    ],
	    locals: [],
	    templates: []
	  };
	}()));

/***/ },
/* 25 */
/***/ function(module, exports) {

	Ember.TEMPLATES["components/todo-item"] = Ember.HTMLBars.template((function() {
	  var child0 = (function() {
	    return {
	      meta: {
	        "fragmentReason": {
	          "name": "missing-wrapper",
	          "problems": [
	            "wrong-type"
	          ]
	        },
	        "revision": "Ember@2.2.0",
	        "loc": {
	          "source": null,
	          "start": {
	            "line": 1,
	            "column": 0
	          },
	          "end": {
	            "line": 6,
	            "column": 0
	          }
	        },
	        "moduleName": "components/todo-item"
	      },
	      isEmpty: false,
	      arity: 0,
	      cachedFragment: null,
	      hasRendered: false,
	      buildFragment: function buildFragment(dom) {
	        var el0 = dom.createDocumentFragment();
	        var el1 = dom.createTextNode("  ");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createComment("");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createTextNode("\n");
	        dom.appendChild(el0, el1);
	        return el0;
	      },
	      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	        var morphs = new Array(1);
	        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
	        return morphs;
	      },
	      statements: [
	        ["inline","todo-input",[],["class","edit","value",["subexpr","@mut",[["get","data.title",["loc",[null,[3,21],[3,31]]]]],[],[]],"onEnter","updateTodo","onCancel","cancelEditing"],["loc",[null,[2,2],[5,41]]]]
	      ],
	      locals: [],
	      templates: []
	    };
	  }());
	  var child1 = (function() {
	    return {
	      meta: {
	        "fragmentReason": false,
	        "revision": "Ember@2.2.0",
	        "loc": {
	          "source": null,
	          "start": {
	            "line": 6,
	            "column": 0
	          },
	          "end": {
	            "line": 13,
	            "column": 0
	          }
	        },
	        "moduleName": "components/todo-item"
	      },
	      isEmpty: false,
	      arity: 0,
	      cachedFragment: null,
	      hasRendered: false,
	      buildFragment: function buildFragment(dom) {
	        var el0 = dom.createDocumentFragment();
	        var el1 = dom.createTextNode("  ");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createComment("");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createTextNode("\n  ");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createElement("label");
	        var el2 = dom.createComment("");
	        dom.appendChild(el1, el2);
	        dom.appendChild(el0, el1);
	        var el1 = dom.createTextNode("\n  ");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createElement("button");
	        dom.setAttribute(el1,"class","destroy");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createTextNode("\n");
	        dom.appendChild(el0, el1);
	        return el0;
	      },
	      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	        var element0 = dom.childAt(fragment, [3]);
	        var element1 = dom.childAt(fragment, [5]);
	        var morphs = new Array(4);
	        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
	        morphs[1] = dom.createElementMorph(element0);
	        morphs[2] = dom.createMorphAt(element0,0,0);
	        morphs[3] = dom.createElementMorph(element1);
	        return morphs;
	      },
	      statements: [
	        ["inline","input",[],["type","checkbox","class","toggle","checked",["subexpr","@mut",[["get","data.isCompleted",["loc",[null,[9,18],[9,34]]]]],[],[]],"change",["subexpr","action",["updateTodo"],[],["loc",[null,[10,17],[10,38]]]]],["loc",[null,[7,2],[10,40]]]],
	        ["element","action",["editTodo"],["on","doubleClick"],["loc",[null,[11,9],[11,47]]]],
	        ["content","data.title",["loc",[null,[11,48],[11,62]]]],
	        ["element","action",["removeTodo"],[],["loc",[null,[12,10],[12,33]]]]
	      ],
	      locals: [],
	      templates: []
	    };
	  }());
	  return {
	    meta: {
	      "fragmentReason": {
	        "name": "missing-wrapper",
	        "problems": [
	          "wrong-type"
	        ]
	      },
	      "revision": "Ember@2.2.0",
	      "loc": {
	        "source": null,
	        "start": {
	          "line": 1,
	          "column": 0
	        },
	        "end": {
	          "line": 14,
	          "column": 0
	        }
	      },
	      "moduleName": "components/todo-item"
	    },
	    isEmpty: false,
	    arity: 0,
	    cachedFragment: null,
	    hasRendered: false,
	    buildFragment: function buildFragment(dom) {
	      var el0 = dom.createDocumentFragment();
	      var el1 = dom.createComment("");
	      dom.appendChild(el0, el1);
	      return el0;
	    },
	    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	      var morphs = new Array(1);
	      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
	      dom.insertBoundary(fragment, 0);
	      dom.insertBoundary(fragment, null);
	      return morphs;
	    },
	    statements: [
	      ["block","if",[["get","isEditing",["loc",[null,[1,6],[1,15]]]]],[],0,1,["loc",[null,[1,0],[13,7]]]]
	    ],
	    locals: [],
	    templates: [child0, child1]
	  };
	}()));

/***/ },
/* 26 */
/***/ function(module, exports) {

	Ember.TEMPLATES["todos/index"] = Ember.HTMLBars.template((function() {
	  var child0 = (function() {
	    var child0 = (function() {
	      return {
	        meta: {
	          "fragmentReason": false,
	          "revision": "Ember@2.2.0",
	          "loc": {
	            "source": null,
	            "start": {
	              "line": 3,
	              "column": 4
	            },
	            "end": {
	              "line": 7,
	              "column": 4
	            }
	          },
	          "moduleName": "todos/index"
	        },
	        isEmpty: false,
	        arity: 0,
	        cachedFragment: null,
	        hasRendered: false,
	        buildFragment: function buildFragment(dom) {
	          var el0 = dom.createDocumentFragment();
	          var el1 = dom.createTextNode("      ");
	          dom.appendChild(el0, el1);
	          var el1 = dom.createComment("");
	          dom.appendChild(el0, el1);
	          var el1 = dom.createTextNode("\n");
	          dom.appendChild(el0, el1);
	          return el0;
	        },
	        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	          var morphs = new Array(1);
	          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
	          return morphs;
	        },
	        statements: [
	          ["inline","input",[],["type","checkbox","class","toggle-all","change",["subexpr","action",["toggleSelect"],[],["loc",[null,[6,21],[6,44]]]]],["loc",[null,[4,6],[6,46]]]]
	        ],
	        locals: [],
	        templates: []
	      };
	    }());
	    var child1 = (function() {
	      return {
	        meta: {
	          "fragmentReason": false,
	          "revision": "Ember@2.2.0",
	          "loc": {
	            "source": null,
	            "start": {
	              "line": 9,
	              "column": 6
	            },
	            "end": {
	              "line": 13,
	              "column": 6
	            }
	          },
	          "moduleName": "todos/index"
	        },
	        isEmpty: false,
	        arity: 1,
	        cachedFragment: null,
	        hasRendered: false,
	        buildFragment: function buildFragment(dom) {
	          var el0 = dom.createDocumentFragment();
	          var el1 = dom.createTextNode("        ");
	          dom.appendChild(el0, el1);
	          var el1 = dom.createComment("");
	          dom.appendChild(el0, el1);
	          var el1 = dom.createTextNode("\n");
	          dom.appendChild(el0, el1);
	          return el0;
	        },
	        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	          var morphs = new Array(1);
	          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
	          return morphs;
	        },
	        statements: [
	          ["inline","todo-item",[],["data",["subexpr","@mut",[["get","record",["loc",[null,[10,25],[10,31]]]]],[],[]],"onChange","updateTodo","onDestroy","removeTodo"],["loc",[null,[10,8],[12,44]]]]
	        ],
	        locals: ["record"],
	        templates: []
	      };
	    }());
	    var child2 = (function() {
	      return {
	        meta: {
	          "fragmentReason": false,
	          "revision": "Ember@2.2.0",
	          "loc": {
	            "source": null,
	            "start": {
	              "line": 22,
	              "column": 8
	            },
	            "end": {
	              "line": 24,
	              "column": 8
	            }
	          },
	          "moduleName": "todos/index"
	        },
	        isEmpty: false,
	        arity: 0,
	        cachedFragment: null,
	        hasRendered: false,
	        buildFragment: function buildFragment(dom) {
	          var el0 = dom.createDocumentFragment();
	          var el1 = dom.createTextNode("          All\n");
	          dom.appendChild(el0, el1);
	          return el0;
	        },
	        buildRenderNodes: function buildRenderNodes() { return []; },
	        statements: [

	        ],
	        locals: [],
	        templates: []
	      };
	    }());
	    var child3 = (function() {
	      return {
	        meta: {
	          "fragmentReason": false,
	          "revision": "Ember@2.2.0",
	          "loc": {
	            "source": null,
	            "start": {
	              "line": 27,
	              "column": 8
	            },
	            "end": {
	              "line": 29,
	              "column": 8
	            }
	          },
	          "moduleName": "todos/index"
	        },
	        isEmpty: false,
	        arity: 0,
	        cachedFragment: null,
	        hasRendered: false,
	        buildFragment: function buildFragment(dom) {
	          var el0 = dom.createDocumentFragment();
	          var el1 = dom.createTextNode("          Active\n");
	          dom.appendChild(el0, el1);
	          return el0;
	        },
	        buildRenderNodes: function buildRenderNodes() { return []; },
	        statements: [

	        ],
	        locals: [],
	        templates: []
	      };
	    }());
	    var child4 = (function() {
	      return {
	        meta: {
	          "fragmentReason": false,
	          "revision": "Ember@2.2.0",
	          "loc": {
	            "source": null,
	            "start": {
	              "line": 32,
	              "column": 8
	            },
	            "end": {
	              "line": 34,
	              "column": 8
	            }
	          },
	          "moduleName": "todos/index"
	        },
	        isEmpty: false,
	        arity: 0,
	        cachedFragment: null,
	        hasRendered: false,
	        buildFragment: function buildFragment(dom) {
	          var el0 = dom.createDocumentFragment();
	          var el1 = dom.createTextNode("          Completed\n");
	          dom.appendChild(el0, el1);
	          return el0;
	        },
	        buildRenderNodes: function buildRenderNodes() { return []; },
	        statements: [

	        ],
	        locals: [],
	        templates: []
	      };
	    }());
	    var child5 = (function() {
	      return {
	        meta: {
	          "fragmentReason": false,
	          "revision": "Ember@2.2.0",
	          "loc": {
	            "source": null,
	            "start": {
	              "line": 37,
	              "column": 4
	            },
	            "end": {
	              "line": 41,
	              "column": 4
	            }
	          },
	          "moduleName": "todos/index"
	        },
	        isEmpty: false,
	        arity: 0,
	        cachedFragment: null,
	        hasRendered: false,
	        buildFragment: function buildFragment(dom) {
	          var el0 = dom.createDocumentFragment();
	          var el1 = dom.createTextNode("      ");
	          dom.appendChild(el0, el1);
	          var el1 = dom.createElement("button");
	          dom.setAttribute(el1,"class","clear-completed");
	          var el2 = dom.createTextNode("\n        Clear completed\n      ");
	          dom.appendChild(el1, el2);
	          dom.appendChild(el0, el1);
	          var el1 = dom.createTextNode("\n");
	          dom.appendChild(el0, el1);
	          return el0;
	        },
	        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	          var element0 = dom.childAt(fragment, [1]);
	          var morphs = new Array(1);
	          morphs[0] = dom.createElementMorph(element0);
	          return morphs;
	        },
	        statements: [
	          ["element","action",["clearCompleted"],[],["loc",[null,[38,38],[38,65]]]]
	        ],
	        locals: [],
	        templates: []
	      };
	    }());
	    return {
	      meta: {
	        "fragmentReason": {
	          "name": "missing-wrapper",
	          "problems": [
	            "multiple-nodes"
	          ]
	        },
	        "revision": "Ember@2.2.0",
	        "loc": {
	          "source": null,
	          "start": {
	            "line": 1,
	            "column": 0
	          },
	          "end": {
	            "line": 43,
	            "column": 0
	          }
	        },
	        "moduleName": "todos/index"
	      },
	      isEmpty: false,
	      arity: 0,
	      cachedFragment: null,
	      hasRendered: false,
	      buildFragment: function buildFragment(dom) {
	        var el0 = dom.createDocumentFragment();
	        var el1 = dom.createTextNode("  ");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createElement("section");
	        dom.setAttribute(el1,"class","main");
	        var el2 = dom.createTextNode("\n");
	        dom.appendChild(el1, el2);
	        var el2 = dom.createComment("");
	        dom.appendChild(el1, el2);
	        var el2 = dom.createTextNode("    ");
	        dom.appendChild(el1, el2);
	        var el2 = dom.createElement("ul");
	        dom.setAttribute(el2,"class","todo-list");
	        var el3 = dom.createTextNode("\n");
	        dom.appendChild(el2, el3);
	        var el3 = dom.createComment("");
	        dom.appendChild(el2, el3);
	        var el3 = dom.createTextNode("    ");
	        dom.appendChild(el2, el3);
	        dom.appendChild(el1, el2);
	        var el2 = dom.createTextNode("\n  ");
	        dom.appendChild(el1, el2);
	        dom.appendChild(el0, el1);
	        var el1 = dom.createTextNode("\n  ");
	        dom.appendChild(el0, el1);
	        var el1 = dom.createElement("footer");
	        dom.setAttribute(el1,"class","footer");
	        var el2 = dom.createTextNode("\n    ");
	        dom.appendChild(el1, el2);
	        var el2 = dom.createElement("span");
	        dom.setAttribute(el2,"class","todo-count");
	        var el3 = dom.createTextNode("\n      ");
	        dom.appendChild(el2, el3);
	        var el3 = dom.createElement("strong");
	        var el4 = dom.createComment("");
	        dom.appendChild(el3, el4);
	        dom.appendChild(el2, el3);
	        var el3 = dom.createTextNode(" ");
	        dom.appendChild(el2, el3);
	        var el3 = dom.createComment("");
	        dom.appendChild(el2, el3);
	        var el3 = dom.createTextNode(" left\n    ");
	        dom.appendChild(el2, el3);
	        dom.appendChild(el1, el2);
	        var el2 = dom.createTextNode("\n    ");
	        dom.appendChild(el1, el2);
	        var el2 = dom.createElement("ul");
	        dom.setAttribute(el2,"class","filters");
	        var el3 = dom.createTextNode("\n      ");
	        dom.appendChild(el2, el3);
	        var el3 = dom.createElement("li");
	        var el4 = dom.createTextNode("\n");
	        dom.appendChild(el3, el4);
	        var el4 = dom.createComment("");
	        dom.appendChild(el3, el4);
	        var el4 = dom.createTextNode("      ");
	        dom.appendChild(el3, el4);
	        dom.appendChild(el2, el3);
	        var el3 = dom.createTextNode("\n      ");
	        dom.appendChild(el2, el3);
	        var el3 = dom.createElement("li");
	        var el4 = dom.createTextNode("\n");
	        dom.appendChild(el3, el4);
	        var el4 = dom.createComment("");
	        dom.appendChild(el3, el4);
	        var el4 = dom.createTextNode("      ");
	        dom.appendChild(el3, el4);
	        dom.appendChild(el2, el3);
	        var el3 = dom.createTextNode("\n      ");
	        dom.appendChild(el2, el3);
	        var el3 = dom.createElement("li");
	        var el4 = dom.createTextNode("\n");
	        dom.appendChild(el3, el4);
	        var el4 = dom.createComment("");
	        dom.appendChild(el3, el4);
	        var el4 = dom.createTextNode("      ");
	        dom.appendChild(el3, el4);
	        dom.appendChild(el2, el3);
	        var el3 = dom.createTextNode("\n    ");
	        dom.appendChild(el2, el3);
	        dom.appendChild(el1, el2);
	        var el2 = dom.createTextNode("\n");
	        dom.appendChild(el1, el2);
	        var el2 = dom.createComment("");
	        dom.appendChild(el1, el2);
	        var el2 = dom.createTextNode("  ");
	        dom.appendChild(el1, el2);
	        dom.appendChild(el0, el1);
	        var el1 = dom.createTextNode("\n");
	        dom.appendChild(el0, el1);
	        return el0;
	      },
	      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	        var element1 = dom.childAt(fragment, [1]);
	        var element2 = dom.childAt(fragment, [3]);
	        var element3 = dom.childAt(element2, [1]);
	        var element4 = dom.childAt(element2, [3]);
	        var morphs = new Array(8);
	        morphs[0] = dom.createMorphAt(element1,1,1);
	        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
	        morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
	        morphs[3] = dom.createMorphAt(element3,3,3);
	        morphs[4] = dom.createMorphAt(dom.childAt(element4, [1]),1,1);
	        morphs[5] = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
	        morphs[6] = dom.createMorphAt(dom.childAt(element4, [5]),1,1);
	        morphs[7] = dom.createMorphAt(element2,5,5);
	        return morphs;
	      },
	      statements: [
	        ["block","if",[["get","canToggle",["loc",[null,[3,10],[3,19]]]]],[],0,null,["loc",[null,[3,4],[7,11]]]],
	        ["block","each",[["get","model",["loc",[null,[9,14],[9,19]]]]],[],1,null,["loc",[null,[9,6],[13,15]]]],
	        ["content","remaining.length",["loc",[null,[18,14],[18,34]]]],
	        ["inline","pluralize",["item",["get","remaining.length",["loc",[null,[18,63],[18,79]]]]],[],["loc",[null,[18,44],[18,81]]]],
	        ["block","link-to",["todos.index"],["activeClass","selected"],2,null,["loc",[null,[22,8],[24,20]]]],
	        ["block","link-to",["todos.active"],["activeClass","selected"],3,null,["loc",[null,[27,8],[29,20]]]],
	        ["block","link-to",["todos.completed"],["activeClass","selected"],4,null,["loc",[null,[32,8],[34,20]]]],
	        ["block","if",[["get","completed.length",["loc",[null,[37,10],[37,26]]]]],[],5,null,["loc",[null,[37,4],[41,11]]]]
	      ],
	      locals: [],
	      templates: [child0, child1, child2, child3, child4, child5]
	    };
	  }());
	  return {
	    meta: {
	      "fragmentReason": {
	        "name": "missing-wrapper",
	        "problems": [
	          "wrong-type"
	        ]
	      },
	      "revision": "Ember@2.2.0",
	      "loc": {
	        "source": null,
	        "start": {
	          "line": 1,
	          "column": 0
	        },
	        "end": {
	          "line": 44,
	          "column": 0
	        }
	      },
	      "moduleName": "todos/index"
	    },
	    isEmpty: false,
	    arity: 0,
	    cachedFragment: null,
	    hasRendered: false,
	    buildFragment: function buildFragment(dom) {
	      var el0 = dom.createDocumentFragment();
	      var el1 = dom.createComment("");
	      dom.appendChild(el0, el1);
	      return el0;
	    },
	    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
	      var morphs = new Array(1);
	      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
	      dom.insertBoundary(fragment, 0);
	      dom.insertBoundary(fragment, null);
	      return morphs;
	    },
	    statements: [
	      ["block","if",[["subexpr","or",[["get","model.length",["loc",[null,[1,10],[1,22]]]],["get","remaining.length",["loc",[null,[1,23],[1,39]]]]],[],["loc",[null,[1,6],[1,40]]]]],[],0,null,["loc",[null,[1,0],[43,7]]]]
	    ],
	    locals: [],
	    templates: [child0]
	  };
	}()));

/***/ }
]);