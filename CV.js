requestAnimationFrame(function() {

  //intro - bubbles

  var bigbubble_Center = document.querySelector("#group1 .bigbubble");
  var bigbubble_Left = document.querySelector("#group2 .bigbubble");
  var bigbubble_Right = document.querySelector("#group3 .bigbubble");

  var expanded = false;
  var spacing = 150;
  var timeScale = 1.0;


  function open() {
    // animate center circle
    TweenMax.to(bigbubble_Center, 0.8 * timeScale, {
      y:(spacing/3),
      scale: 0.4,
      opacity: 1,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    // animate left circle
    TweenMax.to(bigbubble_Left, 1.2 * timeScale, {
      x: -spacing,
      scale: 0.6,
      opacity: 0.8,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    // animate left circle
    TweenMax.to(bigbubble_Right, 1.2 * timeScale, {
      x: spacing,
      scale: 0.6,
      opacity: 0.8,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
  }

  bigbubble_Center.addEventListener("mousedown", function() {
    open();
  });

  //scrolling!
  var timeScale = 10.0;

  var scrollable = document.getElementById('scrollable');
  var paragraphs = document.getElementsByClassName('paragraph');
  var text_bubbles = document.getElementsByClassName('text-bubble');

  // toggle paragraphs
    $('.paragraph').on('click', function() {
      $(this).toggleClass('show-description');
  });

  // --- animate text bubble ---
  function getElementCentre(element) {
    var rect = element.getBoundingClientRect();
    return {
      x: rect.left + 0.5*rect.width,
      y: rect.top  + 0.5*rect.height
    }
  }

  function animateBubble(startingPosition, finalPosition, container, classname) {
    var bubble = document.createElement("div");
    bubble.setAttribute("class", classname);
    bubble.style.left = startingPosition.x + 'px';
    bubble.style.top  = startingPosition.y + 'px';
    container.appendChild(bubble);

    var finalShift = {
      x: finalPosition.x - startingPosition.x,
      y: finalPosition.y - startingPosition.y
    };

    var values = [
      { x: 0, y: 0 },
      finalShift
    ];

    TweenMax.to(bubble, timeScale * 0.3, {
      bezier: {values: values, type: "soft"},
      onComplete: function() {
        bubble.remove();
      }
    });
  }

  // --- paragraph stuff ---
  scrollable.addEventListener('scroll', function(e) {

    var midPoint = e.target.scrollTop + 0.45 * e.target.offsetHeight;
    var bigBubble1 = document.querySelector('#group1 .bigbubble');
    var bigBubble2 = document.querySelector('#group2 .bigbubble');
    var bigBubble3 = document.querySelector('#group3 .bigbubble');
    var finalPosition = {
      '1': getElementCentre(bigBubble1),
      '2': getElementCentre(bigBubble2),
      '3': getElementCentre(bigBubble3)
    };

    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].offsetTop < midPoint) {
        if (text_bubbles[i].getAttribute('class') === 'text-bubble') {
          var startingPosition = {
            x: getElementCentre(text_bubbles[i]).x,
            y: document.getElementById('fixed').getBoundingClientRect().bottom
          };
          var group_id = text_bubbles[i].getAttribute('data-group');
          var group = document.getElementById('group' + (group_id || '1')); //if there is no group_id = 1
          if (group_id != '3') {
            animateBubble(startingPosition, finalPosition[group_id], group, "smallbubble");
  
          } else {
            animateBubble(startingPosition, finalPosition[group_id], group, "smallbubble");
            var group2 = document.getElementById('group2');
            animateBubble(startingPosition, finalPosition['2'], group2, "smallbubble");
          };
        };
        text_bubbles[i].setAttribute("class", "text-bubble hidden");
      } else {
        text_bubbles[i].setAttribute("class", "text-bubble");
      }
    }

  }); 
});
