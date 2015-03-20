Package.describe(
{
  name: 'turfjs',
  version: '0.0.1-dev',
  // Brief, one-line summary of the package.
  summary: 'Meteor Package that wraps Turfjs - the modular geospatial engine',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yauh/turfjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api)
{
  api.versionsFrom('1.0.4.1');
  api.addFiles('turfjs.js');
});

Package.onTest(function(api)
{
  api.use('tinytest');
  api.use('turfjs');
  api.addFiles('turfjs-tests.js');
});