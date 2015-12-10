
$(document).ready(function(){
	
	$(document).on('click', '#checkOn', function(){
		
		var contenu = $('input[name=rechercher]').val();

		
			$('#todoshermanos').append('<li class="description hello"><input type="checkbox" class="check"/>' + contenu + '</li>');



	});

	$(document).on('keypress', function(event){

		var contenu = $('input[name=rechercher]').val();

		if (event.which === 13) {

			

		
			$('#todoshermanos').append('<li class="description hello"><input type="checkbox" class="check"/>' + contenu + '</i>');


		}

		if (contenu == false) {

			alert("Il faut ecrire quelque chose.");

		}

	});

	$(document).on('click', '[type=checkbox]', function(){
		
		$(this).parent('li').toggleClass("java");

	});


});



