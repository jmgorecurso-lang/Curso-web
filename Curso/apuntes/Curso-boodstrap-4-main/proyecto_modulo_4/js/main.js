$(function(){
 const modal = document.getElementById('miModal');
 const boton = $('#btnModal');

 modal.addEventListener('show.bs.modal', function () {
   console.log('Comienza a abrirse');
   boton.prop('disabled', true);
   boton.removeClass('btn-primary').addClass('btn-danger');
 });

 modal.addEventListener('shown.bs.modal', function () {
   console.log('Se terminó de abrir');
 });

 modal.addEventListener('hide.bs.modal', function () {
   console.log('Comienza a ocultarse');
 });

 modal.addEventListener('hidden.bs.modal', function () {
   console.log('Se terminó de ocultar');
   boton.prop('disabled', false);
   boton.removeClass('btn-danger').addClass('btn-primary');
 });
});