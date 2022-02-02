export default function Calculator(date) {
  this.date = new Date();
  let temp = date.split("-");
  this.date.setFullYear(parseInt(temp[0]));
  this.date.setMonth(parseInt(temp[1]) - 1);
  this.date.setDate(parseInt(temp[2]));
}

Calculator.prototype.getDayName = function(day) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[day];
};

Calculator.prototype.getDaysPassed = function() {
  let month = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  return month[this.date.getMonth()] + this.date.getDate();
};

Calculator.prototype.getDayOfWeek = function() {
  return this.getDayName((((this.getDaysPassed() - this.getYearsPassed()) % 7) + 70) % 7);
};

Calculator.prototype.getYearsPassed = function() {
  return (2024 - this.date.getFullYear() - this.leapYears()) - 7;
};

Calculator.prototype.leapYears = function() {
  let leapDays = 0;
  if (this.date.getFullYear() >= 2024) {
    if (this.date.getMonth() >= 2 && this.date.getFullYear() % 4 === 0) {
      leapDays = 1;
    }
    leapDays += Math.ceil((this.date.getFullYear() - 2024) / 4);
  }

  else if (this.date.getFullYear() <= 2020) {
    if (this.date.getMonth() <= 1 && this.date.getFullYear() % 4 === 0) {
      leapDays = -1;
    }
    leapDays += Math.ceil((this.date.getFullYear() - 2023) / 4);
  }
  return leapDays;
};