function eliminarAve(event) {
	// Lógica para eliminar una empresa


	event.preventDefault();
	var id = document.getElementById("aveIdEliminar").value;
	var url = "http://localhost:8081/enciclopediaapi/enciclopediaaves/" + id;
	var xhr = new XMLHttpRequest();

	xhr.open("DELETE", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 302) {
				// Deletion successful
				alert("Eliminado");
			} else if (xhr.status === 404) {
				// Company not found
				alert("not found");

			} else {
				// Other error occurred
				alert("Error ");


			}
		}
	};
	xhr.send();
}





function eliminarBiologo(event) {
	event.preventDefault();
	var id = document.getElementById("biologoIdEliminar").value;
	var url = "http://localhost:8081/enciclopediaapi/enciclopedia/" + id;
	var xhr = new XMLHttpRequest();

	console.log(id);

	xhr.open("DELETE", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 302) {
				// Deletion successful
				alert("Eliminado");
			} else if (xhr.status === 404) {
				// Company not found
				alert("not found");

			} else {
				// Other error occurred
				alert("Error ");


			}
		}
	};
	xhr.send();

}

var Patricio = document.getElementById("ayudadios");
//intento metodo putt
Patricio.addEventListener("submit", function(event) {
	event.preventDefault();
	var formData = new FormData();
	formData.append('id', document.getElementById("aveIdActualizar").value);
	formData.append('biologo', document.getElementById("biologoActualizar").value);
	formData.append('nombrecientifico', document.getElementById("nombreCientificoActualizar").value);
	formData.append('familia', document.getElementById("familiaActualizar").value);
	formData.append('orden', document.getElementById("ordenActualizar").value);
	formData.append('clase', document.getElementById("claseActualizar").value);
	formData.append('filo', document.getElementById("filoActualizar").value);
	formData.append('reino', document.getElementById("reinoActualizar").value);

	var urlPut = "http://localhost:8081/enciclopediaapi/enciclopediaaves/{id}";
	var xhr3 = new XMLHttpRequest();
	xhr3.open('PUT', urlPut, true);
	xhr3.onload = function() {
		if (xhr3.status == "202") {
			alert("Actualizado con existo");

		} else {
			alert(" error");

		}
	}
	xhr3.send(formData);
});


var Patricio = document.getElementById("hijo de puta");
//intento metodo putt
Patricio.addEventListener("submit", function(event) {
	event.preventDefault();
	var formData = new FormData();

	formData.append('id', document.getElementById("id").value);
	formData.append('nombre', document.getElementById("nombreActualizar").value);
	formData.append('correo', document.getElementById("correoActualizar").value);
	formData.append('edad', document.getElementById("edadActualizar").value);
	formData.append('fecha', document.getElementById("fechaActualizar").value);
	formData.append('cedula', document.getElementById("cedulaActualizar").value);
	formData.append('cursando', document.getElementById("cursandoActualizar").value);
	formData.append('ave', document.getElementById("aveActualizar").value);

	formData.forEach(function(value, key) {
		console.log(key + ': ' + value);
	});

	var urlPut = "http://localhost:8081/enciclopediaapi/enciclopedia/{id}";
	var xhr3 = new XMLHttpRequest();
	xhr3.open('PUT', urlPut, true);
	xhr3.onload = function() {
		if (xhr3.status == "202") {


		} else {
			alert(" error");

		}
	}
	xhr3.send(formData);
});

var Patricio = document.getElementById("diossanto");
//intento metodo putt
Patricio.addEventListener("submit", function(event) {

	event.preventDefault();


	var id = document.getElementById("aveIdBuscar").value;

	var url = "http://localhost:8081/enciclopediaapi/enciclopediaaves/{id}" + "?id=" + id;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function() {
		var operaciones = JSON.parse(xhr.responseText);
		if (xhr.status == "202") {
			alert("encontrado");

			var id2 = operaciones.id;
			var biologo = operaciones.biologo;
			var nombre = operaciones.nombrecientifico
			var familia = operaciones.familia;
			var orden = operaciones.orden;
			var clase = operaciones.clase;
			var filo = operaciones.filo;
			var reino = operaciones.reino;



			var apiKey = "AIzaSyCtUCvnfQGy82h1E1OfH9GsIGQA0P41ukc";
			var cx = "70f5772c9adad4d32";
			var searchUrl = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + "imagenes en movimiento del ave  " + operaciones.nombrecientifico + "&searchType=image";

			$.get(searchUrl, function(data) {
				var firstImage = data.items[0].link;

				alert(firstImage);

				var nombreFormateado = operaciones.nombrecientifico.replace(/\s/g, '_');

				var url = 'https://es.wikipedia.org/wiki/' + nombreFormateado;
				
				var enlace = document.createElement('a');
				enlace.href = url;
				enlace.textContent = "ver mas de " + operaciones.nombrecientifico;
				 enlace.target = '_blank';

				document.getElementById("ave-id").textContent = id2;
				document.getElementById("ave-biologo").textContent = biologo;
				document.getElementById("ave-nombre").textContent = nombre;
				document.getElementById("ave-familia").textContent = familia;
				document.getElementById("ave-orden").textContent = orden;
				document.getElementById("ave-clase").textContent = clase;
				document.getElementById("ave-filo").textContent = filo;
				document.getElementById("ave-reino").textContent = reino;
				document.getElementById("ave-imagen").src = firstImage;
				document.getElementById("ave-enlace").appendChild(enlace) ;



				searchVideo(operaciones.nombrecientifico, 1);



			});
		} else {
			console.error(operaciones);
		}
	}
	xhr.send();

});




var Patricio = document.getElementById("upa");
//intento metodo putt
Patricio.addEventListener("submit", function(event) {

	event.preventDefault();


	var id = document.getElementById("biologoIdBuscar").value;

	var url = "http://localhost:8081/enciclopediaapi/enciclopedia/{id}" + "?id=" + id;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function() {
		var operaciones = JSON.parse(xhr.responseText);
		if (xhr.status == "202") {
			alert("encontrado");

			var id3 = operaciones.id;
			var biologoNombre = operaciones.nombre;
			var biologoCorreo = operaciones.correo
			var biologoEdad = operaciones.edad;
			var biologoFecha = operaciones.fecha;
			var biologoCedula = operaciones.cedula;
			var biologoCursando = operaciones.cursando;
			var biologoAve = operaciones.ave;


			document.getElementById("biologo-id").textContent = id3;
			document.getElementById("biologo-nombre").textContent = biologoNombre;
			document.getElementById("biologo-correo").textContent = biologoCorreo;
			document.getElementById("biologo-edad").textContent = biologoEdad;
			document.getElementById("biologo-fecha").textContent = biologoFecha;
			document.getElementById("biologo-cedula").textContent = biologoCedula;
			document.getElementById("biologo-cursando").textContent = biologoCursando;
			document.getElementById("biologo-ave").textContent = biologoAve;








		} else {
			console.error(operaciones);
		}
	}
	xhr.send();

});


//var informacion2 = "Información de la División 2"; // Ejemplo de información para la División 2


//document.getElementById('division2').innerHTML = informacion2; // Actualizar el contenido de la División 2












function searchVideo(q, maxResults) {
	var data = {
		maxResults: maxResults,
		key: "AIzaSyCMWDquM35Gb1YaGCxnQc-UOH9Rpshrcko",
		part: "snippet",
		q: "Informacion del ave " + q,
		type: "video"
	};

	$.getJSON("https://www.googleapis.com/youtube/v3/search", data, function(res) {
		$("#division1\\.3 .video").remove();
		if (res.items.length > 0) {
			var videoItem = res.items[0];
			var thumbnail = videoItem.snippet.thumbnails.high.url;
			var title = videoItem.snippet.title;
			var description = videoItem.snippet.description;
			var id = videoItem.id.videoId;

			// Crea el elemento del video
			var video = $('<div class="video row" data-video-id="' + id + '">');

			// Crea el elemento de la descripción del video
			var videoDescription = $('<div class="video-description"><h4>' + title + '</h4><p>' + description + '</p></div>');

			// Agrega los elementos al contenedor correspondiente
			$("#division1\\.3").append(video);
			$("#division1\\.3").append(videoDescription);

			// Auto reproduce el video
			if (id && id !== "") {
				var urlBase = "https://www.youtube.com/embed/";
				var videoId = id;
				var videoUrl = urlBase + videoId;
				var iframe = $('<iframe width="560" height="315" src="' + videoUrl + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
				$("#division1\\.3").append(iframe);
			}
		}
	});
}

$("#desplegar").on("click", function() {
	$("#description").toggle();
});



function searchVideo2(q, maxResults) {
	var data = {
		maxResults: maxResults,
		key: "AIzaSyCMWDquM35Gb1YaGCxnQc-UOH9Rpshrcko",
		part: "snippet",
		q: "Informacion del ave " + q,
		type: "video"
	};

	$.getJSON("https://www.googleapis.com/youtube/v3/search", data, function(res) {
		$("#division2\\.3 .video").remove();
		if (res.items.length > 0) {
			var videoItem = res.items[0];
			var thumbnail = videoItem.snippet.thumbnails.high.url;
			var title = videoItem.snippet.title;
			var description = videoItem.snippet.description;
			var id = videoItem.id.videoId;

			// Crea el elemento del video
			var video = $('<div class="video row" data-video-id="' + id + '">');

			// Crea el elemento de la descripción del video
			var videoDescription = $('<div class="video-description"><h4>' + title + '</h4><p>' + description + '</p></div>');

			// Agrega los elementos al contenedor correspondiente
			$("#division2\\.3").append(video);
			$("#division2\\.3").append(videoDescription);

			// Auto reproduce el video
			if (id && id !== "") {
				var urlBase = "https://www.youtube.com/embed/";
				var videoId = id;
				var videoUrl = urlBase + videoId;
				var iframe = $('<iframe width="560" height="315" src="' + videoUrl + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
				$("#division2\\.3").append(iframe);
			}
		}
	});
}

$("#desplegar").on("click", function() {
	$("#description").toggle();
});


function crearpdfave(event) {

	event.preventDefault(); // Evitar la recarga de págin

	var url = "http://localhost:8081/enciclopediaapi/enciclopediaaves";
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.onload = function() {
		var operaciones = JSON.parse(xhr.responseText);
		if (xhr.status == 202) {

			var tableRows = [];

			for (var i = 0; i < operaciones.length; i++) {
				var aux = operaciones[i];

				var row = [
					aux.id,
					aux.biologo,
					aux.nombrecientifico,
					aux.familia,
					aux.orden,
					aux.clase,
					aux.filo,
					aux.reino
				];


				tableRows.push(row);
			}

			var docDefinition = {
				content: [
					'Esto son los pajaros que se han ingresado en el momento: ',
					' ',
					' ',
					{
						table: {
							headerRows: 1,

							body: [
								['ID', 'Biologo', 'Nombre Cientifico', 'Familia', 'Orden', 'Clase', 'Filo', 'Reino'],
								...tableRows
							],
							widths: 'auto',
							alignment: 'left'
						}
					}
				],
				styles: {
					table: {

						margin: [0, 10, 0, 10] // Márgenes superior e inferior
					}
				}
			};


			pdfMake.createPdf(docDefinition).open();
			var pdfDocGenerator = pdfMake.createPdf(docDefinition);
			pdfDocGenerator.download('Tabla Aves');
		} else {
			console.error(operaciones);
		}
	};
	xhr.send(null);
}

function crearpdfaveO(event) {

	event.preventDefault(); // Evitar la recarga de págin

	var url = "http://localhost:8081/enciclopediaapi/enciclopediaaves";
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.onload = function() {
		var operaciones = JSON.parse(xhr.responseText);
		if (xhr.status == 202) {

			operaciones.sort((a, b) => a.nombrecientifico.localeCompare(b.nombrecientifico));

			var tableRows = [];

			for (var i = 0; i < operaciones.length; i++) {
				var aux = operaciones[i];

				var row = [
					aux.id,
					aux.biologo,
					aux.nombrecientifico,
					aux.familia,
					aux.orden,
					aux.clase,
					aux.filo,
					aux.reino
				];


				tableRows.push(row);
			}

			var docDefinition = {
				content: [
					'Esto son los pajaros que se han ingresado en el momento: ',
					' ',
					' ',
					{
						table: {
							headerRows: 1,
							body: [
								['ID', 'Biologo', 'Nombre Cientifico', 'Familia', 'Orden', 'Clase', 'Filo', 'Reino'],
								...tableRows
							],
							widths: 'auto',
							alignment: 'left'
						}
					}
				],
				styles: {
					table: {
						margin: [0, 10, 0, 10] // Márgenes superior e inferior
					}
				}
			};


			pdfMake.createPdf(docDefinition).open();
			var pdfDocGenerator = pdfMake.createPdf(docDefinition);
			pdfDocGenerator.downlo('Tabla de Aves Ordenado');
		} else {
			console.error(operaciones);
		}
	};
	xhr.send(null);
}



function crearpdfbiologoO(event) {

	event.preventDefault(); // Evitar la recarga de págin

	var url = "http://localhost:8081/enciclopediaapi/enciclopedia";
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.onload = function() {
		var operaciones = JSON.parse(xhr.responseText);
		if (xhr.status == 202) {

			operaciones.sort((a, b) => a.nombre.localeCompare(b.nombre));

			var tableRows = [];

			for (var i = 0; i < operaciones.length; i++) {
				var aux = operaciones[i];

				var row = [
					aux.id,
					aux.nombre,
					aux.correo,
					aux.edad,
					aux.fecha,
					aux.cedula,
					aux.cursando,
					aux.ave
				];


				tableRows.push(row);
			}

			var docDefinition = {
				content: [
					'Esto son los pajaros que se han ingresado en el momento: ',
					' ',
					' ',
					{
						table: {
							headerRows: 1,

							body: [
								['ID', 'Nombre', 'Correo', 'Edad', 'Fecha de nacimiento', 'cedula', 'Cursando', 'Ave investigada'],
								...tableRows
							],
							widths: 'auto',
							alignment: 'left'
						}
					}
				],
				styles: {
					table: {

						margin: [0, 10, 0, 10] // Márgenes superior e inferior
					}
				}
			};


			pdfMake.createPdf(docDefinition).open();
			var pdfDocGenerator = pdfMake.createPdf(docDefinition);
			pdfDocGenerator.download('Tabla de Biologos Ordenado');
		} else {
			console.error(operaciones);
		}
	};
	xhr.send(null);
}

function crearpdfbiologo(event) {

	event.preventDefault(); // Evitar la recarga de págin

	var url = "http://localhost:8081/enciclopediaapi/enciclopedia";
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.onload = function() {
		var operaciones = JSON.parse(xhr.responseText);
		if (xhr.status == 202) {

			var tableRows = [];

			for (var i = 0; i < operaciones.length; i++) {
				var aux = operaciones[i];

				var row = [
					aux.id,
					aux.nombre,
					aux.correo,
					aux.edad,
					aux.fecha,
					aux.cedula,
					aux.cursando,
					aux.ave
				];


				tableRows.push(row);
			}

			var docDefinition = {
				content: [
					'Esto son los pajaros que se han ingresado en el momento: ',
					' ',
					' ',
					{
						table: {
							headerRows: 1,

							body: [
								['ID', 'Nombre', 'Correo', 'Edad', 'Fecha de nacimiento', 'cedula', 'Cursando', 'Ave investigada'],
								...tableRows
							],
							widths: 'auto',
							alignment: 'left'
						}
					}
				],
				styles: {
					table: {

						margin: [0, 10, 0, 10] // Márgenes superior e inferior
					}
				}
			};


			pdfMake.createPdf(docDefinition).open();
			var pdfDocGenerator = pdfMake.createPdf(docDefinition);
			pdfDocGenerator.download('Tabla de Biologos');
		} else {
			console.error(operaciones);
		}
	};
	xhr.send(null);
}



