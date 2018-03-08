
// A simple program that determines whether a number n is a prime number.


{

console.log("");

var prompt = require("prompt-sync")();
var n = prompt("Please enter a positive integer: ");
console.log("");


for(var i = 2; i < n; i++)

	{
		if(n%i == 0)

			{
						return(console.log(n + " is not a prime number\n"));
			}
				
	}

	
console.log((n + " is a prime number"));


}


