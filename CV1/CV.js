  var scrollable = document.getElementById('scrollable');
var canvas = document.getElementById('canvas');
var paragraphs = document.getElementsByClassName('paragraph');
var bubbles = document.getElementsByClassName('bubble');

  // --- paragraph stuff ---
scrollable.addEventListener('scroll', function(e) {

  var midPoint = e.target.scrollTop + 0.5 * e.target.offsetHeight;

  for (var i = 0; i < paragraphs.length; i++) {
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
        console.dir(bubbles[i])
        var d3canvas = d3.select('#group1');
        d3canvas.append("circle")
                .attr("cx", bubbles[i].offsetLeft + 27).attr("cy", 0.5 * e.target.offsetHeight + 27).attr("r", 27)
                .attr("opacity", 0.7)
                .attr("class", "svg-bubble")
          
      }
      bubbles[i].setAttribute("class", "bubble hidden");
    } else {
      bubbles[i].setAttribute("class", "bubble");
    }
  }
});

function makeCircle(groupId, cx, cy, r, colour, opacity=1) {
  // Get group
  var group = d3.select("#" + groupId);
  // Append circle 
  return group.append("circle")
      .attr("cx", cx)
      .attr("cy", cy)
      .attr("r", r)
      .style("fill", colour)
      .style("opacity", opacity)
      .style("transition", "r 1s cubic-bezier(0, 1.4, 1, 1)");
}

var circle1 = makeCircle("group1",190, 155, 80, "orange");
var circle2 = makeCircle("group2", 295, 155, 80, "salmon");
var circle3 = makeCircle("group3", 238, 231, 80, "steelblue"); //#7fcdbb