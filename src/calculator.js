export default function Calculator() {
  this.date = new Date();
}

Calculator.prototype.getDay = function() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[this.date.getDay()];
};

Calculator.prototype.getDaysPassed = function() {
  let month = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  return month[this.date.getMonth()] + this.date.getDate();
};