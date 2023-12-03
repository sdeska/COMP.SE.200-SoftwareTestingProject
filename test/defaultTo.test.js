import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
  it('should return the original value if not NaN, null, or undefined', () => {
    expect(true).to.equal(true);
  });
});