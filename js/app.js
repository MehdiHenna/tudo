
/*
	Commente régulèrement ton code.
*/
$(document).ready(function(){
	

	// ajout d'une task après le click sur checkOn
	$(document).on('click', '#checkOn', function(){
		
		var contenu = $('input[name=rechercher]').val();

		// Décompose en sous-élée
		var nouveauElmt = '<li class="description hello">'
		+ '<input type="checkbox" class="check"/>' + contenu 
		+ '<button type="button" name="delete" >s</button></li>';

		$('#todoshermanos').append(nouveauElmt);
		compte();
	});

	$(document).on('keypress', function(event){

		var contenu = $('input[name=rechercher]').val();

		if (event.which === 13) { // 13 Késako ? Ajoute un commentaire pour expliquer.
			var nouveauElmt = '<li class="description hello">'
			+ '<input type="checkbox" class="check"/>'+ contenu 
			+ '<button type="button" name="delete" >s</button></i>';

			$('#todoshermanos').append(nouveauElmt);
			
			compte();
		}
	});

	// Pourquoi cette syntaxe ? Ce n'est pas faux, mais comme tu en utilises 2, je
	// me pose la question du pourquoi.
	// $('[type=checkbox]').on('click', function(){...}); 
	$(document).on('click', '[type=checkbox]', function(){
		$(this).parent('li').toggleClass("java");
		compte();
	});

	// Quand je clique sur le bouton delete d'une task, récupérer le parent (la task entière) et la supprimer
	// Puis mettre à jour le compteur
	$('ul').on('click', '[name=delete]', function () {
		$(this).parent().remove();
		compte();
	});

	$('ul').on('click', '[name="all"]', function(){
		$('li').show();
	});

	// Quand click sur le bouton active, montrer la classe description, cacher la classe java
	$('ul').on('click', '[name="active"]', function(){
		$('.description').show();
		$('.java').hide();
	});

	$('ul').on('click', '[name="completed"]', function(){
		$('.description').hide();
		$('.java').show();
	});


	 function compte () {
		var number = $('.description:not(.java)').length - 1;
		$('#item').html("<button type='button' href='#'>" + number + " " + "items</button>");
	};	

	compte();
});



