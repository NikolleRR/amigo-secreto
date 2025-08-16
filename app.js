// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos el array
let amigos = [];

//Creamos la funcion del boton
function agregarAmigo(){
    let nombresAmigos = document.getElementById("amigo").value;
    //Validamos el ingreso de texto al index
    if(nombresAmigos === ""){
        alert("Por favor, inserte un nombre.");
    }else {
        amigos.push(nombresAmigos);
        limpiarCaja();
        crearListaAmigos();
    }
}

function crearListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    //Se crea la lista que se va a mostrar en pantalla de los nombres de los participantes
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    //Validamos que si hayan amigos
    if(amigos.length === 0){
        alert("Por favor, ingrese el nombre de sus amigos");
        return;
    }
    //Generar amigo secreto
    let amigoSecreto = Math.floor(Math.random()*amigos.length);
    //Obtener el nombre del amigo secreto
    let nombreAmigoSecreto = amigos[amigoSecreto];
    //Mostramos en pantalla el resultado
    let respuesta = document.getElementById("resultado");
    respuesta.innerHTML = `Tu amigo secreto es ${nombreAmigoSecreto}`;
    //Mostrar el boton de reiniciar 
    document.getElementById("btnReiniciar").style.display = "flex";
}

function reiniciarSorteo(){
    //Limpiamos array
    amigos = [];
    //Limpiamos la lista
    document.getElementById("listaAmigos").innerHTML = "";
    //Se limpia el resultado
    document.getElementById("resultado").innerHTML = "";
    limpiarCaja();

    //Ocultar el boton de reiniciar
    document.getElementById("btnReiniciar").style.display = "none";
}

function limpiarCaja(){
    //Limpiamos el espacio del index
    document.getElementById('amigo').value = '';
}