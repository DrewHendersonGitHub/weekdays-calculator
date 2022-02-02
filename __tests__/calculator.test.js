import Calculator from './../src/calculator.js';

describe('Calculator', () => {

  test('should show the current time and date', () => {
    let currDate = new Date();
    currDate.setFullYear(2022);
    currDate.setMonth(4);
    currDate.setDate(16);
    let calculator = new Calculator("2022-05-16");
    expect(calculator.date).toEqual(currDate);
  });

  //only passes on wednesdays
  test('should show the current day of the week', () => {
    let calculator = new Calculator("2022-05-16");
    expect(calculator.getDay()).toEqual("Monday");
  });

  //only passes on february 2
  test('should show total days passed in year', () => {
    let calculator = new Calculator("2022-05-16");
    expect(calculator.getDaysPassed()).toEqual(136);
  });

});
