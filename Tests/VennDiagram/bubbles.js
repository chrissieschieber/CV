
function makeCircle(groupId, cx, cy, r, colour) {
  // Get group
  var group = d3.select("#" + groupId);
  // Append circle 
  return group.append("circle")
      .attr("cx", cx)
      .attr("cy", cy)
      .attr("r", r)
      .style("fill", colour)
      // .style("opacity", 0.5)
      .style("transition", "r 1s cubic-bezier(0, 1.4, 1, 1)");
}

var circle1 = makeCircle("group1", 25, 25, 20, "url(#gradient1)");
var circle2 = makeCircle("group2", 55, 25, 20, "url(#gradient2)");
var circle3 = makeCircle("group3", 38, 41, 20, "url(#gradient3)"); //#7fcdbb

// var circle1 = makeCircle("group1", 25, 25, 20, "#67001f"); //"#fb6a4a"
// var circle2 = makeCircle("group2", 55, 25, 20, "#67001f"); //"#67001f"
// var circle3 = makeCircle("group3", 38, 41, 20, "#7fcdbb"); //#7fcdbb"

var flyCircle = makeCircle("group1", 25, 80, 3, "url(#gradient1)")
                  .style("transition", "transform 1s");

setTimeout(function() {
  flyCircle.style("transform", "translate(0, -40px)");
  setTimeout(function() {
    // $('.bigCircle').animate({ r: '+=50px' }, 1600, 'easeOutElastic')
    // bigCircle.attr("r", 155);

    circle1
          .transition()
          .duration(1000)
          .ease(d3.ease("elastic", 1.2, 0.3))
          .attr("r", 21)
  }, 500)
}, 500)

