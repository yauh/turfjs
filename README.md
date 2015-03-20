Turfjs for Meteor
=================

This package is a simple wrapper for
[Turf](https://github.com/Turfjs/turf). Manipulate GeoJSON objects,
similar to PostGIS.

Read [an introduction to Turf.js and spatial
analysis](https://www.mapbox.com/guides/intro-to-turf/).

[![Build
Status](https://travis-ci.org/yauh/turfjs.svg?branch=master)](https://travis-ci.org/yauh/turfjs)

Usage
-----

Install the package via command line:

    $ meteor add yauh:turfjs

**Note** `Turf` is only available on the server, not on the client, even
though it could be used there as well.

The package introduces a new global called `Turf` which knows these
methods. See [the official docs](http://turfjs.org/static/docs/) for the
correct syntax and parameters or check out the test files inside this
package.

### aggregation

-   `Turf.aggregate()`
-   `Turf.average()`
-   `Turf.count()`
-   `Turf.deviation()`
-   `Turf.max()`
-   `Turf.median()`
-   `Turf.min()`
-   `Turf.sum()`
-   `Turf.variance()`

### classification

-   `Turf.jenks()`
-   `Turf.quantile()`
-   `Turf.reclass()`

### data

-   `Turf.filter()`
-   `Turf.remove()`
-   `Turf.sample()`

### geometry

-   `Turf.featurecollection()`
-   `Turf.linestring()`
-   `Turf.point()`
-   `Turf.polygon()`

### interpolation

-   `Turf.isobands()`
-   `Turf.isolines()`
-   `Turf.planepoint()`
-   `Turf.tin()`

### grids

-   `Turf.hex-grid()`
-   `Turf.point-grid()`
-   `Turf.square-grid()`
-   `Turf.inside()`
-   `Turf.tag()`
-   `Turf.within()`

### measurement

-   `Turf.along()`
-   `Turf.area()`
-   `Turf.bbox-polygon()`
-   `Turf.bearing()`
-   `Turf.center()`
-   `Turf.centroid()`
-   `Turf.destination()`
-   `Turf.distance()`
-   `Turf.envelope()`
-   `Turf.extent()`
-   `Turf.line-distance()`
-   `Turf.midpoint()`
-   `Turf.nearest()`
-   `Turf.point-on-surface()`
-   `Turf.size()`
-   `Turf.square()`

### misc

-   `Turf.combine()`
-   `Turf.explode()`
-   `Turf.flip()`
-   `Turf.kinks()`

### transformation

-   `Turf.bezier()`
-   `Turf.buffer()`
-   `Turf.concave()`
-   `Turf.convex()`
-   `Turf.erase()`
-   `Turf.intersect()`
-   `Turf.merge()`
-   `Turf.simplify()`
-   `Turf.union()`

Todo
====

-   Tests for all wrappers
-   Determine how to bring Turf to the client without sending the 500k
    minified JS
