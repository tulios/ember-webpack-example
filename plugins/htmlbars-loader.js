var HtmlbarsCompiler = require('ember-cli-htmlbars')
var templateTree = new HtmlbarsCompiler('../app/templates', {
  isHTMLBars: true,

  // provide the templateCompiler that is paired with your Ember version
  templateCompiler: require('components-ember/ember-template-compiler.js')
});

module.exports = function(source) {
  this.cacheable && this.cacheable()
  var templateMatch = this.resourcePath.match(/\/app\/templates\/(.*)\.hbs$/)
  var templatePath = templateMatch[1]

  var fullTemplate = templateTree.processString(source, templatePath)

  var templateString = fullTemplate.replace(/^export default Ember\./, 'Ember.')
  return 'Ember.TEMPLATES[\'' + templatePath + '\'] = ' + templateString
}
