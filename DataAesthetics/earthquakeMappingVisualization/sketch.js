// LEAFLET.JS EARTHQUAKE VISUALIZATION
// USGS DATA - SOURCE UPDATED EVERY 5 MINUTES
// JavaScript library available at http://leafletjs.org/

var map; // global
var canvas; // p5 canvas
var quakes = []; // array of earthquakes 
var mags = []; // array of magnitudes
var depths = [];
var slider; // UI for setting minimum magnitude
var depthSlider;
var magnitude; // div for storing min magnitude from slider
var depthMin; // div for storing min depth
var depth; // UI for setting min depth

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); // full window p5 canvas
  canvas.parent('map'); // make p5 and leaflet use the same canvas (and z-index)
  initLeaflet(); // load leaflet functions and creat map and defined view
  loadStrings("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv", parseSource); // load source, parse when done

  // title context
  var div = createDiv('<b>Daily Earthquake Activity</b>');
  div.id("title");
  div.position(150, 35);

  // differentiate legend from map
  // var txt = createDiv('');
  // txt.id("title");
  // txt.position(0, 0);

  // UI slider Mag
  slider = createSlider(0, 10, 1);
  slider.addClass("slider");
  // slider.position(width-450, 25);
  slider.parent("moreinfo");

  // mag slider numeric feedback
  magnitude = createDiv('Min magnitude: ' + slider.value());
  magnitude.addClass("slidertxt");
  // magnitude.position(width - 250, 35);
  magnitude.parent("moreinfo");

  // UI slider Depth
  depthSlider = createSlider(0, 10, 1);
  depthSlider.addClass("slider");
  // depthSlider.position(width-450, 25);
  depthSlider.parent("moreinfo");

  // depth slider numeric feedback
  depth = createDiv('Min depth: ' + slider.value());
  depth.addClass("slidertxt");
  // depth.position(width - 250, 35);
  depth.parent("moreinfo");

}

function draw() {
  // hide and show individual quakes by checking against slider threshold
  for (var i = 1; i < mags.length; i++) {
    if (mags[i] < slider.value() || depths[i] < depthSlider.value())
      quakes[i].setRadius(0);
    else
      quakes[i].setRadius(mags[i]);
  }
  magnitude.html("MAGNITUDE IS GREATER THAN " + slider.value() + " ");
  depth.html("DEPTH IS GREATER THAN " + depthSlider.value() + " ");

}

function setColor(_magnitude) {
  var startColor = color(204, 0, 0, 120);
  var endColor = color(128, 0, 0, 120);
  var interpolatedColor = lerpColor(startColor, endColor, _magnitude / 30);
  return interpolatedColor;
}

function setColor(_depth) {
  var startColor = color(204, 0, 0, 120);
  var endColor = color(255, 255, 0);
  var interpolatedColor = lerpColor(startColor, endColor, _depth / 50);
  return interpolatedColor;
}

function parseSource(data) {
  for (var i = 1; i < data.length; i++) {
    var row = split(data[i], ","); // split every row by the comma
    mags[i] = row[4];
    depths[i] = row[3];


    // create custom leaflet marker
    quakes[i] = L.circleMarker([row[1], row[2]], {
      stroke: true,
      color: '#800000',
      weight: 15,
      opacity: 0.3,
      fillOpacity: 0.8,
      fillColor: setColor(row[4]),
    });

    var place = row[13].substr(1);

    quakes[i].addTo(map).setRadius(mag[i]).bindPopup("<b>" +
      "<b> Magnitude: <b/>" + row[4] + "<b> Location: <b/>" + place + "<b> Depth: <b/>" + row[3] + "<b> Time: <b/>" + row[0]); // make new labeled markers at lat, lon,
    
  }
}

// init leaflet using a custom mapbox
// if you move this to a separate js file remember to recall it in the index after src
function initLeaflet() {
  // your access token here
  L.mapbox.accessToken = 'pk.eyJ1IjoiZ2FiaXN0ZWVsZSIsImEiOiJjaWdiM2EwMnExeHhjdXVtMzh0NnB4MWQ0In0.oULHiFggMj3Dp6aLvPzd-g';
  map = L.mapbox.map('map', 'gabisteele.bbe99ae6').setView([20, 0], 2);

  function onMapClick(e) {
    // leaflet needs this function, no need to do anything here
  }

  map.on('click', onMapClick);
}