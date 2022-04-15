const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/* <div class="card">
        <i class="fas fa-cat"></i>
        <p> cat </p>
</div> */

const container = document.getElementById('container');
//console.log(container)

function printAllicons(filteredIcon){
	container.innerHTML = ''; // serve a pulire il container ogni volta che la funzione viene attivata 
	filteredIcon.forEach((icona)=>{
	//icona == icons[i] 
		const card = document.createElement('div');
		card.setAttribute('class','card');
		card.innerHTML = `
			<i class="${icona.family}  ${icona.prefix}${icona.name}" style="color:${icona.color}"></i>
			<p>${icona.name}</p>
		`;
		//console.log(card);
		container.append(card);
	})
	
	
}
// for(let i=0; i < icons.length; i++){          -- e la stessa cosa
// 	const card = document.createElement('div');
// 	card.setAttribute('class','card');
		
	
// 	card.innerHTML = `
// 		<i class="${icons[i].family}  ${icons[i].prefix}${icons[i].name}" style="color:${icons[i].color}"></i>
// 		<p>${icons[i].name}</p>
// 	`;

printAllicons(icons);



const typeElement = document.getElementById('type-filter')
//console.log(typeElement)
typeElement.addEventListener('change',function(){
	//console.log(this);
	const iconType = this.value;//salva il valore selezionato da utente 
	//console.log(iconType)
	const filtereIcons = icons.filter((icona)=>{
		//return icona.type === iconType; -- crea un arey con gli ogetti che anno per tipo cio che l'utente a selezionato dalla select 
		return icona.type === iconType || !iconType //soluzine vist a lezione che mi da lo stesso problema della if piu in  basso
	})	
	console.log(filtereIcons)	
	printAllicons(filtereIcons);
})

	// if(iconType === ''){ non funsiona  va sempre nel else
	// 	printAllicons(icons);	
	// } else {
	// 	printAllicons(filtereIcons);
	// }


