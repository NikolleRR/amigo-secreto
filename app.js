// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombresAmigos = document.getElementById("amigo").value;
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
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}