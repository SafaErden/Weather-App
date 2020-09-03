import getCities from './cities';

const search = document.getElementsByTagName('input')[0];
const results = document.querySelector('.list-unstyled');
search.addEventListener('input', async () => {
	let searchResult = await getCities(search.value);
	console.log(searchResult);

	searchResult.forEach((item) => {
		console.log('safa');
		const result = document.createElement('li');
		result.classList.add('border', 'p-2', 'm-0');
		result.innerText = item;
		results.appendChild(result);
	});
});

async function getLocations(value) {
	const response = await fetch(
		'http://api.openweathermap.org/data/2.5/weather?q=' + value + '&APPID=a62a939fdc5a7df5164d021d0e94ce6b',
		{ mode: 'cors' }
	);
	const result = await response.json();
	return result;
}
