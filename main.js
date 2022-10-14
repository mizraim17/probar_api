let peticiona = () => {
	let arg = document.getElementById("idArgs");

	fetch(`https://rickandmortyapi.com/api/location/2`)
		.then((response) => response.json())
		.then((data) => console.log("data", data));
};

let pinta = (data) => {
	console.log("data", data, data.id, data.imagen, data.personaje);

	containerData.innerHTML = "";
	let column = document.createElement("div");

	column.className = "col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mt-3 ";
	column.id = `character-${data.id}`;
	column.innerHTML = `
			<a href="#" id="btn-possAssesin-${data.id}" " > 
				<div class="cardz">		
					<img src=" ${data.imagen}" id="imgId-${data.id}" class="rounded"  style="width:100%" >
					<div class="container">			
						<p class="cardz-title ">${data.personaje}</p>
					</div>
				</div>		
			</a>
		`;

	containerData.append(column);
};

let inicializa = () => {
	containerData = document.getElementById("pinta");
	let btn_submit = document.getElementById("btnSubmit");
	btn_submit.onclick = () => peticiona();
};

let main = () => {
	inicializa();
};

main();
