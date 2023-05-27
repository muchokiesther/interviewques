const fizzBuzz = require('./fizzbuzz');

describe('Testing fizzBuzz Question', () => {


  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should  values for numbers that are divisible by both 3 and 5', () => {
    fizzBuzz(15);
    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy.mock.calls).toEqual([
      ['1'], ['2'], ['Fizz'], ['4'], ['Buzz'], ['Fizz'], ['7'], ['8'], ['Fizz'], ['Buzz'], ['11'], ['Fizz'], ['13'], ['14'], ['FizzBuzz']
    ]);
  });

  it('should return correct values for numbers divisible by 3', () => {
    fizzBuzz(9);
    expect(consoleSpy).toHaveBeenCalledTimes(9);
    expect(consoleSpy.mock.calls).toEqual([
      ['1'], ['2'], ['Fizz'], ['4'], ['Buzz'], ['Fizz'], ['7'], ['8'], ['Fizz']
    ]);
  });

  it('should return correct values for numbers divisible by 5', () => {
    fizzBuzz(10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy.mock.calls).toEqual([
      ['1'], ['2'], ['Fizz'], ['4'], ['Buzz'], ['Fizz'], ['7'], ['8'], ['Fizz'], ['Buzz']
    ]);
  });
});
