
$(document).ready(function(){
	
	$(document).on('click', '#checkOn', function(){
		
		var contenu = $('input[name=rechercher]').val();

		
		$('#todoshermanos').append('<li class="description hello"><input type="checkbox" class="check"/>' + contenu + '<button type="button" name="delete" >s</button></li>');

		compte();

	});

	$(document).on('keypress', function(event){

		var contenu = $('input[name=rechercher]').val();

		if (event.which === 13) {

			


			$('#todoshermanos').append('<li class="description hello"><input type="checkbox" class="check"/>'+ contenu + '<button type="button" name="delete" >s</button></i>');
			
			compte();

		}

		
	});

	$(document).on('click', '[type=checkbox]', function(){
		
		$(this).parent('li').toggleClass("java");

		compte();

	});

	$('ul').on('click', '[name=delete]', function () {

		$(this).parent().remove();

		compte();

	});

	$('ul').on('click', '[name="all"]', function(){

		
		$('li').show();
		
		
	});


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



