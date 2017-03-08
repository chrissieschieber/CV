var scrollable = document.getElementById('scrollable');
var canvas = document.getElementById('canvas');
var paragraphs = document.getElementsByClassName('paragraph');
var bubbles = document.getElementsByClassName('bubble');

  // --- paragraph stuff ---
scrollable.addEventListener('scroll', function(e) {
  // console.log('scroll');
  // console.log(e.target.scrollTop);
  // console.log(e.target.offsetHeight);
  var midPoint = e.target.scrollTop + 0.5 * e.target.offsetHeight;

  for (var i = 0; i < paragraphs.length; i++) {
    // console.log(paragraphs[i].offsetTop < midPoint);
    paragraphs[i].setAttribute("class", "paragraph");
    if (paragraphs[i].offsetTop > midPoint) {
      break;
    }
  }
  var highlightIndex = i-1;
  paragraphs[highlightIndex].setAttribute("class", "paragraph highlight");

  // --- bubble stuff ---
  for (var i = 0; i < bubbles.length; i++) {
    if (bubbles[i].offsetTop < midPoint) {
      if (bubbles[i].getAttribute('class') === 'bubble') {
        // console.log('hello');
        // var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        // circle.setAttribute("r", "8");
        // circle.setAttribute("cx", "50");
        // circle.setAttribute("cy", "50");
        // circle.setAttribute("class", "svg-bubble");
        // canvas.appendChild(circle);
        console.dir(bubbles[i])
        var d3canvas = d3.select(canvas);
        d3canvas.append("circle")
                .attr("cx", bubbles[i].offsetLeft + 8).attr("cy", 0.5 * e.target.offsetHeight + 8).attr("r", 8)
                .attr("class", "svg-bubble");
      }
      bubbles[i].setAttribute("class", "bubble hidden");
    } else {
      bubbles[i].setAttribute("class", "bubble");
    }
  }
});