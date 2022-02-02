import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    const date = $("#date").val();
    console.log(date);
    const calculator = new Calculator(date);
    const response = calculator.getDayOfWeek();
    $('#response').append("<p>" + response + "</p>");
  });
});