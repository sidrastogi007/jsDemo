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

getpuzzle((error, response) => {
    if (error) {
        console.log(`Error : ${error}`)
    } else {
        console.log(response)
    }
});

// const countryCode = "IN";

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         // console.log(data)
//         let countryFullName = data.find(contry => {
//             // console.log(contry.alpha2Code)
//             return contry.alpha2Code === countryCode;
//         });
//         console.log(countryFullName.name)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has take place')
//     }
// })

// request.open('GET', 'https://restcountries.eu/rest/v2/all');
// request.send();