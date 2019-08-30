const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.making = function (guess) {
    guess = guess.toLowerCase();
    const unique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);
    if (unique) {
        this.guessedLetters.push(guess)
    }

    if (unique && isBadGuess) {
        this.remainingGuesses--
    }


}

const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

window.addEventListener('keypress', function (e) {
    const guesse = String.fromCharCode(e.charCode);
    game1.making(guesse)
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
})


