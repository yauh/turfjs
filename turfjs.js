turfJs = Npm.require('turf');

Turf = {};

Turf.hello =
  function () {
    return "hello";
  };

Turf.random = function (args) {
  return turfJs.random(args)
}