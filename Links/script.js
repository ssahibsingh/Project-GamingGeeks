var $slideLink = $("#slide-link"),
    slideLinkText = $slideLink.find("span")[0];

$slideLink.on("mouseenter", linkOver);

function linkOver() {
  TweenLite.to(slideLinkText, 0.3, {y: -25, ease: Cubic.easeIn, onComplete: function() {
    TweenLite.fromTo(slideLinkText, 0.3, {y: 25}, {y: 0, ease: Cubic.easeOut})
  }});
}