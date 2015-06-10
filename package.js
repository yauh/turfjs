Package.describe({
  name: 'yauh:turfjs',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'turf.js library for geospatial operations (analyze, aggregate, and transform GeoJSON data)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yauh/turfjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.imply('yauh:turfjs-client', 'client');
  api.imply('yauh:turfjs-server', 'server');
  api.versionsFrom('1.0.4.1');
  api.addFiles([
      'turfjs.js'
    ]);
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('yauh:turfjs');
  api.addFiles([
    'turfjs-tests.js'
  ]);

});
