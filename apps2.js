

/////////////////////////////////////////////////////////////////////////////////////
//////////////// Part 2 functions ///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune(job, place, spouse, num_of_kids) {
	alert("You will be a " + job + " in " + place +", and married to " + spouse + " with " + num_of_kids + " kids.");
};

tellFortune("Web Developer", "California", "Taylor", 2);


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.


function calculateAge(birthYear, arb) {
	var currentYear = new Date().getFullYear();

	alert("They are either " + (currentYear - birthYear - 1) + " or " + (currentYear - birthYear));

};

calculateAge(1992, 2013);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amtPerDay) {
	var maxAge = 75

	alert("You will need about " + Math.round(((maxAge - age) * 365) * amtPerDay) + " to last you until the ripe old age of " + maxAge)

};

calculateSupply(20, 9.5)

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius) {
	return 2 * Math.PI * radius
};

alert("The circumference is " + calcCircumfrence(5))


function calcArea(radius) {
	return Math.PI * (radius * radius)
};

alert("The area is " + calcArea(3))

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(cel) {
	return Math.round(celsius * (9/5) + 32)
};

var celsius = 40

alert(celsius + " degrees celsius is " + celsiusToFahrenheit(celsius) + " degrees fahrenheit")


function fahrenheitToCelsius(fahr) {
  return Math.round((fahr - 32) * (5/9))
};

var fahrenheit = 65

alert(fahrenheit + " degrees fahrenheit is " + fahrenheitToCelsius(fahrenheit) + " degrees celsius")
