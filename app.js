let cantidadAmigos = [];

//Funcion para agregar amigo al input y guardarlo en el arrays
function agregarAmigo(){
    let nombresDeAmigos = document.getElementById("amigo").value;
    if(nombresDeAmigos == ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        cantidadAmigos.push(nombresDeAmigos);
        ActualizarLista();
    }
    limpiarInput();
    document.getElementById("listaAmigos").value
}

//Funcion de limpiar el input cada vez que se agrega un nombre
function limpiarInput(){
    document.getElementById("amigo").value = "";
}

//Funcion para actualizar la lista y mostrarla de forma visible en el navegador
function ActualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let elementos = "";
    for(let i = 0; i < cantidadAmigos.length; i++){
        elementos += "<li>" + cantidadAmigos[i] + "</li>";
    }
    lista.innerHTML = elementos;
}

//Funcion para sortear la lista de amigos y mostrarlo en el navegador
function sortearAmigo(){
        if(cantidadAmigos.length === 0){
            alert("Debes agregar amigos para sortear");
        }
        else{
            let indiceSorteo = Math.floor(Math.random()*cantidadAmigos.length);
            let amigoSorteado = cantidadAmigos[indiceSorteo];
            lista = document.getElementById("listaAmigos");
            lista.innerHTML = "<li>el amigo sorteado es: " + amigoSorteado + "</li>";
        }
        
}

