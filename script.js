const paragaphs = document.querySelectorAll('p');

paragaphs.forEach(function(paragaph) {
  if (paragaph.textContent.includes('It')) {
    paragaph.remove();
  }
});

const newPragaphs = document.createElement('p');

newPragaphs.textContent = 'Hello this is a new pragraps.';

document.querySelector('body').appendChild(newPragaphs);
