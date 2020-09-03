function populateContent(params) {
	Promise.resolve(params).then(function(value) {
		console.log(value); // "Success"
		const mainHeader = document.getElementById('mainHeader');
		const mainDegree = document.getElementById('mainDegree');
		const mainGif = document.getElementById('mainGif');
		const mainInfo = document.getElementById('mainInfo');
		const Date = document.getElementById('Date');
		mainHeader.innerText = value['name'];
		mainDegree.innerText = value['main']['temp'];
		mainGif.innerText = value['weather'][0]['icon'];
		mainInfo.innerText = value['weather'][0]['description'];
		Date.innerText = value['dt'];
	});
}

export default populateContent;
