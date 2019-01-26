/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
var xPos = document.querySelector("#xpos");
var yPos = document.querySelector("#ypos");

function cursorphobic(selector, config) {
  var obj = {};
  obj.margin = 50;
  obj.proximity = 50;
  obj.animationDelay = 0.1;

  if (config.margin != undefined) obj.margin = config.margin;
  if (config.proximity != undefined) obj.proximity = config.proximity;
  if (config.animationDelay != undefined) obj.animationDelay = config.animationDelay;

  obj.el = document.querySelector(selector);
  obj.el.style.transition = "transform " + obj.animationDelay + "s";
  obj.elPosition = getPosition(obj.el);
  obj.elWidth = obj.el.offsetWidth;
  obj.elHeight = obj.el.offsetHeight;

  obj.moveButton = function(mouseX, mouseY) {
    xPos.innerHTML = 'X: ' + mouseX;
    yPos.innerHTML = 'Y: ' + mouseY;

    var t = obj.elPosition.y;
    var r = obj.elPosition.x + obj.elWidth;
    var b = obj.elPosition.y + obj.elHeight;
    var l = obj.elPosition.x;
    var xc = obj.elPosition.x + (obj.elWidth / 2);
    var yc = obj.elPosition.y + (obj.elHeight / 2);

    var dx = 0;
    var dy = 0;

    // if the mouse is within 200 pixels of the outerwidth
    if (mouseY > t - obj.proximity && mouseY < b + obj.proximity) {

        if (mouseX + obj.margin > l && mouseX < xc) {
          dx = mouseX - l + obj.margin;
        }
        if (mouseX - obj.margin < r && mouseX > xc) {
          dx = mouseX - r - obj.margin;
        }

    }

    if (mouseX > l - obj.proximity && mouseX < r + obj.proximity) {

        if (mouseY + obj.margin > t && mouseY < yc) {
          dy = mouseY - t + obj.margin;
        }
        if (mouseY - obj.margin < b && mouseY > yc) {
          dy = mouseY - b - obj.margin;
        }

    }

    obj.el.style.transform = "translate("+dx+"px, "+dy+"px)";
  }

  document.addEventListener("mousemove", function(e) {
    obj.moveButton(e.clientX, e.clientY);
  })
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
