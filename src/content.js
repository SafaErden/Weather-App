function populateContent(params) {
	Promise.resolve(params).then(function(value) {
		const mainHeader = document.getElementById('mainHeader');
		const mainDegree = document.getElementById('mainDegree');
		const mainInfo = document.getElementById('mainInfo');
		mainHeader.innerText = value['name'];
		mainDegree.innerText = value['main']['temp'] + ' Celcius';
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

export default populateContent;
