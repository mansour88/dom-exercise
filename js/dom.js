// Task 1

// Access HTML element with id tag-line.
var tagline = document.getElementById("tag-line");

/* Access all headings that belong to div with the class name bg-main-content.
*/
var heading = document.querySelector(".bg-main-content");
var subheading = heading.querySelectorAll("h2");

// Create the variable collect and assign it with content of tag-line.
var collect = tagline.innerHTML + "\n------------------------------------------\n";

/* Loop through the array of headings and append the content of each heading to variable collect After the loop, use alert to print collect
*/

for(var i = 0; i < subheading.length; i += 1) {
    collect += subheading[i].innerHTML + "\n";
}

alert(collect);

// Task 2

/*
Access 13th div with class name box that belongs to div with the class name bg-main-content. You can name the variable when_to_launch.
*/
var subdivs = heading.querySelectorAll(".box");
var when_to_launch = subdivs[12]; 


/*
Use property children to "scoop" in array all HTML elements that belong to that div.
*/
var scoopdivs = when_to_launch.children;

/*
Create the variable collect and assign it with content of heading that belongs to gotten array.
*/
var collect = scoopdivs[0].innerHTML + "\n------------------\n";

/*
Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
*/
for (j = 1; j < scoopdivs.length; j += 1) {
    collect += scoopdivs[j].innerHTML + "\n\n";
}

/*
After the loop, use alert to print collect
*/
alert(collect);
