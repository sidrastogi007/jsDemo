const request = new XMLHttpRequest();

const getpuzzle = (collback) => {
  // const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', function (e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      collback(undefined, data)
    } else if (e.target.readyState === 4) {
      collback('An error has take place', undefined)
    }
  })

  request.open('GET', 'http://puzzle.mead.io/puzzle', false);
  request.send();
}

const getcountryDetails = (code, callBack) => {
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callBack(undefined, data)
    } else if (e.target.readyState === 4) {
      callBack('An error has take place', undefined)
    }
  })

  request.open('GET', `https://restcountries.eu/rest/v2/alpha/${code}`);
  request.send();
}