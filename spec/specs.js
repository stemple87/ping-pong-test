describe('pingPong', function() {
  it("will replace any numbers divisible by 3 with the word Ping", function() {
    expect(pingPong(3)).to.equal("Ping");
  });
});
