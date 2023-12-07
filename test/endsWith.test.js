import { expect } from 'chai';
import endsWith from '../src/endsWith.js';

describe('endsWith', () => {
  it('should return true if string ends with the target string', () => {
    expect(endsWith('abc', 'c')).to.equal(true);
    expect(endsWith('Hello, World!', 'World!')).to.equal(true);
  });

  it('should return false if string does not end with the target string', () => {
    expect(endsWith('abc', 'b')).to.equal(false);
    expect(endsWith('Hello, World!', 'Hello')).to.equal(false);
  });

  it('should handle position argument correctly', () => {
    expect(endsWith('abc', 'b', 2)).to.equal(true);
    expect(endsWith('abc', 'c', 2)).to.equal(false);
    expect(endsWith('Hello, World!', 'World!', 12)).to.equal(false);
    expect(endsWith('Hello, World!', 'World!', 13)).to.equal(true);
  });

  it('should handle position argument greater than string length by treating it as string length', () => {
    expect(endsWith('abc', 'c', 5)).to.equal(true);
    expect(endsWith('Hello, World!', 'World!', 20)).to.equal(true);
  });

  it('should handle undefined position argument by using string length', () => {
    expect(endsWith('abc', 'c', undefined)).to.equal(true);
    expect(endsWith('Hello, World!', 'World!', undefined)).to.equal(true);
  });

  it('should handle empty target string by always returning true', () => {
    expect(endsWith('abc', '')).to.equal(true);
    expect(endsWith('', '')).to.equal(true);
  });
});
