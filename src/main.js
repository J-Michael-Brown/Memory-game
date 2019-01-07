import { flip, generateColors, makeTable } from './flip';
import { Card } from './card';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    debugger;
    event.preventDefault();
    console.log('button clicked');
    var colors = generateColors(16);
    debugger;
    var table = makeTable(4, 4, colors);
    debugger;
    $("#game").append(table);
  });


  $(".unflipped").click(function(event) {
    event.preventDefault();
    var justFlippedFoundId = $('.just-flipped').attr('id');
    if (justFlippedFoundId > 0) {
        $('.just-flipped').attr('id');
    }
    $(this).attr('class', 'just-flipped');

    var hot = [];
    $('.just-flipped').each(function() {
      hot.push(new Card($(this).attr('id'), $(this).attr('value')));
    });
    flip(hot);

  });

});
