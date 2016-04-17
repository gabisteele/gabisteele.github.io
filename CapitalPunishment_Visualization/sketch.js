var minVal = 1000;
var maxVal = 10000;
var table;
var landingImg;
var methodsImg;
var isOverIcon;
var mouseOverButton;
var isOverC = false;
var isOverT = false;
var isOverA = false;
var isOverYr = false;
var resetDiv;


var prisonerName = [];
var age = [];
var state = [];
var sex = [];
var race = [];
var method = [];

var posX = 100;
var posY = 7600;

var yearsToggle = 0;
var yearsArray = [1997, 1978, 1979, 1980, 1981, 9182, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
var stateArray = ["TX", "OK", "VA", "FL", "MI", "GA", "AL", "OH", "NC", "SC", "AZ", "LA", "AR", "MS", "IN", "DE", "CA", "IL", "NV", "UT", "TN", "MD", "WA", "NE", "MT", "PA", "KY", "ID", "SD", "OR", "CT", "NM", "CO", "WY"];

console.log(state = ["TX"]);

function preload() {
  table = loadTable("execution_database.csv", "csv", "header");
  landingImg = loadImage("landing.jpg");
  methodsImg = loadImage("methods.jpg");
}



function setup() {
  createCanvas(windowWidth, 8500);

  ////print(table.getRowCount() + " total rows in table");
  // print(table.getColumnCount() + " total columns in table");

  background("black");
  image(landingImg, 0, 3300);
  image(landingImg, 0, 0);
  image(methodsImg, 0, 920);
  fill(255);
  textSize(12);
  textFont("Helvetica");
  //text("State", posX, posY);

  noStroke();
  fill(255);
  rect(0, posY + 815, width, 2, 3, 3);

  textSize(40);
  textStyle(BOLD);
  text("Number of People Executed per Year Since 1979", 70, posY + 840);
  textSize(15);
  textStyle(NORMAL);

  // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }

  var data = table.getArray();

  var myDate = table.getColumn(0);
  prisonerName = table.getColumn(1);
  age = table.getColumn(2);
  sex = table.getColumn(3);
  race = table.getColumn(4);
  state = table.getColumn(6);
  method = table.getColumn(8);

  console.log(state);

  // var counter2 = 0;
  //   for (var s = 0; s < state[counter2]; s++){
  //     text("state");
  //   }

  // // for each prisoner
  var counter = 0;
  var currentYear = 0;

  //image(icon, 100, 100);

  for (var i = 0; i < state.length; i++) {
    //ellipse()

    if (currentYear != myDate[i]) {
      counter = 0;
      fill("grey");
      text(myDate[i], 20 + counter, v + posY + 5);
    }


    // else if (state[i] == "AL") {
    //   fill('blue');
    // } else if (state[i] == "AL"){
    //   fill()
    // }
    // else {
    //   fill('white');
    //}
    fill(255);
    currentYear = myDate[i];
    counter += 15;

    var v = map(myDate[i], 2015, 1977, 0, 800);

    // print(myDate[i]);

    ellipse(counter + 50, v + posY, 12, 12);
    //   // noStroke();
    //   // if (state[i] == 'TX') {
    //   //   fill('red');
    //   //   //console.log(state[i]);
    //   //   ellipse(counter + 50, v + posY, 12, 12);



    // }
  }

  button = createButton('Texas');
  button.position(20, posY - 80);
  button.size(110, 50);
  button.class('Texas');
  button.style('color', 'white');
  button.style('font-size', '200%');
  button.style('background', 'transparent');
  button.style('font-weight', 'bold');
  button.style('font-family', 'helvetica');
  button.mousePressed(changeBG);

  button = createButton('Oklahoma');
  button.position(150, posY - 80);
  button.size(180, 50);
  button.class('Texas');
  button.style('color', 'white');
  button.style('font-size', '200%');
  button.style('background', 'transparent');
  button.style('font-weight', 'bold');
  button.style('font-family', 'helvetica');
  button.mousePressed(changeOK);
  
  button = createButton('Virginia	');
  button.position(350, posY - 80);
  button.size(180, 50);
  button.class('Texas');
  button.style('color', 'white');
  button.style('font-size', '200%');
  button.style('background', 'transparent');
  button.style('font-weight', 'bold');
  button.style('font-family', 'helvetica');
  button.mousePressed(changeVA);
  
  button = createButton('Florida');
  button.position(550, posY - 80);
  button.size(180, 50);
  button.class('Texas');
  button.style('color', 'white');
  button.style('font-size', '200%');
  button.style('background', 'transparent');
  button.style('font-weight', 'bold');
  button.style('font-family', 'helvetica');
  button.mousePressed(changeFL);
  
  button = createButton('Missouri');
  button.position(750, posY - 80);
  button.size(180, 50);
  button.class('Texas');
  button.style('color', 'white');
  button.style('font-size', '200%');
  button.style('background', 'transparent');
  button.style('font-weight', 'bold');
  button.style('font-family', 'helvetica');
  button.mousePressed(changeMI);
  
   button = createButton('Georgia');
  button.position(950, posY - 80);
  button.size(180, 50);
  button.class('Texas');
  button.style('color', 'white');
  button.style('font-size', '200%');
  button.style('background', 'transparent');
  button.style('font-weight', 'bold');
  button.style('font-family', 'helvetica');
  button.mousePressed(changeGA);
  
  button = createButton('Alabama');
  button.position(1150, posY - 80);
  button.size(180, 50);
  button.class('Texas');
  button.style('color', 'white');
  button.style('font-size', '200%');
  button.style('background', 'transparent');
  button.style('font-weight', 'bold');
  button.style('font-family', 'helvetica');
  button.mousePressed(changeAL);
  
  
  // resetDiv = createDiv('');
  // resetDiv.size(width, posY - 100);
  // resetDiv.mousePressed(reset);
  
  button = createButton('');
  button.position(10, posY - 10);
  button.size(width, 800);
  button.style('background', 'transparent');
  button.style('color', 'transparent');
  button.style('border', 'transparent');
  button.mousePressed(reset);

} // setup


function changeBG() {
  textSize(20);
  textStyle(BOLD);
  fill(255);
  text("531 people have been executed in the State of Texas", 1000, posY + 810)
  
    // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }

  var data = table.getArray();
  var myDate = table.getColumn(0);
  var counter = 0;
  var currentYear = 0;
  for (var i = 0; i < state.length; i++) {
    if (currentYear != myDate[i]) {
      counter = 0;
    }
    fill(255);
    currentYear = myDate[i];
    counter += 15;
    var v = map(myDate[i], 2015, 1977, 0, 800);
    noStroke();
    if (state[i] == 'TX') {
      fill('red');
      //console.log(state[i]);
      ellipse(counter + 50, v + posY, 12, 12);
    } else {
      fill(255);
    }
  }
}

function changeOK() {
  textSize(20);
  textStyle(BOLD);
  fill(255);
  text("112 people have been executed in the State of Oklahoma", 1000, posY + 790)
  
    // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }

  var data = table.getArray();
  var myDate = table.getColumn(0);
  var counter = 0;
  var currentYear = 0;
  for (var i = 0; i < state.length; i++) {
    if (currentYear != myDate[i]) {
      counter = 0;
    }
    fill(255);
    currentYear = myDate[i];
    counter += 15;
    var v = map(myDate[i], 2015, 1977, 0, 800);
    noStroke();
    if (state[i] == 'OK') {
      fill('maroon');
      //console.log(state[i]);
      ellipse(counter + 50, v + posY, 12, 12);
    } else {
      fill(255);
    }
  }
}

function changeVA() {
  textSize(20);
  textStyle(BOLD);
  fill(255);
  text("111 people have been executed in the State of Virginia", 1000, posY + 770)
  
    // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }

  var data = table.getArray();
  var myDate = table.getColumn(0);
  var counter = 0;
  var currentYear = 0;
  for (var i = 0; i < state.length; i++) {
    if (currentYear != myDate[i]) {
      counter = 0;
    }
    fill(255);
    currentYear = myDate[i];
    counter += 15;
    var v = map(myDate[i], 2015, 1977, 0, 800);
    noStroke();
    if (state[i] == 'VA') {
      fill(255, 80, 80);
      //console.log(state[i]);
      ellipse(counter + 50, v + posY, 12, 12);
    } else {
      fill(255);
    }
  }
}


function changeFL() {
  textSize(20);
  textStyle(BOLD);
  fill(255);
  text("91 people have been executed in the State of Florida", 1000, posY + 750)
  
    // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }

  var data = table.getArray();
  var myDate = table.getColumn(0);
  var counter = 0;
  var currentYear = 0;
  for (var i = 0; i < state.length; i++) {
    if (currentYear != myDate[i]) {
      counter = 0;
    }
    fill(255);
    currentYear = myDate[i];
    counter += 15;
    var v = map(myDate[i], 2015, 1977, 0, 800);
    noStroke();
    if (state[i] == 'FL') {
      fill(51, 102, 204);
      //console.log(state[i]);
      ellipse(counter + 50, v + posY, 12, 12);
    } else {
      fill(255);
    }
  }
}

function changeMI() {
  textSize(20);
  textStyle(BOLD);
  fill(255);
  text("86 people have been executed in the State of Missouri", 1000, posY + 730);
  
    // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }

  var data = table.getArray();
  var myDate = table.getColumn(0);
  var counter = 0;
  var currentYear = 0;
  for (var i = 0; i < state.length; i++) {
    if (currentYear != myDate[i]) {
      counter = 0;
    }
    fill(255);
    currentYear = myDate[i];
    counter += 15;
    var v = map(myDate[i], 2015, 1977, 0, 800);
    noStroke();
    if (state[i] == 'MO') {
      fill(0, 204, 255);
      //console.log(state[i]);
      ellipse(counter + 50, v + posY, 12, 12);
    } else {
      fill(255);
    }
  }
}

function changeGA() {
  textSize(20);
  textStyle(BOLD);
  fill(255);
  text("60 people have been executed in the State of Georgia", 1000, posY + 710)
  
    // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }

  var data = table.getArray();
  var myDate = table.getColumn(0);
  var counter = 0;
  var currentYear = 0;
  for (var i = 0; i < state.length; i++) {
    if (currentYear != myDate[i]) {
      counter = 0;
    }
    fill(255);
    currentYear = myDate[i];
    counter += 15;
    var v = map(myDate[i], 2015, 1977, 0, 800);
    noStroke();
    if (state[i] == 'GA') {
      fill(0, 0, 153);
      //console.log(state[i]);
      ellipse(counter + 50, v + posY, 12, 12);
    } else {
      fill(255);
    }
  }
}

function changeAL() {
  fill(255);
  text("56 people have been executed in the State of Alabama", 1000, posY + 690);
  
  // count the rows in our table
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }
  var data = table.getArray();
  var myDate = table.getColumn(0);
  prisonerName = table.getColumn(1);
  age = table.getColumn(2);
  sex = table.getColumn(3);
  race = table.getColumn(4);
  state = table.getColumn(6);
  method = table.getColumn(8);
  var counter = 0;
  var currentYear = 0;
  for (var i = 0; i < state.length; i++) {
    if (currentYear != myDate[i]) {
      counter = 0;
    }
    fill(255);
    currentYear = myDate[i];
    counter += 15;
    var v = map(myDate[i], 2015, 1977, 0, 800);
    noStroke();
    if (state[i] == 'AL') {
      fill('blue');
      //console.log(state[i]);
      ellipse(counter + 50, v + posY, 12, 12);
    } 
  }
}




function reset() {
  //background(0, 0, 0);
  var count = table.getRowCount();
  // parse the data returned by loadStrings()
  var rowHeight = 10;
  // loop through all rows to determine global minumum and maximum
  for (var row = 0; row < count; row++) {
    // loop through all the columns
    for (var col = 0; col < 10; col++) {
      var val = table.getString(row, col);
      // display the text on the canvas
      val = parseFloat(val);
      if (minVal > val)
        minVal = val;
      if (maxVal < val)
        maxVal = val;
    }
  }

  var data = table.getArray();
  var myDate = table.getColumn(0);
  prisonerName = table.getColumn(1);
  age = table.getColumn(2);
  sex = table.getColumn(3);
  race = table.getColumn(4);
  state = table.getColumn(6);
  method = table.getColumn(8);

  var counter = 0;
  var currentYear = 0;

  for (var i = 0; i < state.length; i++) {

    if (currentYear != myDate[i]) {
      counter = 0;
    }


    fill(255);
    currentYear = myDate[i];
    counter += 15;

    var v = map(myDate[i], 2015, 1977, 0, 800);

    ellipse(counter + 50, v + posY, 12, 12);
    
    fill("black");
    rect(9990, posY + 640, 800, 185);
  
  noStroke();
  fill(255);
  rect(0, posY + 815, width, 2, 3, 3);

  // textSize(45);
  // textStyle(BOLD);
  // text("Number of People Executed per Year Since 1979", 105, posY + 840);
  // textSize(15);
  // textStyle(NORMAL);

  }
}