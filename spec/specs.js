describe('pingPongTester', function() {
  it("will replace any numbers divisible by 3 with the word Ping", function() {
    expect(pingPongTester(3)).to.equal("Ping");
  });
  it("will replace any numbers divisible by 5 with the word Pong", function() {
    expect(pingPongTester(5)).to.equal("Pong");
  });
  it("will replace any numbers divisible by 15 with the word PingPong", function() {
    expect(pingPongTester(15)).to.equal("PingPong");
  });
  it("will return 'Not 3, 5, or 15' if not 3, 5, or 15", function() {
    expect(pingPongTester(4)).to.equal("Not 3, 5, or 15");
  });
});
