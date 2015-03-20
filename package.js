Package.describe({
  name: 'yauh:turfjs',
  version: '0.0.1-dev',
  // Brief, one-line summary of the package.
  summary: 'Meteor Package that wraps Turfjs - the modular geospatial engine',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yauh/turfjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'turf': '2.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.4.1');
  api.export('Turf');
  api.addFiles([
      'turfjs.js',
      'aggregation/aggregate.js',
      'aggregation/average.js',
      'aggregation/count.js',
      'aggregation/deviation.js',
      'aggregation/max.js',
      'aggregation/median.js',
      'aggregation/min.js',
      'aggregation/sum.js',
      'aggregation/variance.js',

      'classification/jenks.js',
      'classification/quantile.js',
      'classification/reclass.js',

      'data/filter.js',
      'data/remove.js',
      'data/sample.js',

      'geometry/featurecollection.js',
      'geometry/linestring.js',
      'geometry/point.js',
      'geometry/polygon.js',

      'interpolation/isobands.js',
      'interpolation/isolines.js',
      'interpolation/planepoint.js',
      'interpolation/tin.js',

      'grids/hex-grid.js',
      'grids/point-grid.js',
      'grids/square-grid.js',
      //    'grids/triangle-grid.js',

      'joins/inside.js',
      'joins/tag.js',
      'joins/within.js',

      'measurement/along.js',
      'measurement/area.js',
      'measurement/bbox-polygon.js',
      'measurement/bearing.js',
      'measurement/center.js',
      'measurement/centroid.js',
      'measurement/destination.js',
      'measurement/distance.js',
      'measurement/envelope.js',
      'measurement/extent.js',
      'measurement/line-distance.js',
      'measurement/midpoint.js',
      'measurement/nearest.js',
      'measurement/point-on-surface.js',
      'measurement/size.js',
      'measurement/square.js',

      'misc/combine.js',
      'misc/explode.js',
      'misc/flip.js',
      'misc/kinks.js',

      'transformation/bezier.js',
      'transformation/buffer.js',
      'transformation/concave.js',
      'transformation/convex.js',
      'transformation/erase.js',
      'transformation/intersect.js',
      'transformation/merge.js',
      'transformation/simplify.js',
      'transformation/union.js'
    ],
    'server');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('yauh:turfjs');
  api.addFiles([
    'turfjs-tests.js',
    'aggregation/aggregate-test.js',
    'aggregation/average-test.js',
    'aggregation/count-test.js',
    'aggregation/deviation-test.js',
    'aggregation/max-test.js',
    'aggregation/median-test.js',
    'aggregation/min-test.js',
    'aggregation/sum-test.js',
    'aggregation/variance-test.js',

    'classification/jenks-test.js',
    'classification/quantile-test.js',
    'classification/reclass-test.js',

    'data/filter-test.js',
    'data/remove-test.js',
    'data/sample-test.js',

    'geometry/featurecollection-test.js',
    'geometry/linestring-test.js',
    'geometry/point-test.js',
    'geometry/polygon-test.js',

    'interpolation/isobands-test.js',
    'interpolation/isolines-test.js',
    'interpolation/planepoint-test.js',
    'interpolation/tin-test.js',

    'grids/hex-grid-test.js',
    'grids/point-grid-test.js',
    'grids/square-grid-test.js',
    //    'grids/triangle-grid-test.js',

    'joins/inside-test.js',
    'joins/tag-test.js',
    'joins/within-test.js',

    'measurement/along-test.js',
    'measurement/area-test.js',
    'measurement/bbox-polygon-test.js',
    'measurement/bearing-test.js',
    'measurement/center-test.js',
    'measurement/centroid-test.js',
    'measurement/destination-test.js',
    'measurement/distance-test.js',
    'measurement/envelope-test.js',
    'measurement/extent-test.js',
    'measurement/line-distance-test.js',
    'measurement/midpoint-test.js',
    'measurement/nearest-test.js',
    'measurement/point-on-surface-test.js',
    'measurement/size-test.js',
    'measurement/square-test.js',

    'misc/combine-test.js',
    'misc/explode-test.js',
    'misc/flip-test.js',
    'misc/kinks-test.js',

    'transformation/bezier-test.js',
    'transformation/buffer-test.js',
    'transformation/concave-test.js',
    'transformation/convex-test.js',
    'transformation/erase-test.js',
    'transformation/intersect-test.js',
    'transformation/merge-test.js',
    'transformation/simplify-test.js',
    'transformation/union-test.js'
  ], 'server');
});