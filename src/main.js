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

    console.log(card)
    console.log("hot card ids: " + hot);

  });

});
