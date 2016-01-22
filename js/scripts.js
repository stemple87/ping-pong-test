$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = $("input#pigLatin").val();
    var result = pigLatin(userInput);
    $("div#result").text(result);
    // $("#result").show();
    // console.log();
    event.preventDefault();
  });

});



var pingPong = function(input) {
  for (var i = 0; i < input.length; i++) {

    var listItem = "<li>"
    if (i % 15 === 0) {
      input = "";
      input += "PingPong";
      listItem += input + "</li>";
      // return input;
    } else if (i % 3 === 0) {
      input = "";
      input += "Ping";
      listItem += input + "</li>";
      // return input;
    } else if (i % 5 === 0) {
      input = "";
      input += "Pong";
      listItem += input + "</li>";
      // return input;
    } else {
      listItem += [i] + "</li>";
    }
  }
}
