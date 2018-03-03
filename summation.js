// A function which sums any number from i to n, based on a function of x entered by the user

function summation(i,n)

{

var sum = 0; // Initial value of sum

for (var x = i; x <= n; x++)

	{

		// Let f(x) = 2x (modify for other functions)

		sum += 2*(x);

	}

return sum;

}

// Test: i = 1 to n = 5, expected output = (2*1)+(2*2)+(2*3)+(2*4)+(2*5) = 30

console.log(summation(1,5));
