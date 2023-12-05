import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  it('should convert the first character of a lowercase string to upper case', () => {
    expect(upperFirst('fred')).to.equal('Fred');
  });

  it('should leave the first character of an already uppercase string unchanged', () => {
    expect(upperFirst('FRED')).to.equal('FRED');
  });

  it('should convert the first character of a mixed-case string to upper case', () => {
    expect(upperFirst('fREd')).to.equal('FREd');
  });

  it('should handle an empty string', () => {
    expect(upperFirst('')).to.equal('');
  });

  it('should handle a string with a single character', () => {
    expect(upperFirst('a')).to.equal('A');
  });

  it('should handle non-alphabetic characters', () => {
    expect(upperFirst('123abc')).to.equal('123abc');
  });

  it('should handle non-alphanumeric characters', () => {
    expect(upperFirst('!@#$')).to.equal('!@#$');
  });

  it('should handle non-string values by converting them to strings', () => {
    expect(upperFirst(123)).to.equal('123');
    expect(upperFirst(true)).to.equal('True');
    expect(upperFirst(null)).to.equal('Null');
  });
});
