const printHere = document.querySelector('section');

const printStr = event => {
	event.preventDefault();

	console.log('button clicked');
	axios.get(`https://swapi.dev/api/planets/?search=alderaan`).
	then((response) => {

		let resArr = response.data.results[0].residents;
		for(let i = 0; i < resArr.length[i]; i++){

			axios.get(resArr.lenght[i]).then((res) => {
				//printHere.innerHTML = res.data.name;
				//document.body.append(printHere);
				console.log(res.data.name);
			})

		}

	}).catch(error => console.log(error));
}
document.querySelector('residents').addEventListener('click', printStr);
