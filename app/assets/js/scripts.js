/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
var margin = 0;
var proximity = 0;

var el = document.querySelector(".button");
el.style.transition = "transform .1s";
var main = document.querySelector(".main");
var elPosition = getPosition(el);
var elWidth = el.offsetWidth;
var elHeight = el.offsetHeight;

var xPos = document.querySelector("#xpos");
var yPos = document.querySelector("#ypos");

function cursorphobic(selector, config) {
  margin = config.margin;
  proximity = config.proximity;


  document.addEventListener("mousemove", function(e) {
    moveButton(e.clientX, e.clientY);
  })
}

function moveButton(mouseX, mouseY) {
  xPos.innerHTML = 'X: ' + mouseX;
  yPos.innerHTML = 'Y: ' + mouseY;

  var ww = main.outerWidth;
  var wh = main.outerHeight;

  var t = elPosition.y;
  var r = elPosition.x + elWidth;
  var b = elPosition.y + elHeight;
  var l = elPosition.x;
  var xc = elPosition.x + (elWidth / 2);
  var yc = elPosition.y + (elHeight / 2);

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

  el.style.transform = "translate("+dx+"px, "+dy+"px)";
}

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
