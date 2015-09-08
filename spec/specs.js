describe('triangle', function() {
  it('will return true if equilateral triangle', function() {
    expect(triangle(2, 2, 2)).to.equal('Equilateral')
  });

  it('will return isosceles for triangle', function() {
    expect(triangle(2, 2, 3)).to.eq("Isosceles")
  });

  it('will return scalene for triangle with no equal sides', function() {
    expect(triangle(2, 5, 6)).to.eq("Scalene")
  });

  it('will return an error if it is not a triangle', function() {
    expect(triangle(2, 2, 8)).to.equal("Not a triangle.")
  });
});
