









var Patricio = document.getElementById("ayudadios");
//intento metodo putt
Patricio.addEventListener("submit", function(event) {
	event.preventDefault();
	

	var formData = new FormData();
	formData.append('nombre', document.getElementById("nombre").value);
	formData.append('correo', document.getElementById("correo").value);
	formData.append('edad', document.getElementById("edad").value);
	formData.append('fecha', document.getElementById("fecha").value);
	formData.append('cedula', document.getElementById("cedula").value);
	formData.append('cursando', document.getElementById("cursando").value);
	formData.append('ave', document.getElementById("ave").value);


	var urlPOST = "http://localhost:8081/enciclopediaapi/enciclopedia";
	var xhrPOST = new XMLHttpRequest();
	xhrPOST.open('POST', urlPOST, true);

	//verificar la inf guardada

	formData.forEach(function(value, key) {
		console.log(key + ': ' + value);
	});

	xhrPOST.onload = function() {
		if (xhrPOST.status === 201) {
			alert("Biologo guardado correctamente");
		} else {
			alert("Error al guardar el Biologo");
		}
	};
	xhrPOST.send(formData);


	xhrPOST.onerror = function() {
		console.error("Error de red al intentar guardar el Biologo");
	};
	var urlGET = "http://localhost:8081/enciclopediaapi/enciclopediaaves";
	var xhrGET = new XMLHttpRequest();
	xhrGET.open('GET', urlGET, true);
	xhrGET.onload = function() {
		var operaciones = JSON.parse(xhrGET.responseText);
		if (xhrGET.status == "202") {
			console.table(operaciones);

			for (var i = 0; i < operaciones.length; i++) {
				
				if (operaciones[i].biologo != document.getElementById("nombre").value) {
					if (operaciones[i].nombrecientifico == document.getElementById("ave").value) {
						var formData2 = new FormData();
						formData2.append('id', operaciones[i].id);
						formData2.append('biologo', document.getElementById("nombre").value)


						var url = "http://localhost:8081/enciclopediaapi/enciclopediaavesb/{id}";
						var xhr = new XMLHttpRequest();
						xhr.open('PUT', url, true);
						xhr.onload = function() {
							if (xhr.status === 201) {
								
							} else {
							
							}
						};
						xhr.send(formData2);

					}

				}
			}
		} else {

			console.error(operaciones);
		}
	}



	xhrGET.send(null);
});





