// A simple program that prompts the user for an amount of numbers and then sums the entries.


{

console.log("");

var prompt = require("prompt-sync")();

console.log("This is a simple addition calculator.");
		
var numbers = prompt("Please enter the amount of numbers that you would like to add: ");

console.log("");

var i;
var sum = 0;
var inputs = [];


for(i=1; i<=numbers; i++)
	
	{
		inputs.push(prompt("Please enter number " + i + ": "));
	}


for(i=0; i<numbers; i++)

	{
		var arraynumber = parseFloat(inputs[i]);
		sum += arraynumber;
	}

console.log("");

console.log("The sum of the " + i + " given numbers is: " + sum);

}









