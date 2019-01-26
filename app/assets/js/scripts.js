/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
var margin = 50;
var proximity = 75;

var button = document.querySelector(".button");
var main = document.querySelector(".main");
var buttonPosition = getPosition(button);
var buttonWidth = button.offsetWidth;
var buttonHeight = button.offsetHeight;
var xPos = document.querySelector("#xpos");
var yPos = document.querySelector("#ypos");

function positionButton(mouseX, mouseY) {
  xPos.innerHTML = 'X: ' + mouseX;
  yPos.innerHTML = 'Y: ' + mouseY;

  var ww = main.outerWidth;
  var wh = main.outerHeight;

  var t = buttonPosition.y;
  var r = buttonPosition.x + buttonWidth;
  var b = buttonPosition.y + buttonHeight;
  var l = buttonPosition.x;
  var xc = buttonPosition.x + (buttonWidth / 2);
  var yc = buttonPosition.y + (buttonHeight / 2);

  var dx = 0;
  var dy = 0;

  // if the mouse is within 200 pixels of the outerwidth
  if (mouseY > t - proximity && mouseY < b + proximity) {

      if (mouseX + margin > l && mouseX < xc) {
        dx = mouseX - l + margin;
      }
      if (mouseX - margin < r && mouseX > xc) {
        dx = mouseX - r - margin;
      }

  }

  if (mouseX > l - proximity && mouseX < r + proximity) {

      if (mouseY + margin > t && mouseY < yc) {
        dy = mouseY - t + margin;
      }
      if (mouseY - margin < b && mouseY > yc) {
        dy = mouseY - b - margin;
      }

  }

  button.style.transform = "translate("+dx+"px, "+dy+"px)";
}

document.addEventListener("mousemove", function(e) {
  console.log([e.clientX, e.clientY]);
  positionButton(e.clientX, e.clientY);
})

// Shawn Whinnery stack overflow
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}
