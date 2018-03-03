// A simple factorial calculator function written with javascript.

function factorial(number)

{

var factorial = 1;

if (number <= 0)
{
  return undefined;
}

else
{
  for (i = 1; i <= number; i++)
    {

      factorial *= i;

    }
  return factorial;
}

}

// Test: sample calculations for 3! and 5!

console.log(factorial(3)); // 3! - Expected output: 3*2*1 = 6
console.log(factorial(5)); // 5! - Expected output: 5*4*3*2*1 = 120
