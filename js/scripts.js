$(document).ready(function() {
  var pingPong = function() {
    // debugger;
    var userInput;
    var i;
    userInput = parseInt(prompt("Enter your number here"));
    for (i = 1; i <= userInput; i++) {
      if ((i % 15) === 0) {
        $('span#pingPongResults').append("PingPong ");
      } else if ((i % 3) === 0) {
        $('span#pingPongResults').append("Ping ");
      } else if ((i % 5) === 0) {
        $('span#pingPongResults').append("Pong ");
      } else {
        $('span#pingPongResults').append(i + " ");
      }
    }
  }
  $("button#button").click(function() {
  pingPong();
  $("div#hiddenResult").show();
  });
});
