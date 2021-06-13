const api = {
  key: '5021e8bc4d5b40f60e2f230528366ca2',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBox.value);
    console.log(searchBox.value);
  }
}

function getResults(cidade) {
  fetch(`${api.base}weather?q=${cidade}&units=metric&appid=${api.key}&lang=pt_br`)
    .then(response => {
      return response.json();
    }).then(displayResults);

}

function displayResults(weather) {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  console.log(weather)
  document.querySelector('#city').innerText = `${weather.name}, ${weather.sys.country}`;
  let data = new Date();
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  document.querySelector('#date').innerText = `${data.getDate()} de ${months[data.getMonth()]}`
  document.querySelector('#temperature').innerText = `${weather.main.temp.toFixed(1)}°C`;
  document.querySelector('#condition').innerText = capitalize(`${weather.weather[0].description}`)
  document.querySelector('#max-min-temp').innerText = `${weather.main.temp_min.toFixed(1)}°C / ${weather.main.temp_max.toFixed(1)}°C`

  switch (`${weather.weather[0].main}`) {
    case "Clear":
      document.getElementById('background').style.backgroundImage = 'url(assets/images/pexels-francesco-ungaro-281260.webp)';
      break;
    case "Rain":
    case "Drizzle":
      document.getElementById('background').style.backgroundImage = 'url(assets/images/pexels-kaique-rocha-125510.webp)';
      break;
    case "Thunderstorm":
      document.getElementById('background').style.backgroundImage = 'url(assets/images/pexels-lachlan-ross-6510356.webp)';
      break;
    case "Clouds":
      document.getElementById('background').style.backgroundImage = 'url(assets/images/pexels-pixabay-414659.webp)';
      break;
    case "Snow":
      document.getElementById('background').style.backgroundImage = 'url(assets/images/pexels-pixabay-163756.webp)';
      break;   
    default:
      break;
  }
}