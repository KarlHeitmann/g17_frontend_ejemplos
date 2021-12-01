$(function () {
  // alert("funcionaaaaa :D")
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  $('#button-registro').click(function () {
    alert("Solicitud de registro enviada")
    $('#button-registro').toggle();
  });
  $('#ejemplo-si-se-puede-dar-click').click(function () {
    alert("El h1 ha sido clickeado")
  });
})

