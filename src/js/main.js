import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {agePlanet} from './js/planet-age.js';

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    const planet = $('#planet-name');
    const earthAge = parseInt($('#earth-age').val());
    const planetStay = parseInt($('#planet-stay').val());
    const response = planetAge.checkType();
    $('#response').append(`<p>${response}</p>`);
  });