
var desplegarBtn = document.getElementById("desplegar");
var menu = document.getElementById("menu");
menu.style.display = "none";

desplegarBtn.addEventListener("click", function() {

	menu.style.display = menu.style.display === "none" ? "block" : "none";
});




var url = "http://localhost:8081/enciclopediaapi/enciclopedia";
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function() {
	var operaciones = JSON.parse(xhr.responseText);
	if (xhr.status == "202") {
		console.table(operaciones);


		var birdName = operaciones[operaciones.length - 1].ave;
		var birdName2 = operaciones[1].ave;
		var birdName3 = operaciones[2].ave;

		searchVideo(birdName3, 5);




		var apiKey = "AIzaSyDzcJ84fS400EUQ-R66MhajAljFrWQMf14";
		var cx = "70f5772c9adad4d32";

		var searchUrl = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + "Imagen del Pajaro " + birdName + "&searchType=image";
		var searchUrl2 = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + "Imagen del Ave " + birdName2 + "&searchType=image";
		var searchUrl3 = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + "Imagen del Ave " + birdName3 + "&searchType=image";


		$.get(searchUrl, function(data) {
			var firstImage = data.items[0].link;

			console.log(firstImage);

			console.log(birdName);
			// Mostrar la imagen en el contenedor
			var imageContainer = document.getElementById("a");


			imageContainer.innerHTML = "<img src='" + firstImage + "' width='300' height='200'>";




		});
		$.get(searchUrl2, function(data) {

			var secondImage = data.items[1].link;

			var imageContainer2 = document.getElementById("a2");

			imageContainer2.innerHTML = "<img src='" + secondImage + "' width='300' height='200'>";

		});

		$.get(searchUrl3, function(data) {

			var thirdImage = data.items[2].link;

			var imageContainer3 = document.getElementById("a3");

			imageContainer3.innerHTML = "<img src='" + thirdImage + "' width='300' height='200'>";


		});
		//informacion del ave prueba




	} else {

		console.error(operaciones);
	}
}
xhr.send(null);








// Obtener información para cada imagen









function searchVideo(q, maxResults) {
	var data = {
		maxResults: maxResults,
		key: "AIzaSyDzcJ84fS400EUQ-R66MhajAljFrWQMf14",
		part: "snippet",
		q: "Informacion del ave" + q,
		type: "video"
	}

	$.getJSON("https://www.googleapis.com/youtube/v3/search", data, function(res) {
		$("#video-list .video").remove();
		$(res.items).each(function() {
			var thumbnail = this.snippet.thumbnails.high.url;
			var title = this.snippet.title;
			var description = this.snippet.description;
			var id = this.id.videoId;
			var video = $('<div class="video row" data-video-id="' + id + '"> <div class="thumbnail col-lg-5 col-md-5 col-sm-5 col-12"> <img src="' + thumbnail + '" alt="Thumbail"> </div><div class="video-info col-lg-7 col-md-7 col-sm-7 col-12"> <h3>' + title + '</h3> <div class="description"> <p>' + description + '</p></div></div></div>');
			$("#video-list").append(video);

			// Auto play the first video
			if (id && id !== "") {
				var urlBase = "https://www.youtube.com/embed/";
				var videoId = id;
				var videoUrl = urlBase + videoId;
				$("iframe").attr("src", videoUrl);
				return false; // Exit the loop after playing the first video
			}
		});
	});
}

$("#desplegar").on("click", function() {
	$("#description").toggle();
});






$(document).on("click", ".video", function() {
	var urlBase = "https://www.youtube.com/embed/";
	var videoId = $(this).attr("data-video-id");
	var video = urlBase + videoId;
	$("iframe").attr("src", video);
});



