$(document).ready(function() {
  var circleCenter = $(".css-transition .circle.center");
  var circleLeft = $(".css-transition .circle.left");
  var circleRight = $(".css-transition .circle.right");

  circleCenter.on("mousedown", function() {
    circleCenter.toggleClass("expanded");
    circleLeft.toggleClass("expanded");
    circleRight.toggleClass("expanded");
  });
});
