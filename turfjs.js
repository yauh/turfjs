turfJs = Npm.require('turf');

turf = {}; // this is to align with the client libs

Turf = turf; // this is for legacy support

turf.hello =
  function () {
    return "hello";
  };

turf.random = function (args) {
  return turfJs.random(args)
}
