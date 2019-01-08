export function flip(hot) {
  if (hot.length > 1) {
    if (hot[0].isMatch(hot[1])) {
      $('.just-flipped').addClass('flipped');
      $('#' + hot[0].id.toString() ).css('background-color', hot[0].value);
      $('#' + hot[1].id.toString() ).css('background-color', hot[1].value);
      $('.just-flipped').removeClass('just-flipped');
    } else {
      // add a couple of seconds
      setTimeout(function() {
        $('.just-flipped').addClass('unflipped');
        // hot[0].css('background-color', hot[0].value);
        $('#' + hot[0].id.toString() ).css('background-color', 'black');
        $('#' + hot[1].id.toString() ).css('background-color', 'black');
        $('.just-flipped').removeClass('just-flipped');
      }, 500);
    }
  }
}

function shuffle(array) { // found on Stack overflow user deekshith
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function generateColors(numberOfCards) {
  var workingNumbers = numberOfCards/2;
  var colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  var randColors = [];
  var i = 0;
  if (workingNumbers >= 0) {
    while (i < workingNumbers) {
      for (var j = 0; j < colors.length; j++) {
        randColors.push(colors[j]);
        i++;
        if (i >= workingNumbers) {
          break;
        }
      }
    }
  }

  return shuffle(randColors.concat(randColors));
}

export function makeTable(length, height, colors) {
  var totalCells = 0;
  var htmlCode = '<table id="game-board">\n';
  var colorsIndex = 0;

  for (var h=0; h<height; h++) {
    htmlCode = htmlCode + "\t<tr>\n";
    for (var l=0; l<length; l++) {
      htmlCode = htmlCode + '\t\t<td><div id="cell-'+ totalCells++ + '" value="' + colors[colorsIndex] + '" class="unflipped"><p>hey</p></div></td>\n';
      colorsIndex++;
    }
    htmlCode = htmlCode + "\t</tr>\n";
  }
  htmlCode = htmlCode + "</table>\n";

  return htmlCode;
}
