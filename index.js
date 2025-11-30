let crearCuenta = document.getElementById("crear_cuenta");
let iniciarSesion = document.getElementById("iniciar_sesion");
let otraPagina = document.getElementById("otra");
let formulario = document.getElementsByClassName("formulario")[0];
/* Datos de iniciar sesion*/
let usuarioIniciarSesion = document.getElementById("usuario_iniciar_sesion");
let contrasenaIniciarSesion = document.getElementById("contrasena_iniciar_sesion");

/* Datos de creacion de la cuenta */
let usuarioCrearCuenta = document.getElementById("usuario_crear_cuenta");
let emailCrearCuenta = document.getElementById("email_crear_cuenta");
let contrasenaCrearCuenta = document.getElementById("contrasena_crear_cuenta");

iniciarSesion.style.display = "block";
crearCuenta.style.display = "none";
otraPagina.style.display = "none";

//#region Funciones para cambiar de pagina
function paginaCrearCuenta(){
    crearCuenta.style.display = "block";
    iniciarSesion.style.display = "none";
}
function PaginaIniciarSesion(){
    crearCuenta.style.display = "none";
    iniciarSesion.style.display = "block";
}
//#endregion
let cuenta = {NombreUsuario: null, Email: null, Contrasena: null};

function IniciarSesion(){
    if(usuarioIniciarSesion.value === cuenta.NombreUsuario && contrasenaIniciarSesion.value === cuenta.Contrasena){
        alert("Inicio de sesion exitoso");
        iniciarSesion.style.display = "none";
        otraPagina.style.display = "block";
        formulario.style.display = "none";
    }
    if(usuarioIniciarSesion.value.trim() === "" && contrasenaIniciarSesion.value.trim() === ""){
        alert("Los datos estan vacios, huevon :p");
        return;
    }
    if(usuarioIniciarSesion.value.trim() === "" || contrasenaIniciarSesion.value.trim() === ""){
        alert("hay datos vacios, huevon :p");
        return;
    }
    else{
        calert("Usuario o contrasena incorrectos");
    }
}
function CrearCuenta(){
    let v1 = false;
    let v2 = false;
    let v3 = false;
    if (usuarioCrearCuenta.value.trim() !== "") {
        cuenta.NombreUsuario = usuarioCrearCuenta.value;
        v1 = true;
    }
    if (contrasenaCrearCuenta.value.trim() !== "") {
        cuenta.Contrasena = contrasenaCrearCuenta.value;
        v2 = true;
    }
    if (emailCrearCuenta.value.trim() !== "") {
        cuenta.Email = emailCrearCuenta.value;
        v3 = true;
    }
    if(!(v1 && v2 && v3)){
        alert("Por favor complete todos los campos");
        return;
    }
    else{
        alert("Cuenta creada exitosamente");
    }

    crearCuenta.style.display = "none";
    iniciarSesion.style.display = "block";
}
