var table;
var myFont;

function preload() {
  // table data structure is comma separated values "csv"
  // and contains a header specifying the column labels
  table = loadTable("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.csv", "csv", "header");

  myFont = loadFont('RobotoCondensed-Bold.ttf');

  
}

function draw() {
    background("black");
    noFill();
    
    fill("white");
    textFont(myFont);
    textStyle("BOLD");
    textSize("30");
    text("EARTHQUAKES ACROSS THE GLOBE", 30, 50);
    textSize("18");
    text("Circles represent all earthquakes that have occured today", 30, 70);
    textSize("14");
    text("The radius of the circle is defined by the magnitude of the quake", 30, 100);
    text("The position of the circle reflects how deep it went into the earth,", 30, 115);
    text("+ time of day it occured based on the big circle as a clock.", 30, 130);
    
    for (var i = windowHeight; i > 0; i = i - windowHeight/20) {
      noStroke();
      fill(
        map(i,windowHeight,0,5,45),  // hue
        255,                          // saturation
        255                           // brightness
      );
      ellipse(windowWidth/2, windowHeight/2, i+10, i+10);
    }

    fill(255, 55, 55, 100);
   for (var r = 0; r < table.getRowCount(); r++) {
      var row = table.getRow(r);
      var mag = row.getNum(4);
      var depth = row.getNum(3);
    //   var time = row.getNum(0);
      
    // for(var c= 0, c <table.getColumnCount(); c++){
    // var timeStamp = table.getstring(r, c)
    // var hours =  
    
      noStroke();
      ellipse(
        windowWidth/2, // position x 
        depth, // position y
        mag*10, 
        mag*10
      );


    // stroke(255,0,0);
    // strokeWeight(2);
    // line(windowWidth/2, windowHeight/2, windowWidth/2, depth);
    
  

   }




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  //count the columns
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");

  print(table.getColumn("mag"));

  //cycle through the table
  for (var r = 0; r < table.getRowCount(); r++) {
    var magn = table.getColumn("mag");
    text(magn,10,10);
    
    for (var c = 0; c < table.getRowCount(); c++) {
    var magn = table.getColumn("depth");
    var timeStamp 
    text(magn,20,60);  
    
    }
  }
  colorMode(HSB, 255);
  
   // for (var c = 0; c < table.getColumnCount(); c++) {
      
      // print(table.getString(r, c));
      // if (c === 0) {
      //     // grab the first column content, a time stamp
      //     var timeStamp = table.getString(r, c);
      //     // convert to a UNIX time stamp using the JavaScript Date type 
      //     print(new Date(timeStamp).getTime());
      //     // grab just the hours of the earthquake time
      //     print(new Date(timeStamp).getHours());
      //     // grab just the minutes of the earthquake time
      //     print(new Date(timeStamp).getMinutes());
      // }
   // }
}