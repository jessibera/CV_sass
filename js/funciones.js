window.onload = dislexico;

function dislexico(){
    document.body.style.fontFamily = "Gill Sans";
    var boton = document.createElement("button");
    boton.setAttribute("type","button");
    boton.setAttribute("id","boton1");
    boton.setAttribute("onclick","cambiarFuente()");
    boton.innerHTML = "Con dislexia.";

    var fuente = document.getElementById("fuente");

    fuente.appendChild(boton);
}

//CAMBIAR FUENTE A FORMATO DISLEXICO
function cambiarFuente(){
    document.body.style.fontFamily = "Dyslexic-Bold";
    document.body.style.fontSize ="80%";
    document.getElementById("boton1").remove();

    var boton = document.createElement("button");
    boton.setAttribute("type","button");
    boton.setAttribute("id","boton2");
    boton.setAttribute("onclick","devolverFuente()");
    boton.innerHTML = "Sin dislexia.";
    boton.style.fontFamily = "Dyslexic-Bold";

    var fuente = document.getElementById("fuente");

    fuente.appendChild(boton);
}

//CAMBIAR FUENTE A FORMATO DISLEXICO
function devolverFuente(){
    document.body.style.fontFamily = "Gill Sans";
    document.body.style.fontSize ="100%";

    document.getElementById("boton2").remove();
    dislexico();
}