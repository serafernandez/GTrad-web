Meteor.publish('clientes', function(){     
	return Clientes.find() 
})