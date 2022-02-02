import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

function month(month) {
  let name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return name[month];
}

$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    const date = $("#date").val();
    const calculator = new Calculator(date);
    const response = calculator.getDayOfWeek();
    $('#response').append("<p>" + month(calculator.date.getMonth()) + " " + calculator.date.getDate() + ", " + calculator.date.getFullYear() + " is: "+ response + "</p>");
  });
});