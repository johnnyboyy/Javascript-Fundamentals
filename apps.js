// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var job = "Web Developer"
	, place = "Califonia"
	, spouse = "Taylor"
	, num_of_kids = "2";


alert("You will be a " + job + " in " + place +", and married to " + spouse + " with " + num_of_kids + " kids.");


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.


var date = 2013;
var dateOfBirth = 1992;

alert("They are either " + (date - dateOfBirth - 1) + " or " + (date - dateOfBirth));


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 20;
var maxAge = 75;
var amtPerDay = 5;

var lifetimeSupply = ((maxAge - currentAge) * 365) * amtPerDay

alert("You will need " + lifetimeSupply + " to last you until the ripe old age of " + maxAge)



// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".


var radius = 4
var pi = Math.PI

var circumference = (2 * pi) * radius
alert("The circumference is " + circumference)

var area = pi * (radius * radius)

alert("The area is " + area)


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


var celsius = 40

alert(celsius + " degrees celsius is " + Math.round(celsius * (9/5) + 32) + " degrees fahrenheit")

var fahrenheit = 65
var fToC = (fahrenheit -32) * (5/9)

alert(fahrenheit + " degrees fahrenheit is " + Math.round(fToC) + " degrees celsius")
