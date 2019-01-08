import { flip, generateColors, makeTable } from './flip';
import { Card } from './card';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var width = 8;
    var height = 6;
    var colors = generateColors(width*height);
    var table = makeTable(width, height, colors);
    $("#game").html(table);
    clickCard();
  });

  function clickCard(){
    $(".unflipped").on("click", function(event) {
      event.preventDefault();
      var justFlippedFoundId = $(this).attr('id');
      var justFlippedFoundColor = $(this).attr('value');
      console.log(justFlippedFoundColor);
      if (justFlippedFoundId > 0) {
        $('.just-flipped').attr('id');
      }
      $(this).attr('class', 'just-flipped');
      var hot = [];
      $(this).css('background-color', justFlippedFoundColor);
      $('.just-flipped').each(function() {
        hot.push(new Card($(this).attr('id'), $(this).attr('value')));
      });
      flip(hot);

    });

  }
});
