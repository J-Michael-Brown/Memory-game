import { Card } from './card';
import './styles.css';

$(document).ready(function() {
  $(".unflipped").click(function(event) {
    event.preventDefault();
    var justFlippedFoundId = $('.just-flipped').attr('id');
    if (justFlippedFoundId > 0) {
        $('.just-flipped').attr('id');
    }
    var check = $(this).attr('id');
    console.log("target id: " + check);
    var card = new Card(check);
    $(this).attr('class', 'just-flipped');

    var hot = [];
    $('.just-flipped').each(function() {
      hot.push(new Card($(this).attr('id')));
    });

    console.log(card);
    if (hot.length > 1) {
      if (hot[0].isMatch(hot[1])) {
        $('.just-flipped').addClass('flipped');
        $('.just-flipped').removeClass('just-flipped');
      } else {
        // add a couple of seconds
        $('.just-flipped').addClass('unflipped');
        $('.just-flipped').removeClass('just-flipped');
      }
    }


    console.log("hot card ids: " + hot);

  });

});
