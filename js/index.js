$(document).ready(function () {  
  
  function submit() {
    var input = $(".question").val();
    
    $(".outputQ").animate({
        opacity: 0
      }, 500,
      function() {
        $(this).animate({
          opacity: 1
        }, 500);
      $(".outputQ").html('"' + input + '?"');
      $(".question").val('');
      
      if (input === "") {
        alert("Sorry, please enter your question again.");
        $(".outputQ").html('<p class = "temp">...Question here...</p>');
      } else if (input.slice(-1) === "?") {
        $(".outputQ").html('"' + input + '"');
      }
    });    
  };
  
  function answer() {
    var ansArray = ["Maybe.", "Never know until you try!", "You might want to think twice about it.", "Give it some thought.", "Yes, go for it!", "Yes.", "Um, no.", "N.O.", "It depends on you.", "Are you kidding me?! OF COURSE!", "Don't ask the obvious ;)", "Maybe.....?", "Maybe, maybe not."];
    var random = Math.floor(Math.random() * (ansArray.length));
    $("#answer").html('<h4 class = "ansCSS">' + ansArray[random] + '</h4>');
  };
  
  $("#submit").on('click', function(e) {
    e.preventDefault();
    submit();
    $("#answer").animate({
      opacity: 0
      }, 1400,
      function() {
        $(this).animate({
          opacity: 1
        }, 1400);
      answer();
    });
  });
  
});