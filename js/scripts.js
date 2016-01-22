$(document).ready(function() {
  var pingPong = function() {
    // debugger;
    var userInput;
    var i;
    userInput = parseInt(prompt("Enter your number here"));
    for (i = 1; i <= userInput; i++) {
      if (isNaN(userInput)) { // <-- isNaN not working
        $('span#pingPongResults').append("Please type a number!");
      } else if ((i % 15) === 0) {
        $('span#pingPongResults').append("<span class='pingPong'>PingPong</span> ");
      } else if ((i % 3) === 0) {
        $('span#pingPongResults').append("<span class='ping'>Ping</span> ");
      } else if ((i % 5) === 0) {
        $('span#pingPongResults').append("<span class='pong'>Pong</span> ");
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
