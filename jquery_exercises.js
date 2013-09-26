// SOLUTIONS GO BELOW EACH EXERCISE

// EXERCISE: Change Background

// Change the background color of '#target' by script. 
// Hint: you can use .css

// $(document).ready(function(){
// 	$("#target").css({
// 		"background-color": "#abc"
// 	})
// });

// EXERCISE: Change Parent

// Change the text in the span, a child of "#target"
// Hint: you can use .text

// $(document).ready(function(){
// 	console.log($("#target").children('span').text("new text"))
// });

// EXERCISE: Create Clone

// Create a clone of the span in "#target" and position it under the origin.
// Hint: you can use .clone and .insertAfter

// $("docuemnt").ready(function() {
// 	var c = $("#target span")
// 	c.after(c.clone())
// })

// EXERCISE: Use Filter

// Change background color of the second ".target"
// Hint: you can use .eq and .css


// $(document).ready(function(){
// 	$(".target").eq(1).css({
// 		"background-color": "#cba"
// 	});
// });



// EXERCISE: Disable Buttons

// Disable the button
// Hint: you will have to select the button and can use .attr

// $(document).ready(function(){
// 	$(".target").children("button").attr("disabled", true)
// });


// EXERCISE: Uncheck CheckBoxes

// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr


// $(document).ready(function(){
// 	$(".target").find("input").attr("checked", false);
// });


// EXERCISE: Change Parent

// Move "#child" from "#parent1" to "#parent2"
// Hint: you can use .appendTo

// $(document).ready(function(){
// 	$("#parent1").find("#child").appendTo("#parent2")
// });


// EXERCISE: Select A Option in A Select Box

// Select the second option in the selectbox by script
// Hint: you will have to select the option and can use .eq and .attr

// $(document).ready(function(){
// 	$("#target").find("option").eq(1).attr("selected", true)
// });


// EXERCISE: Change Size

// Make "#target" double size
// Hint: you can use .css, .width and .height

// $(document).ready(function(){
// $("#target").width($("#target").width()*2);
// $("#target").height($("#target").height()*2);

// });


// EXERCISE: Empty Elements
// Hint: you can use .empty
// Remove all children and text of "#target"


// $(document).ready(function(){
// 	$("#target").empty()
// });



// EXERCISE: Delay

// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use .setTimeout and alert
// $(document).ready(function(){
// 	setTimeout(function() {
// 		alert("Message") }, 3000);
// });





// EXERCISE: Count

// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5

// $(document).ready(function() {
// 	alert($("#target").find(".child").length)
// });


// EXERCISE: Animate

// Make "#target" double size with animation
// Hint: you can use .animate, .width, and .height

// $(document).ready(function() {
// 	var props = {
// 		"width": $("#target").width()*2
// 		, "height": $("#target").height()*2
// 	}
// 	$("#target").animate(props, 3000)
// });


// EXERCISE: Alternate Color

// Make the list-box alternating. (Make odd options a different color)
// Hint: you can select the option and use .filter and .css
// $(document).ready(function(){
// 	$("#target").find("option").filter(":odd").css({
// 		"background-color": "#abc"
// 	});
// });


// EXERCISE: All But One

// Remove all children of "#target" but h2
// Hint: you can use .children, .not and .remove

// $(document).ready(function(){
// 	$("#target").children().not("h2").remove();
// });



// EXERCISE: Without Children

// Remove all 'div' whitch has no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not
// $(document).ready(function(){
// 	$("div:empty").remove()
// });