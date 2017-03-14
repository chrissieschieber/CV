// var scrollable = document.getElementById('scrollable');
// var canvas = document.getElementById('venn-bubbles');
// var paragraphs = document.getElementsByClassName('paragraph');
// var bubbles = document.getElementsByClassName('bubble');

//   // --- paragraph stuff ---
// scrollable.addEventListener('scroll', function(e) {

//   var midPoint = e.target.scrollTop + 0.5 * e.target.offsetHeight;

//   for (var i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].setAttribute("class", "paragraph");
//     if (paragraphs[i].offsetTop > midPoint) {
//       break;
//     }
//   }
//   var highlightIndex = i-1;
//   paragraphs[highlightIndex].setAttribute("class", "paragraph-move-bubble");

//   // --- bubble stuff ---
//   for (var i = 0; i < bubbles.length; i++) {
//     if (bubbles[i].offsetTop < midPoint) {
//       if (bubbles[i].getAttribute('class') === 'bubble') {
//         console.dir(bubbles[i])
//         var d3canvas = d3.select('#group1');
//         d3canvas.append("circle")
//                 .attr("cx", bubbles[i].offsetLeft + 27).attr("cy", 0.5 * e.target.offsetHeight + 27).attr("r", 27)
//                 .attr("opacity", 0.7)
//                 .attr("class", "svg-bubble")
          
//       }
//       bubbles[i].setAttribute("class", "bubble hidden");
//     } else {
//       bubbles[i].setAttribute("class", "bubble");
//     }
//   }
// });


$(document).ready(function() {
  var smallbubble = $(".smallbubble");
  var bigbubble1 = $(".bigbubble .group1");

  var timeScale = 1.0;

  function createPath(left, upFirst, reverse) {
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

  function createPath(left, upFirst, reverse) {
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

  // function movebubble() {
  //   // animate center circle
  //   TweenMax.to(circleCenter, 0.8 * timeScale, {
  //     scale: 0.6,
  //     ease: Elastic.easeOut,
  //     easeParams: [1.1, 0.6]
  //   });
  //   // animate left circle
  //   TweenMax.to(circleLeft, 0.8 * timeScale, {
  //     scale: 0.6,
  //     ease: Elastic.easeOut,
  //     easeParams: [1.1, 0.6]
  //   });
  //   TweenMax.to(circleLeft, 0.8 * timeScale, {
  //     bezier: { values: createRandomPath(true, 3, false), type: "soft" },
  //     // bezier: { values: createPath(true, true, false), type: "soft" },
  //     ease: Quad.easeInOut,
  //   });
  //   // animate right circle
  //   TweenMax.to(circleRight, 0.8 * timeScale, {
  //     scale: 0.6,
  //     ease: Elastic.easeOut,
  //     easeParams: [1.1, 0.6]
  //   });
  //   TweenMax.to(circleRight, 0.8 * timeScale, {
  //     bezier: { values: createRandomPath(false, 3, false), type: "soft" },
  //     // bezier: { values: createPath(false, false, false), type: "soft" },
  //     ease: Quad.easeInOut,
  //   });
  // }

  // circleCenter.on("mousedown", function() {
  //   toggle();
  // });
});