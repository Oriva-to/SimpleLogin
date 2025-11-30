let principal = document.getElementById("primero");
let secundario = document.getElementById("segundo");

principal.style.display = "block";

if(principal.style.display === "block"){
    secundario.style.display = "none";
}
if(secundario.style.display === "none"){
    principal.style.display = "block";
}

function Siguiente(){
    principal.style.display = "none";
    secundario.style.display = "block";
}
function Principal(){
    secundario.style.display = "none";
    principal.style.display = "block";
}