window.onload=inicio;

function inicio(){
    document.querySelector("#botonMenu").onclick=abrirMenu;
    document.querySelector("#cerrarMenuDespl").onclick=cerrarMenu;
}

function abrirMenu(){
    document.getElementById("botonMenu").style.visibility="hidden";
    document.getElementById("menuDespl").style.display="grid";

}

function cerrarMenu(){
    document.getElementById("botonMenu").style.visibility="visible";
    document.getElementById("menuDespl").style.display="none";
}