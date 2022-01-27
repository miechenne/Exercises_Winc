// No arguments
const wall1 = function() {
    console.log("The wall has been painted red");
};
wall1();

// Single argument
const wall2 = function(color) {
    console.log("The wall has been painted " + color)
};
wall2("green");
wall2("brown");

// Multiple arguments
const wall3 = function(whichWall, color) {
    console.log("The" + whichWall + " wall has been painted" + color); 
};
wall3("south-east", "orange");
wall3("north", "yellow");


wall3("yellow", "north"); 


const wall4 = function(color, whichWall) {
    console.log("The " + whichWall + " wall has been painted " + color);
};
wall4("south-east", "purple"); 


const wall5 = function(color, whichWall) {
    console.log("The " + whichWall + " wall has been painted " + color);
};
wall5("purple", "west");