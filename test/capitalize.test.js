import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('yes')).to.equal('Yes');
  });
});
