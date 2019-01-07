import { memory } from './memory';
export function Card(id = 0, value = 0, flipped = "unflipped"){
  this.id = id;
  this.value = value;
  this.flipped = flipped;
}

Card.prototype.isMatch = function(cardTwo) {
  
  return memory(this.value, cardTwo.value);
};
