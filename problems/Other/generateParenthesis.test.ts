import { generateParenthesis } from './generateParenthesis';
import { expect, test, describe } from '@jest/globals';

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:

// Input: n = 1
// Output: ["()"]

describe('generateParenthesis', () => {
  test('Example 1', () => {
    const input = 3;
    const output = ['((()))', '(()())', '(())()', '()(())', '()()()'];
    expect(generateParenthesis(input)).toEqual(output);
  });
  test('Example 2', () => {
    const input = 1;
    const output = ['()'];
    expect(generateParenthesis(input)).toEqual(output);
  });
});
