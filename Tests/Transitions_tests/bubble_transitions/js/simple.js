requestAnimationFrame(function() {
  var simpleCircleCenter = document.querySelector(".simple-tween .circle.center");
  var simpleCircleLeft = document.querySelector(".simple-tween .circle.left");
  var simpleCircleRight = document.querySelector(".simple-tween .circle.right"); //so I can use two classes!

  var expanded = false;
  var spacing = 100;
  var timeScale = 1.0;

  function simpleOpen() {
    // animate center circle
    TweenMax.to(simpleCircleCenter, 0.8 * timeScale, {
      scale: 0.6,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    // animate left circle
    TweenMax.to(simpleCircleLeft, 1.2 * timeScale, {
      x: -spacing,
      scale: 0.6,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    // animate left circle
    TweenMax.to(simpleCircleRight, 1.2 * timeScale, {
      x: spacing,
      scale: 0.6,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
  }

  function simpleClose() {
    // animate center circle
    TweenMax.to(simpleCircleCenter, 1.4 * timeScale, {
      delay: 0.1,
      scale: 1,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.3]
    });
    // animate center left
    TweenMax.to(simpleCircleLeft, timeScale * 0.3, {
      x: 0,
      scale: 0.95,
      ease: Quad.easeInOut,
    });
    // animate center right
    TweenMax.to(simpleCircleRight, timeScale * 0.3, {
      x: 0,
      scale: 0.95,
      ease: Quad.easeInOut
    });
  }

  function toggleSimple() {
    expanded = !expanded;
    if (expanded) {
      simpleOpen();
    } else {
      simpleClose();
    }
  }

  simpleCircleCenter.addEventListener("mousedown", function() {
    toggleSimple();
  });
});
