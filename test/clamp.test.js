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

  it('should handle lower bound greater than upper bound', () => {
    expect(clamp(8, 10, 5)).to.equal(5);
  });

  it('should handle NaN input by returning NaN', () => {
    expect(clamp(NaN, -5, 5)).to.be.NaN;
  });

  it('should handle undefined lower bound by treating it as 0', () => {
    expect(clamp(2, undefined, 5)).to.equal(2);
  });

  it('should handle undefined upper bound by treating it as 0', () => {
    expect(clamp(7, 3, undefined)).to.equal(3);
  });

  it('should handle undefined number by treating it as 0', () => {
    expect(clamp(undefined, -5, 5)).to.equal(0);
  });

  it('should handle null lower bound by treating it as 0', () => {
    expect(clamp(2, null, 5)).to.equal(2);
  });

  it('should handle null upper bound by treating it as 0', () => {
    expect(clamp(7, 3, null)).to.equal(3);
  });

  it('should handle null number by treating it as 0', () => {
    expect(clamp(null, -5, 5)).to.equal(0);
  });
});
