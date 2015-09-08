describe('leapYear', function() {
  it("is false for a year that is not divisible by 4", function() {
    expect(leapYear(1999)).to.equal(false);
  });

  it('is true for years divisible by 4', function() {
    expect(leapYear(4)).to.eq(true);
  });

  it('is false for most years divisible by 100', function() {
    expect(leapYear(1900)).to.equal(false);
  });

  it('returns true if divisible by 4 hundo', function() {
    expect(leapYear(800)).to.eq(true);
  });
});
