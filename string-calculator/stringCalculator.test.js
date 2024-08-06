const add = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('returns the number itself if only one number is provided', () => {
  expect(add('1')).toBe(1); 
})

test('returns the sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
})
