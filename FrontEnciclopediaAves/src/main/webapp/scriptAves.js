  $(document).ready(function() {
      // Manejar el envío del formulario
      $("#bird-form").on("submit", function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        var nombreBiologo = $("#nombre-biologo").val();
        var nombreCientifico = $("#nombre-cientifico").val();
        var descripcion = $("#descripcion").val();

        // Mostrar la información en la sección de información general
        $("#nombre-biologo-info").text("Nombre del Biólogo: " + nombreBiologo);
        $("#nombre-cientifico-info").text("Nombre Científico del Ave: " + nombreCientifico);
        $("#descripcion-info").text("Descripción: " + descripcion);

        // Limpiar los campos del formulario
        $("#nombre-biologo").val("");
        $("#nombre-cientifico").val("");
        $("#descripcion").val("");
      });
    });