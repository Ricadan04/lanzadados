$("document").ready(function () {
  var face0 = new Image();
  face0.src = "/img/dado1.png";

  var face1 = new Image();
  face1.src = "/img/dado2.png";

  var face2 = new Image();
  face2.src = "/img/dado3.png";

  var face3 = new Image();
  face3.src = "/img/dado4.png";

  var face4 = new Image();
  face4.src = "/img/dado5.png";

  var face5 = new Image();
  face5.src = "/img/dado6.png";

  $("#agrega").click(function () {
    var newPlayer =
      "<div class='container jugador'>" +
      "<div class='row text-center justify-content-center'>" +
      "<div class='card bg-light'>" +
      "<div class='card-header'>" +
      "<div class='input-group'>" +
      "<input type='text' class='form-control' placeholder='Nombre de jugador'/>" +
      "<button class='btn btn-danger' type='button'>" +
      "<i class='fas fa-trash-alt'></i>" +
      "</button>" +
      "</div>" +
      "</div>" +
      "<div class='card-body'>" +
      "<img src='/img/blank.png' name='mydice'> <br>"+
      "<button class='btn btn-warning'><i class='fas fa-play'></i>Lanzar</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    $(newPlayer).appendTo(".tablero");
  });

  $("body").on("click", ".btn-danger", eliminarJugador);

  function eliminarJugador() {
    $(this).parent().parent().parent().parent().parent().remove();
  }

  $("body").on("click", ".btn-warning", lanzar);

  function lanzar() {
    var randomdice = Math.round(Math.random() * 5);
    
    while($(this).parent().children().attr('src')==eval("face" + randomdice + ".src")){
      randomdice = Math.round(Math.random() * 5);
    }
    $(this).parent().children().attr('src', eval("face" + randomdice + ".src"));
  }

});
