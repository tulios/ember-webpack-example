export default Ember.Helper.helper(function(params) {
  var singular = params[0]
  var count = params[1]
  // This is just an example, this code is definitely not
  // production ready, just avoiding more dependencies
  // (e.g: ember-inflector)
  return count === 1 ? singular : `${singular}s`
})
