var path = require('path');

var fixturePaths = ['intersection.js', 'redundantIntersection.js'];
var absolutePaths = {};

fixturePaths.forEach(function(fixture) {
  absolutePaths[fixture] = path.resolve(__dirname, fixture);
});

module.exports = absolutePaths;