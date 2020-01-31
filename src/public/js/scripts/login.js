function validarLogin() {

    const usuario = document.getElementById("txtUsuario").value;
    const password = document.getElementById("txtPassword").value;

    if (usuario === "usu" && password === "123") {
        console.log(`Valores correctos`);
    } else {
        console.log(`Valores incorrectos`);
    }

}