const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat Cat', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

// getpuzzle((error, response) => {
//     if (error) {
//         console.log(`Error : ${error}`)
//     } else {
//         console.log(response)
//     }
// });

getcountryDetails('IN', (err, res) => {
    if (err) {
        console.log(`Error ${err}`);
    } else {
        console.log(res);
    }
})