turfJs = Npm.require('turf');

Turf = {};

Turf.hello =
  function () {
    return "hello to you";
  };

Turf.random = function (args) {
  return turfJs.random(args)
}