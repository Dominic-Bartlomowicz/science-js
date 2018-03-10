// A simple Mass-Energy equivalence calculator program, first derived by theoretical physicist Albert Einstein in the year 1905.  


{

while(true) 

	{

		console.log("");

		var prompt = require("prompt-sync")();
		var mass = prompt("Please enter a mass value in kilograms: ");

		while (isNaN(mass) || mass < 0)

			{
				console.log("");
				var mass = prompt("Invalid value. Please enter a mass value in kilograms: ");
				console.log("");
			}
		

		console.log("");

		var energy = mass * (299792458 * 299792458);

		console.log("The energy energy calculated is " + energy + " joules"); 

		console.log("");

	}

}


