async function filterCities(json, param) {
	let i = 0;
	let j = 0;
	let firstFive = [];
	while (j < 5 && i < json.length) {
		if (json[i]['name'].includes(param)) {
			firstFive.push(json[i]['name']);
			j++;
		}
		i++;
	}
	return firstFive;
}

async function getCities(param) {
	let response = await fetch('../src/city.list.json');
	let cities = await response.json();

	let filterCity = await filterCities(cities, param);

	return filterCity;
}

export default getCities;
