









var Patricio = document.getElementById("ayudadios");
//intento metodo putt
Patricio.addEventListener("submit", function(event) {
	event.preventDefault();
	//var codigoEjecutado = false;

	var formData = new FormData();
	formData.append('nombre',document.getElementById("nombre").value);
	formData.append('correo', document.getElementById("correo").value);
	formData.append('edad', document.getElementById("edad").value);
	formData.append('fecha', document.getElementById("fecha").value);
	formData.append('cedula', document.getElementById("cedula").value);
	formData.append('cursando',document.getElementById("cursando").value);
	formData.append('ave', document.getElementById("ave").value);


	var url = "http://localhost:8081/enciclopediaapi/enciclopedia";
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);
	
	//verificar la inf guardada
	
	formData.forEach(function(value, key) {
		console.log(key + ': ' + value);
	});
	
	xhr.onload = function() {
		if (xhr.status === 201) {
			alert("Biologo guardado correctamente");
		} else {
			alert("Error al guardar el Biologo" );
		}
	};

	xhr.onerror = function() {
		console.error("Error de red al intentar guardar el Biologo");
	};

	xhr.send(formData);
});



//if (!codigoEjecutado) {
// Tu código JavaScript aquí

//var correo = "&correo=" + encodeURIComponent(document.getElementById("correo").value);
//var edad = "&edad=" + encodeURIComponent(document.getElementById("edad").value);
//var fecha = "&fecha=" + encodeURIComponent(document.getElementById("fecha").value);
//var cedula = "&cedula=" + encodeURIComponent(document.getElementById("cedula").value);
//var curasando = "&cursando=" + encodeURIComponent(document.getElementById("cursando").value);
//var ave = "&ave=" + encodeURIComponent(document.getElementById("ave").value);



//var url = "http://localhost:8081/enciclopediaapi/enciclopedia";
//var xhr = new XMLHttpRequest();
//xhr.open('POST', url + "?" + nombre + correo + edad + fecha + cedula + curasando + ave, true);

//xhr.onload = function() {
//if (xhr.status === 201) {
//alert("Creado");

//console.error("Biologo guardado correctamente " + ayudadios);

//} else {
//	console.error("Error al guardar el Biologo");

//}
//};

//xhr.onerror = function() {
//console.error("Error de red al intentar guardar el Biologo");
//};

//xhr.send(null);
// Marcar la bandera de control como verdadera para indicar que el código se ha ejecutado
//codigoEjecutado = true;
//}

//});




































function pdfexport() {
	var ltitle = document.getElementById('tlt').innerText;
	var lname = document.getElementById('lbname').innerText;
	var lage = document.getElementById('lbnage').innerText;
	var ldob = document.getElementById('lbdob').innerText;
	var lover = document.getElementById('lbnover').innerText;

	var inname = document.getElementById('inname').value;
	var inage = document.getElementById('inage').value;
	var indob = document.getElementById('indob').value;
	var ininfo = document.getElementById('inover').value;

	var doc = new jsPDF();
	doc.setFontSize(22);
	doc.text(ltitle, 20, 10);
	doc.setFontSize(16);
	doc.setTextColor(0, 0, 255);
	doc.text(20, 60, 'This is blue.');
	doc.text(lname + ' ' + inname, 10, 20);
	doc.text(lage + ' ' + inage, 10, 30);
	doc.text(ldob + ' ' + indob, 10, 40);
	doc.text(lover + ' ' + ininfo, 10, 50);
	doc.save("test.pdf");
}







function creartabla() {

	var maintable = document.getElementById('maintable');
	var doc = new jsPDF('p', 'pt', 'letter');
	var margin = 20;
	var scale = (doc.internal.pageSize.width - margin * 2) / document.body.clientWidth;
	var scale_mobile = (doc.internal.pageSize.width - margin * 2) / document.body.getBoundingClientRect();


	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

		doc.html(maintable, {
			x: margin,
			y: margin,
			html2canvas: {
				scale: scale_mobile,
			},
			callback: function(doc) {
				doc.output('dataurlnewwindow', { filename: 'pdf.pdf' });

			}
		});
	} else {

		doc.html(maintable, {
			x: margin,
			y: margin,
			html2canvas: {
				scale: scale,
			},
			callback: function(doc) {
				doc.output('dataurlnewwindow', { filename: 'pdf.pdf' });
			}
		});
	}
};





 