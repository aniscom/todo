/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files, and the ! prefix for excluding files.)
 */

// Path to public folder
var tmpPath = '.tmp/public/';

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'bower_components/bootswatch/dist/css/bootstrap.css',
  'styles/**/*.css'
];
var jsFilesToInject = [
  'js/dependencies/sails.io.js',
  '/bower_components/jquery/dist/jquery.js',
  '/bower_components/angular/angular.js',
  '/bower_components/angular-route/angular-route.js',
  '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  '/bower_components/bootstrap/dist/js/boostrap.js',
  'js/dependencies/**/*.js',

  'js/**/*.js'
];

var templateFilesToInject = [
  'templates/*.html'
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
// Transform paths relative to the "assets" folder to be relative to the public
// folder, preserving "exclude" operators.
function transformPath(path) {
  return (path.substring(0,1) == '!') ? ('!' + tmpPath + path.substring(1)) : (tmpPath + path);
}
