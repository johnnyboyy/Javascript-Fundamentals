// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


var bands = ["Soilwork", "The Blood Brothers", "Diecast", "Vanna", "System of a Down"]


function findSuffix(num) {

	if (num == 1) {
		return "1st"
	}
	else if (num == 2) {
		return "2nd"
	}
	else if (num == 3) {
		return "3rd"
	}
	else {
		return num + "th"
	}
}


for (var i = 0; i < bands.length; i++) {
	console.log("My " + findSuffix(i + 1) + " choice is: " + bands[i]);
};