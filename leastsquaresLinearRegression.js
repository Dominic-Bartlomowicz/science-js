// A program that creates an equation y = mx + b based on user inputs and the least squares method. 
// Required inputs: x data values, y data values. Outputs: intermediate calculations and an equation
// of the form "y = mx + b", where m and b are solved constants.  


{

while(true)

	{

		console.log("");

		var prompt = require("prompt-sync")();
		
		var pointsNum = prompt("Please enter the number of points to analyse: ");
		console.log("");

		var xValues = [];
		var yValues = [];


		for (var i = 1; i <= pointsNum; i++)

			{
				xValues.push(prompt("Please enter x value " + i + ": "));
				yValues.push(prompt("Please enter y value " + i + ": "));
				console.log("");
			}


		console.log("x values = " + xValues);
		console.log("");

		console.log("y values = " + yValues);
		console.log("");

		var xsum = 0;
		var xsumsquared = 0;

		var ysum = 0;
		var ysumsquared = 0;

		var xysum = 0;

		for (var i = 0; i < pointsNum; i++)
	
			{
				var xnumber = parseFloat(xValues[i]);
				var ynumber = parseFloat(yValues[i]);
 				
				xsum += xnumber;				
				ysum += ynumber;

				xsumsquared += (xnumber * xnumber);
				ysumsquared += (ynumber * ynumber);

				xysum += (xnumber * ynumber);
			}

		
		console.log("The sum of the x values is " + xsum);
		console.log("The sum of the x values squared is " + xsumsquared);
		console.log("");
		console.log("The sum of the y values is " + ysum);
		console.log("The sum of the y values squared is " + ysumsquared);
		console.log("");
		console.log("The xy sum is " + xysum);


		var m = ((pointsNum * xysum) - (xsum * ysum)) / ((pointsNum * xsumsquared) - (xsum * xsum));

		console.log("");
		console.log("The constant m has a value of: " + m);


		var b = ((xsumsquared * ysum) - (xsum * xysum)) / ((pointsNum * xsumsquared) - (xsum * xsum));

		console.log("The constant b has a value of: " + b);
		console.log("");
		console.log("");

		
		if (b < 0)

		{

			console.log("Therefore, the linear equation is y = " + m + "x" + b);

		}

		
		else

		{

			console.log("Therefore, the linear equation is y = " + m + "x +" + b);

		}


	}

}


