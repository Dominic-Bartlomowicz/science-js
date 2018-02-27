// A function which sums any number from i to n, based on a function entered by the user


function summation(i,n)

{


var sum = 0; // Initial value


for (var num = i; num <= n; num++)

	{

		// Let f(x) = 2x, where x = num

		sum += 2*(num);

	}

return sum;
