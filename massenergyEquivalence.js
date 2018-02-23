// A simple Mass-Energy equivalence function, first derived by theoretical physicist Albert Einstein in the year 1905.  

function energy(mass)

{

return mass * (299792458 * 299792458);

}


// Test for 0.0000002 kg Mass

console.log("The energy calculated is " + energy(0.0000002) + " joules");

