const Hangman = function (word, attment) {
  this.word = word.toLowerCase().split('');
  this.attment = attment;
  this.guesseLatters = ['c', 'd', 'g'];
}

Hangman.prototype.getPuzzels = function () {
  let puzzel = '';
  this.word.forEach(latters => {
    if (this.guesseLatters.includes(latters)) {
      puzzel += latters;
    } else {
      puzzel += '*';
    }
  });
  return puzzel;
}

const guesse = new Hangman('Cat', 2);
console.log(guesse.getPuzzels());

const guesse2 = new Hangman('Dog', 5);
console.log(guesse2.getPuzzels());

