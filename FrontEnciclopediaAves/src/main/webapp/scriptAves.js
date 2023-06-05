





var url63 = "http://localhost:8081/enciclopediaapi/enciclopediaaves";
var xhr1 = new XMLHttpRequest();
xhr1.open('GET', url63, true);
xhr1.onload = function() {
	var operaciones = JSON.parse(xhr1.responseText);
	if (xhr1.status == "202") {
		console.table(operaciones);
		var aaux = operaciones.length;
		var lastBirname1 = operaciones[aaux - 1].nombrecientifico;
		var lastBirname2 = operaciones[aaux - 2].nombrecientifico;
		var lastBirname3 = operaciones[aaux - 3].nombrecientifico;

		var apiKey = "AIzaSyCMWDquM35Gb1YaGCxnQc-UOH9Rpshrcko";
		var cx = "70f5772c9adad4d32";


		var searchUrl = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + "Ave " + lastBirname1 + "&searchType=image";
		var searchUrl2 = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + "Ave " + lastBirname2 + "&searchType=image";
		var searchUrl3 = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + "Ave " + lastBirname3 + "&searchType=image";


		var firstImage;
		var secondImage;
		var thirdImage

		var titles = [lastBirname1, lastBirname2, lastBirname3];


		$.get(searchUrl, function(data) {
			firstImage = data.items[0].link;
			imageUrls[0] = firstImage;


		});

		$.get(searchUrl2, function(data) {
			secondImage = data.items[0].link;


			imageUrls[1] = secondImage;

		});
		$.get(searchUrl3, function(data) {
			thirdImage = data.items[0].link;
			imageUrls[2] = thirdImage;



		});
		var imageUrls = [];
		console.log(imageUrls);

		for (var i = 0; i < 3; i++) {
			var titleElement = document.createElement("h3");
			titleElement.textContent = titles[i];
			birdList.appendChild(titleElement);

			var imageElement = document.createElement("img");
			imageElement.src = imageUrls[i];
			imageElement.alt = titles[i];
			birdList.appendChild(imageElement);
			console.log(imageUrls[i]);
		}

		birdListElement.appendChild(birdList);


	} else {

		console.error(operaciones);
	}
}
xhr1.send(null);




var Patricio = document.getElementById("ayudadios");
//intento metodo putt
Patricio.addEventListener("submit", function(event) {
	event.preventDefault();
	//var codigoEjecutado = false;



	const url2 = `https://api.gbif.org/v1/species?name=${document.getElementById("nombre-cientifico").value}&limit=1`;

	fetch(url2)
		.then(response => response.json())
		.then(data => {
			if (data.results.length > 0) {
				const ave = data.results[0];
				const familia = ave.family;
				const orden = ave.order;
				const clase = ave.class;
				const filo = ave.phylum;
				const reino = ave.kingdom;




				const url = `https://es.wikipedia.org/api/rest_v1/page/summary/${document.getElementById("nombre-cientifico").value}`;

				fetch(url)
					.then(response => response.json())
					.then(data => {

						var urlGet = "http://localhost:8081/enciclopediaapi/enciclopedia";
						var xhr2 = new XMLHttpRequest();
						xhr2.open('GET', urlGet, true);
						xhr2.onload = function() {
							var operaciones = JSON.parse(xhr2.responseText);
							if (xhr2.status == "202") {
								console.table(operaciones);
								var aux = document.getElementById("nombre-biologo").value;
								for (var i = 0; i < operaciones.length; i++) {
									if (operaciones[i].nombre == aux) {
										const birdInfo = data.extract; // Obtener la información del ave desde la respuesta de la API
										var formData = new FormData();
										formData.append('biologo', document.getElementById("nombre-biologo").value);
										formData.append('nombrecientifico', document.getElementById("nombre-cientifico").value);
										formData.append('familia', familia);
										formData.append('orden', orden);
										formData.append('clase', clase);
										formData.append('filo', filo);
										formData.append('reino', reino);
			


										xhr.send(formData);
										alert("creado");
										console.log(operaciones[i].nombre + " " + aux + document.getElementById("nombre-cientifico").value + " " + operaciones[i].ave);


										var urlPut = "http://localhost:8081/enciclopediaapi/enciclopediaA/{id}";
										var xhr3 = new XMLHttpRequest();
										xhr3.open('PUT', urlPut, true);
										xhr3.onload = function() {
											if (xhr2.status == "202") {
												alert("Actualizado con existo");

											} else {
												alert(" error");

											}
										}


									}else{
										alert("El biologo no existe");
									}
									console.log(aux + " " + operaciones[i].nombre + " " + document.getElementById("nombre-cientifico").value + " " + operaciones[i].ave);
									if (operaciones[i].nombre == aux) {
								
										if (operaciones[i].ave != document.getElementById("nombre-cientifico").value) {
												var formData2 = new FormData();
												formData2.append('id', operaciones[i].id );
												formData2.append('ave', document.getElementById("nombre-cientifico").value)
											console.log(formData2);
											xhr3.send(formData2);

											alert("vamor");
										}



									}
								}

							} else {

								console.error(operaciones);
							}
						}
						xhr2.send(null);





					})
					.catch(error => {
						console.error('Error al obtener la información del ave:', error);
					});

			} else {
				console.log('No se encontró información para el ave especificada.');
			}
		})
		.catch(error => {
			console.error('Error:', error);
		});









	var url3 = "http://localhost:8081/enciclopediaapi/enciclopediaaves";
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url3, true);

	//verificar la inf guardada



	xhr.onload = function() {
		if (xhr.status === 201) {
			alert("ave guardado correctamente");
		} else {
			alert("Error al guardar el Biologo");
		}
	};

	xhr.onerror = function() {
		console.error("Error de red al intentar guardar el Biologo");
	};


});










    // Obtener la información de las últimas aves agregadas desde una fuente de datos

    // Supongamos que tienes un array de objetos con información de las aves




