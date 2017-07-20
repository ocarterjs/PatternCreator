var svgNS = "http://www.w3.org/2000/svg";
var counter = 5; // Defines where the snaking begins vertically, 0 is the start.
var i = -2000; // Defines where the snaking begins horrizontally, 0 is the start.
var waves = 1; // For smooth and equal snaking, this number should be an integer.
var howManyShapes = 1000; // Number of shapes.
var increase = Math.PI * waves / howManyShapes;
var step = 50; // Gradient.
var depth = 10000; // Vertical length of the window that the SVG shape consumes.
var switched = false; // has pattern reached end of window.

function changePattern(x){
	var rand = Math.round(Math.random() * 1000);
	x = rand;
	howManyShapes = x;
	return x;
}

function createShape(x, y){
	var newShape = document.createElementNS(svgNS, "use"); // Creates shape using two parameters the schema and use.
	var  xlinkns = "http://www.w3.org/1999/xlink"; // Xlinks is required for the setAttributeNS
	newShape.setAttributeNS(xlinkns, "href", "#Shape"); // Takes the shape from the SVG tag.
	newShape.setAttribute("x", x); // Takes in x parameter and sets x position.
	newShape.setAttribute("y", y); // Takes in y parameter and sets y position.
	newShape.setAttribute("transform","scale(0.1,0.2)"); // Provides a transformation defining size.
	return newShape; // Returns the shape object.
}

// Main Function Called on Click.
function myFunction(){
	var svg = document.getElementsByTagName('svg')[0]; // Gets svg tag and stores in array.

	if(switched){ // If switched (reached end of window) Alter the directional angle.
		var x = i += ((-howManyShapes * step) / 100 ) * 1 ;
	}
	else{
		var x = i += ((howManyShapes * step) / 100 ) * 1 ; // X is initialised to 0 by i.
		var y = (Math.abs( Math.sin( counter ) )*depth); // Sin/Cos/Tan defines the type of curve.
		counter += increase;
	 }
	 svg.appendChild(createShape(x,y)); // Appends the x & y co-ordinates in svg.
	 if((x /10)  > window.screen.availWidth){ // When the x value exceeds screenwidth available
		 switched = true; // Change Direction.
	 }
	 if(x < -2000){ // Change the direction Back.
		 switched = false;
	 }
	 setTimeout(myFunction,1); // Runs myFunction every 10 miliseconds
}
