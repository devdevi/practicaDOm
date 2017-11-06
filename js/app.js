alert();
function add(){
	
	var comments = document.getElementById('comment').value;
	/*creo una variable , rescato el comentario y lo agrego a valor*/
	
	/*validar espacio vacio*/
	if (comments.length == 0){
		alert('Comentario Vacio \n ingresa un comentario Valido.')
	}else{
		
	/*limpio placeHOlder*/
	document.getElementById('comment').value="";

	/*crear un nuevo elemento*/
	var newComments = document.createElement('div');
	var cont=document.getElementById('cont');
	/*creando input de punto checkbox*/
	var check = document.createElement('input');
	check.type ='checkbox';

		/*creando parrafo*/
	var paragraph=document.createElement('p');
	/*agregando classe*/
	paragraph.classList.add('color');
	 var nodoText=document.createTextNode(comments);
	 /*AÑADIR NODO DE TEXTO AL ELEMENTO*/
	 paragraph.appendChild(nodoText);


/*ESTOS ELEMENTOS VAN A EL DIV newComments */

	/*creando icono de corazon */
	var heart=document.createElement('i');
	/* crar clase al corazon*/
	heart.classList.add('fa','fa-heart','heart');

	var trash=document.createElement('i');
	/* diciendo que trash es una clase*/
	trash.classList.add('fa','fa-trash','trash');

	/*agregamos los hijos al padre o caja de comentarios*/

	newComments.appendChild(check);
	newComments.appendChild(paragraph);
	newComments.appendChild(heart);
	newComments.appendChild(trash);

	/*pasar todo al lo creado a el div cont*/

	cont.appendChild(newComments);

	/*vamos a hacer un esuchador CON ADD EVENT LISTENER*//*un EVENTO*/
	check.addEventListener('click',function(){
		paragraph.classList.toggle('strike-out')

	})
	/*eliminar un comentario*/
	/*llama a cont luego le elimina todo el comentario alojado en newComments*/
	/*le pido que al dar click a trash se ejecute la funcion*/
	trash.addEventListener('click',function(){
		cont.removeChild(newComments);
	})
	/*cambio  color al corazon*/
	heart.addEventListener('click',function(){
		heart.classList.toggle('red');
	})


	/*validar espacio vacio*/

	 /*check*/
	 check.addEventListener('click',function(){
	 	if (check.checked){
	 		return true;
	        
	} else{

	 	return false;
	 }
	})
	}
}