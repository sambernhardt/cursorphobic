
var margin = 50;
var proximity = 75;

var button = document.querySelector(".button");
var buttonWidth = button.offsetWidth;
var buttonHeight = button.offsetHeight;

var xPos = document.querySelector("#xpos");
var yPos = document.querySelector("#ypos");

function positionButton(mouseX, mouseY) {
  xPos.innerHTML = 'X: ' + mouseX;
  yPos.innerHTML = 'Y: ' + mouseY;

  var ww = window.innerWidth;
  var wh = window.innerHeight;

  var t = button.offsetTop;
  var r = button.offsetLeft + button.offsetWidth;
  var b = button.offsetTop + button.offsetHeight;
  var l = button.offsetLeft;
  var xc = button.offsetLeft + (button.offsetWidth / 2);
  var yc = button.offsetTop + (button.offsetHeight / 2);

  var dx = 0;
  var dy = 0;
  console.log(xc, yc);

  // if the mouse is within 200 pixels of the outerwidth
  if (mouseX > l - proximity || mouseX < r + proximity) {
    // if the mouse is within 200 pixels of the outer height
    if (mouseY < t - proximity || mouseY < b + proximity) {

      if (mouseX + margin > l && mouseX < xc) {
        dx = mouseX - ((ww/2) - (buttonWidth / 2)) + margin;
      }
      if (mouseX - margin < r && mouseX > xc) {
        dx = mouseX - ((ww/2) + (buttonWidth / 2)) - margin;
      }

      if (mouseY + margin > t && mouseY < yc) {
        dy = mouseY - ((wh/2) - (buttonWidth / 2)) + margin;
      }
      if (mouseY - margin < b && mouseY > yc) {
        dy = mouseY - ((wh/2) + (buttonWidth / 2)) - margin;
      }

    }
  }


  var newX = dx;
  var newY = dy;

  button.style.transform = "translate("+newX+"px, "+newY+"px)";
  // button.style.transform = "translateX("+newX+"px)";
}


document.addEventListener("mousemove", function(e) {
  var ww = window.innerWidth;
  var wh = window.innerHeight;

  positionButton(e.pageX, e.pageY);
  // var xmapped = scale(e.pageX, 0, ww, -100, 100);
  // var ymapped = scale(e.pageY, 0, wh, 100, -100);


})

// console.log(button.offsetTop);
