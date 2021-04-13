const h6 = document.createElement('h6');
h6.textContent = "(Trying to get used to JavaScripts creating elements!)"
document.querySelector('body').appendChild(h6);

document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.color = "blue";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}