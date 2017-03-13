$(document).ready(function() {
  var $shareButtons = $(".share-button");
  var $toggleButton = $(".share-toggle-button");

  var menuOpen = false;
  var buttonsNum = $shareButtons.length;
  var buttonsMid = (buttonsNum/2);
  var spacing = 75;
  var timeScale = 1.0;

  function openShareMenu() {
    TweenMax.to($toggleButton, 0.8 * timeScale, {
      scale: 0.6,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.6]
    });
    $shareButtons.each(function(i) {
      var $cur = $(this);
      var pos = i - buttonsMid;
      if (pos >= 0) pos += 1;
      var dist = Math.abs(pos);
      $cur.css({
        zIndex: buttonsMid-dist
      });
      TweenMax.to($cur, 1.1 * dist * timeScale ,{
        x:pos*spacing,
        scaleY:0.6,
        scaleX:1.1,
        ease:Elastic.easeOut,
        easeParams:[1.01,0.5]
      });
      TweenMax.to($cur, 0.8 * timeScale, {
        delay:(0.2*(dist))-0.1,
        scale:0.6,
        ease:Elastic.easeOut,
        easeParams:[1.1,0.6]
      });
    });
  }

  function closeShareMenu() {
    TweenMax.to([$toggleButton], 1.4 * timeScale, {
      delay: 0.1,
      scale: 1,
      ease: Elastic.easeOut,
      easeParams: [1.1, 0.3]
    });
    $shareButtons.each(function(i) {
      var $cur=$(this);
      var pos=i-buttonsMid;
      if(pos>=0) pos+=1;
      var dist=Math.abs(pos);
      $cur.css({
        zIndex:dist
      });

      TweenMax.to($cur, timeScale * (0.4+((buttonsMid-dist)*0.1)), {
        x:0,
        scale:.95,
        ease:Quad.easeInOut,
      });
    });
  }

  function toggleShareMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      openShareMenu();
    } else {
      closeShareMenu();
    }
  }

  $toggleButton.on("mousedown",function(){
    toggleShareMenu();
  });
});
