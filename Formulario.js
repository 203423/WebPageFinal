var getData = function () {
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var formulario = "";
    var usuario = document.form1.usuario.value;
    var email = document.form1.email.value;
    var terminos = "";
    var b = document.form1.terminos.length;
    for (a = 0; a < b; a++) {
        if (document.form1.terminos[a].checked)
            terminos += document.form1.terminos[a].value + "";
    }
    if (usuario == "") {
        alert("Los campos con asterisco son obligatorios!!!");
			return false;
    } 
    if (terminos == "No") {
        alert("No puede podremos enviar notificaciones si no acepta los terminos!!");
        return false;
    }else {
        if (email == "") {
            document.getElementById("email").focus();
        } else {
            if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email))) {
                alert("La dirección de email es incorrecta.");
                document.getElementById("email").focus();
            } else {
                console.log('Usuario: ' + usuario + ' email: ' + email)
                document.getElementById("usuario").value = "";
                document.getElementById("email").value = "";

            }
        }
    }
}