// A simple function for calculating the y value when given x and constants m and b in javascript


{

while(true)

	{

		console.log("");

		var prompt = require("prompt-sync")();
		console.log("This program will calculate the value of y in the formula y = mx + b.");

		console.log("");

		var x = prompt("Please enter the value of x: ");
		console.log("");		

		var m = prompt("Please enter the value of m: ");
		console.log("");	
		
		var b = prompt("Please enter the value of b: ");
		console.log("");		
	
		var y = (m*x) + b;

		console.log("The value of y is " + y); 
		console.log("");


	}

}


