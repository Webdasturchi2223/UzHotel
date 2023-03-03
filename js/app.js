jQuery(document).ready(function($) {
  var icon = $(".menu");
  var menu = $(".mobile");
  var tl = new TimelineLite({ paused: true, reversed: true });
  tl.fromTo(
    ".mobile",
    0.5,
    {
      x: -200,
      autoAlpha: 0
    },
    {
      x: 0,
      autoAlpha: 1,
      ease: Power4.easeOut
    }
  );
  icon.click(function() {
    tl.play();
  });
  $(".mobile__link").click(function() {
    tl.reverse();
  });
  $(".close-menu").click(function() {
    tl.reverse();
  });
});