import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter', () => {
  it('should filter elements based on the provided predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false },
      { 'user': 'alice',  'active': true }
    ];

    const filteredUsers = filter(users, ({ active }) => active);
    expect(filteredUsers).to.deep.equal([
      { 'user': 'barney', 'active': true },
      { 'user': 'alice',  'active': true }
    ]);
  });

  it('should handle an empty array', () => {
    const emptyArray = filter([], () => true);
    expect(emptyArray).to.deep.equal([[]]);
  });

  it('should handle a predicate that filters everything out', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];

    const filteredUsers = filter(users, () => false);
    expect(filteredUsers).to.deep.equal([[]]);
  });

  it('should handle a predicate that includes everything', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];

    const filteredUsers = filter(users, () => true);
    expect(filteredUsers).to.deep.equal(users);
  });

  it('should handle a predicate that filters based on index', () => {
    const numbers = [1, 2, 3, 4, 5];

    const filteredNumbers = filter(numbers, (value, index) => index % 2 === 0);
    expect(filteredNumbers).to.deep.equal([1, 3, 5]);
  });
});
