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


requestAnimationFrame(function() {
  var smallbubble = document.getElementsByClassName("smallbubble");
  var bigbubble1 = document.getElementsByClassName(".bigbubble");

  var timeScale = 10.0;

  var values = [
      {x: 0, y: 0},
      {x: 50, y: -300 },
      {x: 450, y: -250 }
    ]

    function createRandomPath(numPoints) {
    var values = [];
    values.push({x: 0, y: 0});
    for (var i = 1; i < numPoints - 1; i++) {
      var x = Math.random() * (100 * 1.5)
      var y = 2 * (Math.random() - 0.5) * (100 * 1.0)
      values.push({x: x, y: y });
    }
    values.push({x: 550, y: -150 });
    }

    function move_bubble() {
    // animate center circle
    TweenMax.to(bigbubble1, 1.4 * timeScale, {
      delay: 0.1,
      scale: 1,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.3]
    });
    // animate smallbubble
    TweenMax.to(smallbubble, timeScale * 0.3, {
    bezier: { values: values, type: "soft" },
    // bezier: {values: createRandomPath(3), type: "soft"},
    scale: 0.95,
    ease: Quad.easeInOut,
    });
  }
  // TweenMax.to(smallbubble, 0.7, {x: 100});

  move_bubble() 
});

