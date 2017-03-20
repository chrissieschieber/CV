requestAnimationFrame(function() {

  var scrollable = document.getElementById('scrollable');
  var paragraphs = document.getElementsByClassName('paragraph');
  var text_bubbles = document.getElementsByClassName('text-bubble');

  // --- paragraph stuff ---
  scrollable.addEventListener('scroll', function(e) {

    var midPoint = e.target.scrollTop + 0.45 * e.target.offsetHeight;

    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].offsetTop < midPoint) {
        if (text_bubbles[i].getAttribute('class') === 'text-bubble') {
          var position = text_bubbles[i].getBoundingClientRect();
          var group_id = text_bubbles[i].getAttribute('data-group');
          var group = document.getElementById('group' + (group_id || '1')); //if there is no group_id = 1
          var bigbubble = group.querySelector('.bigbubble');
          var smallbubble = document.createElement("div");

          // console.log(position.left)
          // console.log(position.top)

          smallbubble.setAttribute("class", "smallbubble");
          smallbubble.style.top =  position.top + 25.5 +'px'; //1.5rem - need to convert
          smallbubble.style.left = position.left + 25.5 +'px';
          group.appendChild(smallbubble)

          var position2 = smallbubble.getBoundingClientRect();

          // console.log(position2.left)
          // console.log(position2.top)
        }
        text_bubbles[i].setAttribute("class", "text-bubble hidden");
      } else {
        text_bubbles[i].setAttribute("class", "text-bubble");
      }
    }

  });

  //---- bubbles -------

  var smallbubble = document.querySelector("#group3 .smallbubble");
  var bigbubble1 = document.querySelector("#group3 .bigbubble");

  var timeScale = 10.0;

  var values = [
    {x: 0, y: 0},
    {x: -50, y: 300 },
    {x: -450, y: 250 }
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
    TweenMax.from(smallbubble, timeScale * 0.3, {
      bezier: { values: values, type: "soft" },
      // bezier: {values: createRandomPath(3), type: "soft"},
      scale: 0.95,
      ease: Quad.easeInOut,
    });
  }
  // TweenMax.to(smallbubble, 0.7, {x: "100%"});

  // move_bubble() 
});

