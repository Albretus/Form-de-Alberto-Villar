
function anadir(){
                     
    
	
	var marquita=document.getElementById("marca").value;

	var typ=document.getElementById("tipo").value;


var estadito=document.getElementById("estado").value;

var estas = estado.options[estadito-1].text;

	var parrafo = document.createElement("p");  

parrafo.innerHTML= "La marca elegida es: "+ marquita+" es un/una " +typ+ " y lo quieres "+estas;

	document.getElementsByTagName("p")[0].appendChild(parrafo); 
	parrafo.setAttribute("id", "quitar");
}

function borrar(){
var linea = document.getElementById("quitar");
var borrado = linea.parentNode;
borrado.removeChild(linea);
}