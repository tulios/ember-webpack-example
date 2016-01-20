var path = require('path')
var recursive = require('recursive-readdir-sync')

var ROOT_FOLDER = path.join(__dirname, '../')
var TEMPLATES_FOLDER = path.join(ROOT_FOLDER, 'app/templates')
var EMBER_IMPORT = "import Ember from 'ember'"

module.exports = function(source) {
  try {
    var templates = []
    var files = recursive(TEMPLATES_FOLDER)
    files.forEach(function(file) {
      var templateRelativePath = file.replace(ROOT_FOLDER, './')
      templates.push("import '" + templateRelativePath + "'")
    })

    var templatesSource = templates.join('\n')
    if (source.indexOf(EMBER_IMPORT) !== -1) {
      var pieces = source.split(EMBER_IMPORT);
      source = [pieces[0], EMBER_IMPORT, templatesSource, pieces[1]].join('\n')
    } else {
      source = [templatesSource, source].join('\n')
    }

  } catch(err) {
    if (err.errno === 34) {
      console.log('Path ' + TEMPLATES_FOLDER + ' does not exist');
    } else {
      throw err;
    }
  }

  return source
}
