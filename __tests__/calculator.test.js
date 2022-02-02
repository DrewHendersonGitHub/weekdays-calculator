import Calculator from './../src/calculator.js';

describe('Calculator', () => {

  test('should show the current time and date', () => {
    let currDate = new Date();
    let calculator = new Calculator();
    expect(calculator.date).toEqual(currDate);
  });

  //only passes on wednesdays
  test('should show the current day of the week', () => {
    let calculator = new Calculator();
    expect(calculator.getDay()).toEqual("Wednesday");
  });

  //only passes on february 2
  test('should show total days passed in year', () => {
    let calculator = new Calculator();
    expect(calculator.getDaysPassed()).toEqual(33);
  });

});
