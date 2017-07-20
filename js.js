	var svgNS = "http://www.w3.org/2000/svg"; 
	var counter = 5; // defines where the snaking begins vertically, 0 is the start.
	var i = -2000; // defines where the snaking begins horrizontally, 0 is the start.
	var waves = 1; // for smooth and equal snaking, this number should be an integer.
	var howManyShapes = 1000; // Make any pattern you like by changing this variable.
	var increase = Math.PI * waves / howManyShapes;
	var step = 50; // defines gradient.
	var depth = 10000; // concerns the vertical length of the window the P's consume.
	var colour = "red";

	function changeRed(x)
	{
		x = "red"
		return x;
	}


	function changePattern(x)
	{
		var rand = Math.round(Math.random() * 1000);
		x = rand;
		howManyShapes = x;
		return x;

	}


	var switched = false;

	function createShape(x, y)
	{
		var newShape = document.createElementNS(svgNS, "use"); // creates shape using two parameters the schema and use.
		var  xlinkns = "http://www.w3.org/1999/xlink"; // xlinks is required for the setAttributeNS
		newShape.setAttributeNS(xlinkns, "href", "#Shape"); // takes the shape from the SVG tag.
		newShape.setAttribute("fill", colour); 
		newShape.setAttribute("x", x); // takes in x parameter and sets x position. 
   		newShape.setAttribute("y", y); // takes in y parameter and sets y position.
   		newShape.setAttribute("transform","scale(0.1,0.2)"); // provides a transformation defining size.
    	return newShape; // returns the shape object.
	}
	

	function myFunction()
	{

		var svg = document.getElementsByTagName('svg')[0]; // gets svg tag and stores in array.

		
			// to assume how the objects will be created and move through the program x and y position ned definition.
  		 if(switched)
  		 {
  		 	var x = i += ((-howManyShapes * step) / 100 ) * 1 ;
  		 }
  		 else
  		 	var x = i += ((howManyShapes * step) / 100 ) * 1 ; // x is initialised to 0 by i. 
		  
		  var y = (Math.abs( Math.sin( counter ) )*depth); // sin defines the type of curve.
		  counter += increase;


		  svg.appendChild(createShape(x,y)); // appends the x y co-ordinates in svg.

			if((x /10)  > window.screen.availWidth)
			{
				switched = true;
			}

			if(x < -2000)
			{
				switched = false; 
			}			

		  setTimeout(myFunction,1); // runs my function every 10 miliseconds
	}