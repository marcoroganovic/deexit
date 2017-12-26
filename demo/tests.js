describe('typechecks' () => {
  
  it("should pass", () => {
    expect("string").to.not.be.equal("world");
    expect('hello').to.be.equal('hello');
    expect(1).to.be.equal(1);
    expect(0).to.not.be.equal(1);
  });

  it("checks type of value", () => {
    expect("str").to.be.string;
    expect(1).to.be.number;
    expect(true).to.be.boolean;
    expect(false).to.be.bool;
    expect(undefiend).to.be.undefined;
    expect(() => {}).to.be.func;
    expect([]).to.be.array;
  });

});
