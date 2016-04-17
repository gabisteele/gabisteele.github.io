// Position Variables
var x = 0;
var y = 0;

//location arrays
var secondsx = [];
var secondsy = [];
var minutesx = [];
var minutesy = [];
var hoursx = [];
var hoursy = [];
 
// Speed - Velocity
var vx = 0;
var vy = 0;
 
// Acceleration
var ax = 0;
var ay = 0;

// Time

var minutes;
var sec;
var hours;

// Gravity
var vMultiplier = 0.007;
var bMultiplier = 0.6;


function setup() {
  // create a canvas to draw on
    createCanvas(windowWidth, windowHeight);
  //set fill to white
    fill(255);
}

function draw() {
  // refresh bkground to black
   background(0);
    
  // call ball move function to move
    ballMove();
    
  //call update time function
    updateTime();
  
//----------------------------
///// SECONDS
  
  // set fill for seconds
  fill(255);
  
  if (second() === 0) {
   secondsx = [];
   secondsy = [];
}

    // for loop to create balls based on sec
    for (var i = secondsx.length; i < second(); i++){
      var newx = random(windowWidth - 20);
      var newy = random(windowHeight - 20);
      secondsx.push(newx);
      secondsy.push(newy);
    }
    for (var i = 0; i < secondsx.length; i++) {
    ellipse(secondsx[i], secondsy[i], 10, 10);
    
    }
/// -----------------------------------------
///MINUTES
    
 if (minute() === 0) {
   minutesx = [];
   minutesy = [];
}



    // for loop to create balls based on sec
    for (var i = minutesx.length; i < minute(); i++){
      var newx = random(windowWidth - 20);
      var newy = random(windowHeight - 20);
      minutesx.push(newx);
      minutesy.push(newy);
    }
    
    // set fill for minutes
    fill(color(100, 300, 400, 150))
    
    for (var i = 0; i < minutesx.length; i++) {
    ellipse(minutesx[i], minutesy[i], 40, 40);
    
    }
    
////--------------------------    
//// HOURS
   
   if (hour() === 0) {
   hoursx = [];
   hoursy = [];
}
  // for loop to create balls based on sec
    for (var i = hoursx.length; i < hour(); i++){
      var newx = random(windowWidth - 20);
      var newy = random(windowHeight - 20);
      hoursx.push(newx);
      hoursy.push(newy);
    }
    
    fill(color(0, 0, 255, 150))
    
    // for loop to create balls based on hour
    for (var i = 0; i < hoursx.length; i++) {
    ellipse(hoursx[i], hoursy[i], 80, 80);
    
    }
   
}

//function to apply movement to ball
function ballMove() {
  
	// set aceleration == to aceleration for x and y
	ax = accelerationX;
	ay = accelerationY;

  // apply aceleration to speed for x and y 
	vx = vx + ay;
	vy = vy + ax;
	
	// apply gravity and speed to x and y positions
	y = y + vy * vMultiplier; 
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the canvas
	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * bMultiplier; 
 	}
 	if (x > width - 20) { 
 		x = width - 20; 
 		vx = -vx * bMultiplier; 
 	}
 	if (y > height - 20) { 
 		y = height - 20; 
 		vy = -vy * bMultiplier; 
 	}
	
}

	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * bMultiplier; 
 	}
 	if (x > width - 20) { 
 		x = width - 20; 
 		vx = -vx * bMultiplier; 
 	}
 	if (y > height - 20) { 
 		y = height - 20; 
 		vy = -vy * bMultiplier; 
 	}
	

function updateTime(){
  sec = second();
  minutes = minute();
  hours = hour();
}

