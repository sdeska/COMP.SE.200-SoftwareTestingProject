import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq', () => {
  it('should return true for equivalent values', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).to.equal(true);
    expect(eq('a', 'a')).to.equal(true);
    expect(eq(NaN, NaN)).to.equal(true);
    expect(eq(42, 42)).to.equal(true);
  });

  it('should return false for non-equivalent values', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, other)).to.equal(false);
    expect(eq('a', Object('a'))).to.equal(false);
    expect(eq(42, '42')).to.equal(false);
  });

  it('should handle different types correctly', () => {
    expect(eq(42, '42')).to.equal(false);
    expect(eq(null, undefined)).to.equal(false);
  });

  it('should handle NaN values correctly', () => {
    expect(eq(NaN, 42)).to.equal(false);
    expect(eq(NaN, 'NaN')).to.equal(false);
  });
});
