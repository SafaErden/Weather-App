import getCities from './cities';
import populateContent from './content';

const listWrapper = document.querySelector('.listWrapper');
const results = document.createElement('ul');

async function getLocations(value) {
	try {
		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=a62a939fdc5a7df5164d021d0e94ce6b&units=metric`,
			{ mode: 'cors' }
		);
		const result = await response.json();
		return result;
	} catch (e) {
		alert(e, 'Oops, something went wrong!');
	}
}

function resetResults(listWrapper, results) {
	listWrapper.innerHTML = '';
	results.innerHTML = '';
}

function listenResults() {
	const results = document.querySelectorAll('.searchItems');
	results.forEach((item) => {
		item.addEventListener('click', () => {
			const finalResult = getLocations(item.innerText);
			resetResults(listWrapper, results);
			populateContent(finalResult);
		});
	});
}

async function manageSeacrh() {
	results.classList.add('list-unstyled', 'p-0', 'm-0');

	const search = document.getElementsByTagName('input')[0];
	search.addEventListener('input', async () => {
		const searchResult = await getCities(
			search.value.charAt(0).toUpperCase() + search.value.slice(1)
		); /* eslint-disable-line */
		resetResults(listWrapper, results);
		searchResult.forEach((item) => {
			const result = document.createElement('li');
			result.classList.add('border', 'p-2', 'm-0', 'searchItems');
			result.innerText = item;
			results.appendChild(result);
		});
		if (listWrapper.appendChild(results)) {
			listenResults();
		}
	});
}

export { manageSeacrh, listenResults };
