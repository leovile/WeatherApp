const api = {
  key: '5021e8bc4d5b40f60e2f230528366ca2',
  base:'https://api.openweathermap.org/data/2.5/'
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

