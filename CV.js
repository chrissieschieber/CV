requestAnimationFrame(function() {

  //intro - bubbles

  var simpleCircleCenter = document.querySelector("#group1 .bigbubble");
  var simpleCircleLeft = document.querySelector("#group2 .bigbubble");
  var simpleCircleRight = document.querySelector("#group3 .bigbubble"); //so I can use two classes!

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

  //scrolling!
  var timeScale = 10.0;

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
          smallbubble.style.top =  position.top + 25.5 +'px'; //1.5rem (bubble diameter) - need to convert
          smallbubble.style.left = position.left + 25.5 +'px';
          group.appendChild(smallbubble)

          var position2 = smallbubble.getBoundingClientRect();
          // console.log(position2.left)
          // console.log(position2.top)

          //move bubbles to endpoint

          var endpoint = group.querySelector('.endpoint')
          var position3 = endpoint.getBoundingClientRect(); 

          var centered = document.getElementById('page-centered');
          var position4 = centered.getBoundingClientRect();

          var centered = document.getElementById('fixed');
          var position5 = centered.getBoundingClientRect();


          var values = [
            {x: 0, y: 0},
            {x: position3.left - position4.left - 25.5 +'px', y: position3.top -position5.bottom + 'px' } //10rem bigbubble
           ]

          TweenMax.to(smallbubble, timeScale * 0.3, {
          bezier: {values: values, type: "soft"},
          onComplete: function () {
            endpoint.append(smallbubble);
            }
          });

        }
        text_bubbles[i].setAttribute("class", "text-bubble hidden");
      } else {
        text_bubbles[i].setAttribute("class", "text-bubble");
      }
    }

  }); 
});

//window.onresize()