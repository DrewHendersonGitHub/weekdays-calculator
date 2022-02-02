import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';



let calculator = new Calculator();
console.log(calculator.getDaysPassed());

$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    const length1 = $('#length1').val();
    const length2 = $('#length2').val();
    const length3 = $('#length3').val();
    const triangle = new Calculator(length1, length2, length3);
    const response = triangle.checkType();
    $('#response').append("<p>" + response + "</p>");
  });
});