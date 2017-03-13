$(document).ready(function() {
  var circleCenter = $(".keyframe .circle.center");
  var circleLeft = $(".keyframe .circle.left");
  var circleRight = $(".keyframe .circle.right");

  var firstTime = true;

  circleCenter.on("mousedown", function() {
    circleCenter.toggleClass("expanded");
    circleLeft.toggleClass("expanded");
    circleRight.toggleClass("expanded");
    if (!firstTime) {
      circleCenter.toggleClass("collapsed");
      circleLeft.toggleClass("collapsed");
      circleRight.toggleClass("collapsed");
    }
    firstTime = false;
  });
});
