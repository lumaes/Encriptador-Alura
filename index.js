
function mostrar(){      
    document.getElementById("copiar").style.visibility = 'visible';

}
function encriptar (){
    ocultar();
    mostrar();
    var texto = document.querySelector("#texto-encriptar").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".resultado").value = textoCifrado;
    document.querySelector("#texto-encriptar").value;
}
var boton1 = document.querySelector("#boton-a");
 boton1.onclick = encriptar;

function desencriptar (){ 
    ocultar();
    mostrar();
    var texto = document.querySelector("#texto-encriptar").value;
     var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
      document.querySelector(".resultado").value = textoCifrado;
       document.querySelector("#texto-encriptar").value;

}

var munieco = document.querySelector(".muñeco");
function ocultar(){
   munieco.classList.add("ocultar");
}

var boton2 = document.querySelector("#boton-b");
 boton2.onclick = desencriptar;

 var botonCopiar = document.querySelector("#boton-copiar");

 botonCopiar.addEventListener("click",function(){        
     var Copiado = document.querySelector("#resultado").value;
     navigator.clipboard.writeText(Copiado);
     document.querySelector("#texto-encriptar").value="";
 
 });
