
// A simple function that determines whether a number n is a prime number.

function prime(n)

{

for(var i = 2; i < n; i++)

	{
		if(n%i == 0)

			{
				return(console.log(n + " is not a prime number"));
			}
				
	}

console.log((n + " is a prime number"));

}


// Testing prime numbers (3,5,7) and non-prime (8,10)

prime(3);
prime(5);
prime(7);
prime(8);
prime(10);
