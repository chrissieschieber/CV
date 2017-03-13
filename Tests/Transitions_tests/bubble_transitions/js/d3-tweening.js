requestAnimationFrame(function() {

  var fullRadius = 40;

  function makeCircle(container, name) {
    return container.append('circle')
                    .attr("class", "circle " + name)
                    .attr("cx", 50)
                    .attr("cy", 50)
                    .attr("r", fullRadius * ((name === 'center') ? 1 : 0.95));
  }

  var container = d3.select('.d3-tweening').append('svg').attr("viewBox", "0 0 100 100");
  var circleLeft = makeCircle(container, "left");
  var circleRight = makeCircle(container, "right");
  var circleCenter = makeCircle(container, "center");

  var expanded = false;
  var spacing = 100;
  var timeScale = 1.0;

  function open() {
    // animate center circle
    circleCenter.transition()
              .duration(0.8 * timeScale * 1000)
              .ease(d3.ease("elastic", 1.1, 0.6))
              .attr("r", 0.6 * fullRadius);
    // animate left circle
    circleLeft.transition()
              .duration(1.2 * timeScale * 1000)
              .ease(d3.ease("elastic", 1.1, 0.6))
              .attr("r", 0.6 * fullRadius)
              .attr("cx", 50 - spacing);
    // animate right circle
    circleRight.transition()
              .duration(1.2 * timeScale * 1000)
              .ease(d3.ease("elastic", 1.1, 0.6))
              .attr("r", 0.6 * fullRadius)
              .attr("cx", 50 + spacing);
  }

  function close() {
    // animate center circle
    circleCenter.transition()
              .delay(0.1 * timeScale * 1000)
              .duration(1.4 * timeScale * 1000)
              .ease(d3.ease("elastic", 1.1, 0.3))
              .attr("r", 1.0 * fullRadius);
    // animate left center
    circleLeft.transition()
              .duration(0.3 * timeScale * 1000)
              .ease(d3.ease("quadInOut"))
              .attr("r", 0.95 * fullRadius)
              .attr("cx", 50);
    // animate right center
    circleRight.transition()
              .duration(0.3 * timeScale * 1000)
              .ease(d3.ease("quadInOut"))
              .attr("r", 0.95 * fullRadius)
              .attr("cx", 50);
  }

  function toggle() {
    expanded = !expanded;
    if (expanded) {
      open();
    } else {
      close();
    }
  }

  circleCenter.on("mousedown", function() {
    toggle();
  });
});
