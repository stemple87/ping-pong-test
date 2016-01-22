var pingPong = function(input) {
  if (input % 15 === 0) {
    input = "";
    input += "PingPong";
    return input;
  } else if (input % 3 === 0) {
    input = "";
    input += "Ping";
    return input;
  } else if (input % 5 === 0) {
    input = "";
    input += "Pong";
    return input;
  }
}
