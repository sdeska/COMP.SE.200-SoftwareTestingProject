import { expect } from 'chai';
import map from '../src/map.js';

describe('map', () => {
  it('should create a new array by applying the iteratee to each element', () => {
    const square = (n) => n * n;
    const result = map([4, 8], square);
    expect(result).to.deep.equal([16, 64]);
  });

  it('should handle an empty array', () => {
    const result = map([], (value) => value * 2);
    expect(result).to.deep.equal([]);
  });

  it('should handle an iteratee that transforms values into strings', () => {
    const result = map([1, 2, 3], (value) => String(value));
    expect(result).to.deep.equal(['1', '2', '3']);
  });

  it('should handle an iteratee that uses index and array parameters', () => {
    const addIndex = (value, index, array) => value + index + array.length;
    const result = map([10, 20, 30], addIndex);
    expect(result).to.deep.equal([13, 24, 36]);
  });

  it('should handle an iteratee that returns objects', () => {
    const toObject = (value) => ({ value });
    const result = map([1, 2, 3], toObject);
    expect(result).to.deep.equal([{ value: 1 }, { value: 2 }, { value: 3 }]);
  });

  it('should not modify the original array', () => {
    const originalArray = [1, 2, 3];
    map(originalArray, (value) => value * 2);
    expect(originalArray).to.deep.equal([1, 2, 3]);
  });
});
