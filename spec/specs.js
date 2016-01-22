describe('pingPong', function() {
  it("will replace any numbers divisible by 3 with the word Ping", function() {
    expect(pingPong(3)).to.equal("Ping");
  });
  it("will replace any numbers divisible by 5 with the word Pong", function() {
    expect(pingPong(5)).to.equal("Pong");
  });
});
