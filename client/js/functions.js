Meteor.subscribe('clientes')

$(document).ready(function(){
	$('.mostrarInformacion').click(function(e){
		e.preventDefault()
		$(this).children('.oculto').toggle()
	})
})
