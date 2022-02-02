import Calculator from './../src/calculator.js';

describe('Calculator', () => {

  test('should show the current time and date', () => {
    let currDate = new Date();
    let calculator = new Calculator();
    expect(calculator.date).toEqual(currDate);
  });

});