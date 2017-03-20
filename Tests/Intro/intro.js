requestAnimationFrame(function() {

  var circleCenter = document.querySelector(".tween-path .circle.center");
  var circleLeft = document.querySelector(".tween-path .circle.left");
  var circleRight = document.querySelector(".tween-path .circle.right");
  var circleBottom = document.querySelector(".tween-path .circle.bottom");

  var expanded = false;
  var spacing = 200;
  var timeScale = 1.0;

  function createPath(left, bottom, upFirst, reverse) {
    var values = [
      {x: 0, y: 0},
      {x: spacing * (left ? -0.5 : 0.5), y: spacing * (upFirst ? -0.5 : 0.5) },
      {x: spacing * (left ? -1.0 : 1.0), y: 0 }
    ];
    if (reverse) {
      return values.reverse();
    } else {
      return values;
    }
  }

  function createRandomPath(left, numPoints, reverse) {
    var values = [];
    values.push({x: 0, y: 0});
    for (var i = 1; i < numPoints - 1; i++) {
      var x = Math.random() * (spacing * 1.5) * (left ? -1 : 1)
      var y = 2 * (Math.random() - 0.5) * (spacing * 1.0)
      values.push({x: x, y: y });
    }
    values.push({x: spacing * (left ? -1.0 : 1.0), y: 0 });
    if (reverse) {
      return values.reverse();
    } else {
      return values;
    }
  }

  function createCrazyRandomPath(left, numPoints, reverse) {
    var values = [];
    values.push({x: 0, y: 0});
    for (var i = 1; i < numPoints - 1; i++) {
      var x = 2 * (Math.random() - 0.5) * (spacing * 1.5)
      var y = 2 * (Math.random() - 0.5) * (spacing * 1.0)
      values.push({x: x, y: y });
    }
    values.push({x: spacing * (left ? -1.0 : 1.0), y: 0 });
    if (reverse) {
      return values.reverse();
    } else {
      return values;
    }
  }

  function open() {
    // animate center circle
    TweenMax.to(circleCenter, 0.8 * timeScale, {
      scale: 0.6,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    // animate left circle
    TweenMax.to(circleLeft, 0.8 * timeScale, {
      scale: 0.6,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    TweenMax.to(circleLeft, 0.8 * timeScale, {
      bezier: { values: createRandomPath(true, 3, false), type: "soft" },
      // bezier: { values: createPath(true, true, false), type: "soft" },
      ease: Quad.easeInOut,
    });
    // animate right circle
    TweenMax.to(circleRight, 0.8 * timeScale, {
      scale: 0.6,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    TweenMax.to(circleRight, 0.8 * timeScale, {
      bezier: { values: createRandomPath(false, 3, false), type: "soft" },
      // bezier: { values: createPath(false, false, false), type: "soft" },
      ease: Quad.easeInOut,
    });
    // animate bottom circle
    TweenMax.to(circleLeft, 0.8 * timeScale, {
      scale: 0.6,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    TweenMax.to(circleLeft, 0.8 * timeScale, {
      bezier: { values: createRandomPath(true, 3, false), type: "soft" },
      // bezier: { values: createPath(true, true, false), type: "soft" },
      ease: Quad.easeInOut,
    });
  }

  function close() {
    // animate center circle
    TweenMax.to(circleCenter, 2.8 * timeScale, {
      delay: 0.2 * timeScale,
      scale: 1,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.3]
    });
    // animate left center
    TweenMax.to(circleLeft, 0.6 * timeScale, {
      scale: 0.95,
      ease: Quad.easeInOut,
    });
    TweenMax.to(circleLeft, 0.6 * timeScale, {
      bezier: { values: createRandomPath(true, 3, true), type: "soft" },
      // bezier: { values: createPath(true, false, true), type: "soft" },
      ease: Quad.easeInOut,
    });
    // animate right circle
    TweenMax.to(circleRight, 0.6 * timeScale, {
      scale: 0.95,
      ease: Quad.easeInOut,
    });
    TweenMax.to(circleRight, 0.6 * timeScale, {
      bezier: { values: createRandomPath(false, 3, true), type: "soft" },
      // bezier: { values: createPath(false, true, true), type: "soft" },
      ease: Quad.easeInOut,
    });
  }

  function toggle() {
    expanded = !expanded;
    if (expanded) {
      open();
    } else {
      close();
    }
  }

  circleCenter.addEventListener("mousedown", function() {
    toggle();
  });
});
