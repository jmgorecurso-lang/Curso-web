function funciona() { // si activamos checkbox permite poner cantidad y activa boton enviar
  const checkbox = document.getElementById('otro');
  const cantidad = document.getElementById('dinero');
  cantidad.hidden=true;
  const libre = document.getElementById('enviar');
  libre.disabled = !checkbox.checked;
  // checkbox.checked = activado.hidden=false;
}
function envia() {
  const libre = document.getElementById('enviar');
  libre.disabled = !libre.disabled;
}
// Al hacer envio, muestra mensaje y sube al inicio de la pagina, y borra formulario
function enviarFormulario(evento) {
  evento.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  alert('Todo Correcto, enviado 😊')
  document.getElementById('miForm').reset();

}