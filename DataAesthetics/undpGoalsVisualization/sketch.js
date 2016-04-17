var backgroundColor;
var isOverRect;


function setup() {
  createCanvas(2000, 2000);

  backgroundColor = color(255);
}

function draw() {
  background(backgroundColor);

  fill(255, 51, 153);
  noStroke();
  rect(0, 50, 2000, 10)

  fill("black");
  rect(0, 0, 2000, 50)
  noStroke();

  //TITLE -- Number 17
  textSize(80);
  textFont("Helvetica");
  textStyle(BOLD);
  fill("white");
  text("17", 10, 60);
  // Title
  fill("white");
  textSize(36);
  textFont("Oswald");
  textStyle(NORMAL);
  text("SUSTAINABLE DEVELOPMENT GOALS FOR THE UN", 90, 42);


  //Number 1 - End Poverty
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("1", 206, 110);
  // End Poverty
  fill("black");
  textSize(50);
  textFont("Oswald");
  textStyle(NORMAL);
  text("END POVERTY", 200, 140);
  // In All its forms...
  fill("black");
  textSize(18);
  textFont("Helvetica");
  textStyle(NORMAL);
  text("in all it's forms", 289, 159);
  textStyle(BOLD);
  text("everywhere.", 407, 159);

  //Number 2 -- End Hunger
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("2", 179, 199);
  // End Hunger
  fill("black");
  textSize(55);
  textFont("special elite");
  textStyle(NORMAL);
  text("Zero Hunger", 200, 215);
  // In All its forms...
  fill(0, 0, 0);
  textSize(16);
  textFont("oswald");
  textStyle(NORMAL);
  text("66 MILLION CHILDREN GO TO SCHOOL HUNGRY.", 244, 240);

  //Number 3 -- Good Health
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("3", 183, 293);
  // End Hunger
  fill("black");
  textSize(40);
  textFont("Abril Fatface");
  textStyle(NORMAL);
  text("Good Health & Well-Being", 200, 295);
  // HIV leading cause...
  fill("black");
  textSize(20);
  textFont("Shadows Into Light");
  textStyle(NORMAL);
  text("HIV is the leading cause of death for women of reproductive age worldwide.", 205, 320);

  //Number 4 -- Education
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("4", 177, 400);
  // End Hunger
  fill("black");
  textSize(60);
  textFont("AMATIC SC");
  textStyle(NORMAL);
  text("QUALITY EDUCATION", 200, 395);
  // HIV leading cause...
  fill("black");
  textSize(17);
  textFont("Quicksand");
  textStyle(BOLD);
  text("More than HALF of children not enrolled in school live in sub-Saharan Africa.", 205, 417);

  //Number 5 -- Gender Equality
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("5", 190, 490);
  // End Hunger
  fill("black");
  textSize(40);
  textFont("Nixie One");
  textStyle(NORMAL);
  text("GENDER EQUALITY", 200, 470);
  // achieve equality...
  fill("black");
  textSize(20);
  textFont("garamond");
  textStyle(ITALIC);
  text("Achieve gender equality & empower all women and girls.", 203, 490);

  //Number 6 -- Clean Water
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("6", 180, 540);
  // End Hunger
  fill("black");
  textSize(40);
  textFont("Anton");
  textStyle(NORMAL);
  text("Clean Water", 200, 545);
  // HIV leading cause...
  fill("black");
  textSize(18);
  textFont("Josefin Slab");
  textStyle(NORMAL);
  text("Ensure access to water and sanitation for all.", 202, 564);

  //Number 7 -- Affordable Energy
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("7", 202, 616);
  // End Hunger
  fill("black");
  textSize(35);
  textFont("Karla");
  textStyle(BOLD);
  text("Affordable & Clean Energy", 200, 620);
  // HIV leading cause...
  fill("black");
  textSize(18);
  textFont("Rokkitt");
  textStyle(NORMAL);
  text("One in five people still lacks access to modern electricity.", 272, 639);

  //Number 8 -- Work & Eccon Growth
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("8", 177, 692);
  // End Hunger
  fill("black");
  textSize(35);
  textFont("PT Sans Narrow");
  textStyle(BOLD);
  text("DECENT WORK & ECCONOMIC GROWTH", 200, 695);
  // HIV leading cause...
  fill("black");
  textSize(18);
  textFont("baskerville");
  textStyle(NORMAL);
  text("Half of the world population lives on 2 dollars a day", 200, 712);

  //Number 9 -- Innovation & Infrastructure
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("9", 180, 777);
  // End Hunger
  fill("black");
  textSize(30);
  textFont("Russo One");
  textStyle(NORMAL);
  text("Better Infrastructure & Innovation", 200, 770);
  // HIV leading cause...
  fill("black");
  textSize(16);
  textFont("PT Sans Narrow");
  textStyle(NORMAL);
  text("Build resilient infrastructure, promote sustainable industrialization, foster innovation.", 202, 790);

  //Number 10 -- Reduced Inequalities
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("10", 144, 853);
  // End Hunger
  fill("black");
  textSize(35);
  textFont("Quicksand");
  textStyle(NORMAL);
  text("REDUCED INEQUALITIES", 200, 845);
  // HIV leading cause...
  fill("black");
  textSize(16);
  textFont("Old Standard TT");
  textStyle(ITALIC);
  text("Reduce inequality within and among countries.", 305, 863);

  //Number 11 -- Sustainable Cities
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("11", 180, 910);
  // End Hunger
  fill("black");
  textSize(35);
  textFont("Rock Salt");
  textStyle(NORMAL);
  text("Build Sustainable Cities", 200, 915);
  // HIV leading cause...
  fill("black");
  textSize(18);
  textFont("Fjalla One");
  textStyle(NORMAL);
  text("Make cities inclusive, safe, resilient and sustainable", 202, 940);

  //Number 12 -- Responsible Consumption
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("12", 122, 1018);
  // End Hunger
  fill("black");
  textSize(35);
  textFont("Roboto Slab");
  textStyle(NORMAL);
  text("Resonsible Consumption and Production", 200, 1000);
  // subtitle...
  fill("black");
  textSize(20);
  textFont("Nixie One");
  textStyle(NORMAL);
  text("Ensure sustainable consumption and production patterns.", 202, 1020);

  //Number 13 -- Climate Action
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("13", 146, 1100);
  // End Hunger
  fill("black");
  textSize(40);
  textFont("Sigmar One");
  textStyle(NORMAL);
  text("Climate Action", 200, 1075);
  // subtitle...
  fill("black");
  textSize(20);
  textFont("Poiret One");
  textStyle(NORMAL);
  text("Take urgent action to combat climate change and its impacts.", 202, 1095);

  //Number 14 -- Life Bellow Water
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("14", 176, 1190);
  // End Hunger
  fill("black");
  textSize(35);
  textFont("Hammersmith One");
  textStyle(NORMAL);
  text("Preserve Life Bellow Water", 200, 1150);
  // subtitle...
  fill("black");
  textSize(20);
  textFont("Karla");
  textStyle(NORMAL);
  text("Conserve and sustainably use the oceans, seas & marine resources.", 202, 1170);

  //Number 15 -- Life on Land
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("15", 143, 1260);
  // End Hunger
  fill("black");
  textSize(30);
  textFont("Comfortaa");
  textStyle(NORMAL);
  text("PRESERVE LIFE ON LAND", 200, 1225);
  // subtitle...
  fill("black");
  textSize(23);
  textFont("Gochi Hand");
  textStyle(NORMAL);
  text("Conserve and sustainably use the oceans, seas & marine resources.", 202, 1247);

  //Number 16 -- Peace, Justice and Strong Institutions
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("16", 150, 1330);
  // End Hunger
  fill("black");
  textSize(40);
  textFont("Handlee");
  textStyle(NORMAL);
  text("Peace, Justice and Strong Institutions", 200, 1300);
  // subtitle...
  fill("black");
  textSize(20);
  textFont("Economica");
  textStyle(NORMAL);
  text("CONSERVE AND SUSTAINBLY USE THE OCEANS, SEAS & MARINE RESOURCES.", 328, 1324);

  //Number 17 -- Partnerships for the Goals
  textSize(60);
  textFont("Helvetica");
  textStyle(BOLD);
  fill(255, 51, 153);
  text("17", 150, 1420);
  // End Hunger
  fill("black");
  textSize(40);
  textFont("Passion One");
  textStyle(NORMAL);
  text("Partnerships for the Goals", 200, 1365);
  // subtitle...
  fill("black");
  textSize(20);
  textFont("Economica");
  textStyle(ITALIC);
  text("Revitalize the global partnership for sustainable development.", 200, 1385);




}

function mousePressed() {
    backgroundColor = color(255, 51, 153);
}

function keyPressed() {
  backgroundColor = color(255);
}

  

function windowResized() {
  resizeCanvas(2000, 1500);
}