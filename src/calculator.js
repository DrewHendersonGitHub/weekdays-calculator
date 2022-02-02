export default function Calculator(date) {
  this.date = new Date();
  let temp = date.split("-");
  this.date.setFullYear(parseInt(temp[0]));
  this.date.setMonth(parseInt(temp[1]) - 1);
  this.date.setDate(parseInt(temp[2]));
  console.log(this.date);
}

Calculator.prototype.getDay = function() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[this.date.getDay()];
};

Calculator.prototype.getDaysPassed = function() {
  let month = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  return month[this.date.getMonth()] + this.date.getDate();
};

Calculator.prototype.getDayOfWeek = function() {
  return this.getDaysPassed() % 7;
};