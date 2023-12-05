import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
  it('should return the original value if not NaN, null, or undefined', () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo('abc', 'default')).to.equal('abc');
    expect(defaultTo(true, false)).to.equal(true);
    expect(defaultTo(0, 42)).to.equal(0);
  });

  it('should return the default value if value is NaN', () => {
    expect(defaultTo(NaN, 10)).to.equal(10);
  });

  it('should return the default value if value is null', () => {
    expect(defaultTo(null, 'default')).to.equal('default');
  });

  it('should return the default value if value is undefined', () => {
    expect(defaultTo(undefined, 'default')).to.equal('default');
  });

  it('should return the default value if value is explicitly set to null', () => {
    expect(defaultTo(null, 'default')).to.equal('default');
  });

  it('should return the default value if value is explicitly set to undefined', () => {
    expect(defaultTo(undefined, 'default')).to.equal('default');
  });
});