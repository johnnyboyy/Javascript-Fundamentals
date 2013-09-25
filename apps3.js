// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2) {
	if (num1 >= num2) {
		
		return num1
	}
	else {
		return num2
	}

};

// console.log("The greater number of " + 5 + " and " + 10 + " is " + greaterNum(5,10) ) 
// console.log("The greater number of " + 6 + " and " + 8 + " is " + greaterNum(6,8) ) 
// console.log("The greater number of " + 12 + " and " + 10 + " is " + greaterNum(12,10) ) 
// console.log("The greater number of " + 5 + " and " + -1 + " is " + greaterNum(5,-1) ) 


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang) {
	if (lang == "en") {
		return "Hello World"
	}
	else if (lang == "de") {
		return "Hallo Welt"
	}
	else if (lang == "es") {
		return "Hola Mundo"
	}
	else {
		return "I don't know that language."
	}
}

// console.log(helloWorld("en"))
// console.log(helloWorld("de"))
// console.log(helloWorld("es"))
// console.log(helloWorld("fail"))

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function	assignGrade(num) {
	if (num < 60){
		return "F"
	}
	else if (num < 70) {
		return "D"
	}
	else if (num < 80) {
		return "C"
	}
	else if (num < 90) {
		return "B"
	}
	else {
		return "A"
	}
}

// console.log(assignGrade(40))
// console.log(assignGrade(60))
// console.log(assignGrade(70))
// console.log(assignGrade(80))
// console.log(assignGrade(90))

// console.log(assignGrade(59))
// console.log(assignGrade(69))
// console.log(assignGrade(79))
// console.log(assignGrade(89))

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(thing, num) {
	var norm = num + " " + thing

	if (num < 0){
		return "I don't do negatives, bro."
	};


	if (num > 1) {
		if (thing == "sheep") {
			return norm
		}
		else if (thing == "goose") {
			return num + " geese"
		}
		else if (thing == "deer") {
			return norm
		}
		else if (thing == "moose") {
			return norm
		}
		else if (thing == "cheese") {
			return norm
		}
		else {
			return norm + "s"			
		}
	}
	
	else {
		return norm
	}
}


// console.log(pluralize("cheese", 1))
// console.log(pluralize("goose", 10))
// console.log(pluralize("chicken", 300))
// console.log(pluralize("fail", -1))
// console.log(pluralize("fight", 2))