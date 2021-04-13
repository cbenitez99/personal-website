const h6 = document.createElement('h6'); //initializing a new variable and giving it a value.
h6.textContent = "(Trying to get used to JavaScripts creating elements!)" //giving the variable text content to put out to the browser.
document.querySelector('body').appendChild(h6); //in the document, we use quereySelector() to look for an existing element, then
//appending the created variable with it's properties in(below) the body tag.

document.getElementById("demo").addEventListener("mouseover", mouseOver); //finding an element with the #ID of "demo", and adding an event
//listener to it. "mouseover" is the name of the event (param1) while mouseOver is a function (param2).
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {          //created a function called 'mouseOver()'. What it will do comes after the ' { '
  document.getElementById("demo").style.color = "blue"; //in the document, get the element with an #ID of "demo" and style it's color to blue
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}