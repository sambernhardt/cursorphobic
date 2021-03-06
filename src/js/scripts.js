var xPos = document.querySelector("#xpos");
var yPos = document.querySelector("#ypos");

function cursorphobic(selector, config) {
  // setup
  var obj = {};
  // obj.margin = 0;
  obj.proximity = 0;
  obj.animationDelay = 0.1;

  // obj.label = document.createElement("p");
  // obj.label.style.position = 'absolute';
  // document.querySelector('body').appendChild(obj.label);

  // if (config.margin != undefined) obj.margin = config.margin;
  if (config.proximity != undefined) obj.proximity = config.proximity;
  if (config.animationDelay != undefined) obj.animationDelay = config.animationDelay;
  // obj.margin = obj.proximity;

  obj.el = document.querySelector(selector);
  obj.el.style.transition = obj.el.style.transition + " transform " + obj.animationDelay + "s";
  obj.elPosition = getPosition(obj.el);
  obj.elWidth = obj.el.offsetWidth;
  obj.elHeight = obj.el.offsetHeight;
  obj.el.onclick = function() {
    alert("You did it!")
  }

  obj.moveButton = function(mouseX, mouseY) {
    xPos.innerHTML = 'X: ' + mouseX;
    yPos.innerHTML = 'Y: ' + mouseY;

    // obj.label.style.left = mouseX + 'px';
    // obj.label.style.top = mouseY + 'px';
    // obj.label.innerHTML = "You gotta be quicker than that.";

    var t = obj.elPosition.y;
    var r = obj.elPosition.x + obj.elWidth;
    var b = obj.elPosition.y + obj.elHeight;
    var l = obj.elPosition.x;
    var xc = obj.elPosition.x + (obj.elWidth / 2);
    var yc = obj.elPosition.y + (obj.elHeight / 2);

    var dx = 0;
    var dy = 0;

    // if the mouse is within proximity distance of the top and bottom
    if (mouseY > t - obj.proximity && mouseY < b + obj.proximity) {

        if (mouseX + obj.proximity > l && mouseX < xc) {
          dx = mouseX - l + obj.proximity;
        }
        if (mouseX - obj.proximity < r && mouseX > xc) {
          dx = mouseX - r - obj.proximity;
        }

    }

    // if the mouse is within proximity distance of the left and right
    if (mouseX > l - obj.proximity && mouseX < r + obj.proximity) {

        if (mouseY + obj.proximity > t && mouseY < yc) {
          dy = mouseY - t + obj.proximity;
        }
        if (mouseY - obj.proximity < b && mouseY > yc) {
          dy = mouseY - b - obj.proximity;
        }

    }

    obj.el.style.transform = "translate("+dx+"px, "+dy+"px)";
  }

  document.addEventListener("mousemove", function(e) {
    if (!config.noMove) {
      obj.moveButton(e.clientX, e.clientY);
    }
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
