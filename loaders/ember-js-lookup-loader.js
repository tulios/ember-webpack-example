var path = require('path')
var recursive = require('recursive-readdir-sync')
var ROOT_FOLDER = path.join(__dirname, '../')

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function constantize(str) {
  return str.split('-').map(function(s) {
    return capitalize(s)
  }).join('')
}

function lookupModule(folderPath, moduleSufix, modulePath) {
  var imports = []
  var lookups = []

  try {
    var files = recursive(folderPath)
    files.forEach(function(file) {
      var relativePath = file
        .replace(folderPath, '')
        .replace(/\.js/, '')

      var parts = relativePath
        .replace(/^\//, '')
        .split('/')
        .map(function(part) { return constantize(part) })

      var topLevel = parts[0]
      var constantName = parts.reduce(function(name, part) {
        if (name === '' || part === topLevel) {
          name = name || part
        } else {
          name += part
        }
        return name
      })

      constantName += moduleSufix

      imports.push("import " + constantName + " from '" + modulePath + relativePath + "'")
      lookups.push('App.' + constantName + ' = ' + constantName);
    })

  } catch(err) {
    if (err.errno === 34) {
      console.log('Path does not exist');
    } else {
      throw err;
    }
  }

  return {
    imports: imports,
    lookups: lookups
  }
}

function applyImports(source, loader) {
  var match = source.match(/^\s*import .* from '.*'\s*$/mg)
  var lastImport = match[match.length - 1]
  var pieces = source.split(lastImport)
  return [pieces[0], lastImport].concat(loader.imports).concat(pieces[1]).join('\n')
}

function applyLookups(source, loader) {
  return source + loader.lookups.join('\n')
}

module.exports = function(source) {
  var loader = lookupModule(path.join(ROOT_FOLDER, 'app/routes'), 'Route', 'app/routes')
  source = applyImports(source, loader)
  source = applyLookups(source, loader)
  return source
}
