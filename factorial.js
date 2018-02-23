// A simple factorial function written with javascript.


function factorial(number)

{

var factorial = 1;

for (i = 1; i <= number; i++)

{

factorial *= i; 

}

return factorial;

}



// Test: sample calculation of 3! and 5!


console.log(factorial(3));
console.log(factorial(5));


