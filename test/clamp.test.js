import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp', () => {
  it('should clamp a number within the inclusive lower and upper bounds', () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
    expect(clamp(10, -5, 5)).to.equal(5);
  });

  it('should handle lower and upper bounds being equal', () => {
    expect(clamp(3, 3, 3)).to.equal(3);
  });

  it('should handle NaN input by returning NaN', () => {
    expect(clamp(NaN, -5, 5)).to.be.NaN;
  });

  it('should handle null number by returning NaN', () => {
    expect(clamp(null, -5, 5)).to.be.NaN;
  });
});
