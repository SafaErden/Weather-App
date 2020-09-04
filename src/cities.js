async function filterCities(json, param) {
	let i = 0;
	let j = 0;
	const firstFive = [];
	while (j < 5 && i < json.length) {
		if (json[i].name.includes(param)) {
			firstFive.push(json[i].name);
			j += 1;
		}
		i += 1;
	}
	return firstFive;
}

async function getCities(param) {
	const response = await fetch('./city.list.json');
	const cities = await response.json();
	const filterCity = await filterCities(cities, param);
	return filterCity;
}

export default getCities;
