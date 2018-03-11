// A simple program that prompts the user for an amount of numbers and then multiplies the entries.


{

console.log("");

var prompt = require("prompt-sync")();

console.log("This is a simple multiplication calculator.");
		
var numbers = prompt("Please enter the amount of numbers that you would like to multiply: ");

console.log("");

var i;
var multiple = 1;
var inputs = [];


for(i=1; i<=numbers; i++)
	
	{
		inputs.push(prompt("Please enter number " + i + ": "));
	}


for(i=0; i<numbers; i++)

	{
		var arraynumber = parseFloat(inputs[i]);
		multiple *= arraynumber;
	}

console.log("");

console.log("The product of the " + i + " given numbers is: " + multiple);

console.log("");

}

