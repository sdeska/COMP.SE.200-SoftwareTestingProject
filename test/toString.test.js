import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
  it('should return an empty string for null and undefined values', () => {
    expect(toString(null)).to.equal('');
    expect(toString(undefined)).to.equal('');
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  it('should convert an array to a string', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
  });

  it('should recursively convert nested arrays to strings', () => {
    const nestedArray = [1, [2, [3, [4]]]];
    expect(toString(nestedArray)).to.equal('1,2,3,4');
  });

  it('should convert symbols to strings using toString', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).to.equal(symbol.toString());
  });

  it('should convert other values to strings using the default conversion', () => {
    expect(toString(42)).to.equal('42');
    expect(toString(true)).to.equal('true');
    expect(toString({ key: 'value' })).to.equal('[object Object]');
  });

  it('should handle NaN values correctly', () => {
    expect(toString(NaN)).to.equal('NaN');
  });

  it('should handle Infinity values correctly', () => {
    expect(toString(Infinity)).to.equal('Infinity');
    expect(toString(-Infinity)).to.equal('-Infinity');
  });
});
