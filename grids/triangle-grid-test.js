Tinytest.add('grids - triangleGrid', function (test) {
  var extent = [-77.3876953125, 38.71980474264239, -76.9482421875, 39.027718840211605];
  var cellWidth = 10;
  var units = 'miles';
  var result = turf.triangleGrid(extent, cellWidth, units);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.823364, -33.553984]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.823364, -33.510578106429485]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.823364, -33.46717221285897]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.823364, -33.423766319288454]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.823364, -33.38036042571794]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.823364, -33.33695453214742]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7712789082931, -33.553984]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7712789082931, -33.510578106429485]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7712789082931, -33.46717221285897]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7712789082931, -33.423766319288454]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7712789082931, -33.38036042571794]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7712789082931, -33.33695453214742]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7191938165862, -33.553984]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7191938165862, -33.510578106429485]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7191938165862, -33.46717221285897]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7191938165862, -33.423766319288454]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7191938165862, -33.38036042571794]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.7191938165862, -33.33695453214742]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6671087248793, -33.553984]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6671087248793, -33.510578106429485]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6671087248793, -33.46717221285897]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6671087248793, -33.423766319288454]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6671087248793, -33.38036042571794]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6671087248793, -33.33695453214742]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6150236331724, -33.553984]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6150236331724, -33.510578106429485]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6150236331724, -33.46717221285897]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6150236331724, -33.423766319288454]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6150236331724, -33.38036042571794]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.6150236331724, -33.33695453214742]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5629385414655, -33.553984]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5629385414655, -33.510578106429485]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5629385414655, -33.46717221285897]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5629385414655, -33.423766319288454]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5629385414655, -33.38036042571794]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5629385414655, -33.33695453214742]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5108534497586, -33.553984]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5108534497586, -33.510578106429485]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5108534497586, -33.46717221285897]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5108534497586, -33.423766319288454]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5108534497586, -33.38036042571794]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-70.5108534497586, -33.33695453214742]
      },
      "properties": {}
    }]
  };
  test.equal(result, expected);
});