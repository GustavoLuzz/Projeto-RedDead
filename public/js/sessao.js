// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var usuario = sessionStorage.USUARIO;
    const personagem = sessionStorage.PERSONAGEM_FAV

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && usuario != null) {
        b_usuario.innerHTML = usuario;
        personagem_fav.innerHTML = personagem
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}



