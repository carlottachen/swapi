const residents = document.querySelector('#residents');
const printHere = document.querySelector('section');

function printStr(event){
	printHere.innerHTML = ``;

	console.log('button clicked');
	axios.get(`https://swapi.dev/api/planets/?search=alderaan`).
		then((response) => {
			let resArr = response.data.results[0].residents;
//			console.log(resArr);	
			for(let i = 0; i < resArr.length; i++){
				getNames(resArr);
			}
		}).catch(error => console.log(error));
}
function getNames(names){
	axios.get(names).then((response) => {
		let aName = response.data.results[0].name;
		console.log(aName);
	}).catch(error => console.log(error));
}
residents.addEventListener('click', printStr);

