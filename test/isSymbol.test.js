import { expect } from 'chai';
import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {
  it('should return true for Symbol primitive', () => {
    expect(isSymbol(Symbol.iterator)).to.equal(true);
  });

  it('should return true for Symbol object', () => {
    const symbolObject = Object(Symbol.iterator);
    expect(isSymbol(symbolObject)).to.equal(true);
  });

  it('should return false for non-Symbol values', () => {
    expect(isSymbol('abc')).to.equal(false);
    expect(isSymbol(42)).to.equal(false);
    expect(isSymbol(null)).to.equal(false);
    expect(isSymbol(undefined)).to.equal(false);
  });

  it('should return false for objects with a "Symbol" property', () => {
    const objWithSymbolProp = { Symbol: 'test' };
    expect(isSymbol(objWithSymbolProp)).to.equal(false);
  });

  it('should return false for empty objects', () => {
    const emptyObject = {};
    expect(isSymbol(emptyObject)).to.equal(false);
  });

  it('should return false for arrays', () => {
    const array = [1, 2, 3];
    expect(isSymbol(array)).to.equal(false);
  });
});
