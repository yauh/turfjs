Tinytest.add('grids - squareGrid', function (test) {
  var extent = [-77.3876953125, 38.71980474264239, -76.9482421875, 39.027718840211605];
  var cellWidth = 10;
  var units = 'miles';
  var result = Turf.squareGrid(extent, cellWidth, units);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.3876953125, 38.71980474264239],
            [-77.3876953125, 38.86449105454411],
            [-77.20225079850412, 38.86449105454411],
            [-77.20225079850412, 38.71980474264239],
            [-77.3876953125, 38.71980474264239]
          ]
        ]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.3876953125, 38.86449105454411],
            [-77.3876953125, 39.00917736644583],
            [-77.20225079850412, 39.00917736644583],
            [-77.20225079850412, 38.86449105454411],
            [-77.3876953125, 38.86449105454411]
          ]
        ]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.3876953125, 39.00917736644583],
            [-77.3876953125, 39.153863678347555],
            [-77.20225079850412, 39.153863678347555],
            [-77.20225079850412, 39.00917736644583],
            [-77.3876953125, 39.00917736644583]
          ]
        ]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.20225079850412, 38.71980474264239],
            [-77.20225079850412, 38.86449105454411],
            [-77.01680628450825, 38.86449105454411],
            [-77.01680628450825, 38.71980474264239],
            [-77.20225079850412, 38.71980474264239]
          ]
        ]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.20225079850412, 38.86449105454411],
            [-77.20225079850412, 39.00917736644583],
            [-77.01680628450825, 39.00917736644583],
            [-77.01680628450825, 38.86449105454411],
            [-77.20225079850412, 38.86449105454411]
          ]
        ]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.20225079850412, 39.00917736644583],
            [-77.20225079850412, 39.153863678347555],
            [-77.01680628450825, 39.153863678347555],
            [-77.01680628450825, 39.00917736644583],
            [-77.20225079850412, 39.00917736644583]
          ]
        ]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.01680628450825, 38.71980474264239],
            [-77.01680628450825, 38.86449105454411],
            [-76.83136177051237, 38.86449105454411],
            [-76.83136177051237, 38.71980474264239],
            [-77.01680628450825, 38.71980474264239]
          ]
        ]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.01680628450825, 38.86449105454411],
            [-77.01680628450825, 39.00917736644583],
            [-76.83136177051237, 39.00917736644583],
            [-76.83136177051237, 38.86449105454411],
            [-77.01680628450825, 38.86449105454411]
          ]
        ]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-77.01680628450825, 39.00917736644583],
            [-77.01680628450825, 39.153863678347555],
            [-76.83136177051237, 39.153863678347555],
            [-76.83136177051237, 39.00917736644583],
            [-77.01680628450825, 39.00917736644583]
          ]
        ]
      },
      "properties": {}
    }]
  };
  test.equal(result, expected);
});