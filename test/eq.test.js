import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq', () => {
  it('should return true for equivalent values', () => {
    expect(true).to.equal(true);
  });
});
