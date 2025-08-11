// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombresAmigos = document.getElementById("amigo");
    if(nombresAmigos === ""){
        alert("Por favor, inserte un nombre.");
    }else {
        amigos.push(nombresAmigos);
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}