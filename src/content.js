let celcius = true;
const toggleButton = document.querySelector('.toggler');

function populateDegree(val) {
  toggleButton.classList.remove('d-none');
  const mainDegree = document.getElementById('mainDegree');
  if (celcius) {
    mainDegree.innerText = `${Math.floor(val)} Celcius`;
  } else {
		mainDegree.innerText = `${Math.floor(val * 9 / 5) + 32} Fahrenheit`; /* eslint-disable-line */
  }
  toggleButton.addEventListener('click', () => {
    if (celcius) {
			mainDegree.innerText = `${Math.floor(val * 9 / 5) + 32} Fahrenheit`; /* eslint-disable-line */
      celcius = false;
      toggleButton.innerHTML = '&#8451;';
    } else {
      mainDegree.innerText = `${Math.floor(val)} Celcius`;
      celcius = true;
      toggleButton.innerHTML = '&#8457;';
    }
  });
}

function populateContent(params) {
  Promise.resolve(params).then((value) => {
    const mainHeader = document.getElementById('mainHeader');
    const mainInfo = document.getElementById('mainInfo');
    mainHeader.innerText = value.name;
    populateDegree(value.main.temp);
    const wetVal = value.weather[0].description;
    mainInfo.innerText = wetVal.charAt(0).toUpperCase() + wetVal.slice(1);

    const wind = document.getElementById('wind');
    const humid = document.getElementById('humid');
    const cloud = document.getElementById('cloud');
    const pressure = document.getElementById('pressure');

    wind.innerText = `${value.wind.speed} KNOTS`;
    humid.innerText = `${value.main.humidity} %`;
    cloud.innerText = `${value.clouds.all} %`;
    pressure.innerText = `${value.main.pressure} mBar`;

    const mainIcon = document.getElementById('mainIcon');

    switch (value.weather[0].main) {
      case 'Clouds':
        mainIcon.className = '';
        mainIcon.classList.add('fas', 'fa-cloud', 'text-gray', 'display-1');
        document.body.style.backgroundImage = "url('./images/cloud.jpg')";
        break;
      case 'Rain':
        mainIcon.className = '';
        mainIcon.classList.add('fas', 'fa-cloud-rain', 'text-primary', 'display-1');
        document.body.style.backgroundImage = "url('./images/rain.jpg')";
        break;
      case 'Clear':
        mainIcon.className = '';
        mainIcon.classList.add('fas', 'fa-sun', 'text-warning', 'display-1');
        document.body.style.backgroundImage = "url('./images/clear.jpg')";
        break;
      default:
        mainIcon.className = '';
        mainIcon.classList.add('fas', 'fa-cloud-sun', 'text-warning', 'display-1');
        document.body.style.backgroundImage = "url('./images/wind.jpg')";
    }
  });
}

export default populateContent;
