// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.



///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////// Answers //////////////////////////////////////////////////////////////////////////
// logo = document.getElementById("hplogo")
// logo.style.background = "url(http://l.yimg.com/rz/d/yahoo_frontpage_en-CA_s_f_p_101x50_frontpage.png)"
// srch = document.getElementById("gbqfsa")
// srch.innerText = "Yahooo!"
///////////////////////////////////////////////////////////////////////////////////////////////////


// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
  
// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.




///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////// Answers //////////////////////////////////////////////////////////////////////////
// document.getElementsByTagName("body").style = "font-family: Arail, sans-serif;"
// document.getElementById("nickname").innerText = "Johnnyboyy"
// document.getElementById("favorites").innerText = "The Blood Brothers, coffee, American Spirits"
// document.getElementById("hometown").innerText = "Northfield, CT"

// listItems = document.getElementsByTagName("li")
// for (i = 0; i < listItems.length; i++) {
// 	listItems[i].style.background = "red"
// }
////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.



// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.

var readingList = [
	book1 = {
		title: "Thinking Fast and Slow"
		, author: "Daniel Khaneman"
		, alreadyRead: true
		, coverUrl: "http://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Thinking,_Fast_and_Slow.jpg/200px-Thinking,_Fast_and_Slow.jpg"
	},
	book2 = {
		title: "Suicide Note"
		, author: "Mitchel Heisman"
		, alreadyRead: true
		, coverUrl: "http://d202m5krfqbpi5.cloudfront.net/books/1285865336l/9429159.jpg"
	},
	book3 = {
		title: "Thinking in Systems"
		, author: "Donella H. Meadows"
		, alreadyRead: false
		, coverUrl: "http://i43.tower.com/images/mm112106482/thinking-in-systems-primer-donella-meadows-paperback-cover-art.jpg"
	}
]
document.write("<ul>")
for (i = 0; i < readingList.length; i++) {
	if (readingList[i].alreadyRead) {
		document.write("<li> You already read '" + readingList[i].title + "' by " + readingList[i].author)
		document.write("<img src=" + readingList[i].coverUrl + ' style="height: 200px; width: 120px;"')
		document.write("</li>")

	}
	else {
		document.write('<li class="unread">You still need to read ' +  "'" + readingList[i].title + "' by " + readingList[i].author)
		document.write("<img src=" + readingList[i].coverUrl + ' style="height: 200px; width: 120px;"')
		document.write("</li>")

	}
}
document.write("</ul>")


items = document.getElementsByClassName("unread")

for (i = 0; i < items.length; i++) {
	items[i].style.color = "red";
}