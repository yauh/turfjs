if (Meteor.isServer){
turf = Npm.require('turf');
}

Turf = turf; // this is for legacy support

turf.hello =
  function () {
    return "hello";
  };

turf.random = function (args) {
  return turf.random(args)
}
