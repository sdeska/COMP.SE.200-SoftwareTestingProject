import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  it('should capitalize the first character of a string', () => {
    const result = capitalize('hello');
    expect(result).to.equal('Hello');
  });

  it('should handle an empty string', () => {
    const result = capitalize('');
    expect(result).to.equal('');
  });

  it('should capitalize the first character and convert the rest to lowercase', () => {
    const result = capitalize('fOO');
    expect(result).to.equal('Foo');
  });

  it('should handle non-string input by converting to string', () => {
    const result = capitalize(123);
    expect(result).to.equal('123');
  });

  it('should handle undefined input', () => {
    const result = capitalize(undefined);
    expect(result).to.equal('');
  });

  it('should handle null input', () => {
    const result = capitalize(null);
    expect(result).to.equal('');
  });
});
