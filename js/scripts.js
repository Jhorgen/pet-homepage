$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#muted").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});
