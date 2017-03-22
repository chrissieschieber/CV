requestAnimationFrame(function() {
  var simpleCircleCenter = document.querySelector(".circle-container .circle.center");
  var simpleCircleLeft = document.querySelector(".circle-container .circle.left");
  var simpleCircleRight = document.querySelector(".circle-container .circle.right"); //so I can use two classes!


  var expanded = false;
  var spacing = 150;
  var timeScale = 1.0;

  function simpleOpen() {
    // animate center circle
    TweenMax.to(simpleCircleCenter, 0.8 * timeScale, {
      y:(spacing/3),
      scale: 0.4,
      opacity: 1,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    // animate left circle
    TweenMax.to(simpleCircleLeft, 1.2 * timeScale, {
      x: -spacing,
      scale: 0.6,
      opacity: 0.8,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    // animate left circle
    TweenMax.to(simpleCircleRight, 1.2 * timeScale, {
      x: spacing,
      scale: 0.6,
      opacity: 0.8,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
  }

  simpleCircleCenter.addEventListener("mousedown", function() {
    simpleOpen();
  });
});

