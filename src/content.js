let celcius = true;
const toggleButton = document.querySelector('.toggler');

function populateContent(params) {
	Promise.resolve(params).then(function(value) {
		const mainHeader = document.getElementById('mainHeader');
		const mainInfo = document.getElementById('mainInfo');
		mainHeader.innerText = value['name'];
		populateDegree(value['main']['temp']);

		mainInfo.innerText =
			value['weather'][0]['description'].charAt(0).toUpperCase() + value['weather'][0]['description'].slice(1);

		const wind = document.getElementById('wind');
		const humid = document.getElementById('humid');
		const cloud = document.getElementById('cloud');
		const pressure = document.getElementById('pressure');

		wind.innerText = value['wind']['speed'] + ' KNOTS';
		humid.innerText = value['main']['humidity'] + ' %';
		cloud.innerText = value['clouds']['all'] + ' %';
		pressure.innerText = value['main']['pressure'] + ' mBar';

		const mainIcon = document.getElementById('mainIcon');

		switch (value['weather'][0]['main']) {
			case 'Clouds':
				mainIcon.className = '';
				mainIcon.classList.add('fas', 'fa-cloud', 'text-gray', 'display-1');
				break;
			case 'Rain':
				mainIcon.className = '';
				mainIcon.classList.add('fas', 'fa-cloud-rain', 'text-primary', 'display-1');
				break;
			case 'Clear':
				mainIcon.className = '';
				mainIcon.classList.add('fas', 'fa-sun', 'text-warning', 'display-1');
				break;
			default:
				mainIcon.className = '';
				mainIcon.classList.add('fas', 'fa-cloud-sun', 'text-warning', 'display-1');
		}
	});
}

function populateDegree(val) {
	toggleButton.classList.remove('d-none');
	const mainDegree = document.getElementById('mainDegree');
	if (celcius) {
		mainDegree.innerText = Math.floor(val) + ' Celcius';
	} else {
		mainDegree.innerText = Math.floor(val * 9 / 5) + 32 + ' Fahrenheit';
	}
	toggleButton.addEventListener('click', () => {
		if (celcius) {
			mainDegree.innerText = Math.floor(val * 9 / 5) + 32 + ' Fahrenheit';
			celcius = false;
			toggleButton.innerHTML = '&#8451;';
		} else {
			mainDegree.innerText = Math.floor(val) + ' Celcius';
			celcius = true;
			toggleButton.innerHTML = '&#8457;';
		}
	});
}

export default populateContent;
