$(document).ready(function(){

    function limpiarErrores() {
        $("#email-help").html("");
        $("#password-help").html("");
        $("#lbl-email").removeClass("text-danger")
        $("#lbl-password").removeClass("text-danger")
        
    }

    $("#btn-limpiar").click(function(){
        limpiarErrores();
        $("#txt-email").val("");
        $("#txt-password").val("");
        $("#alert-send").addClass("d-none")
    })

    $("#formulario").submit(function(e){
        e.preventDefault();
        limpiarErrores();
        var email = $("#txt-email").val();
        var password = $("#txt-password").val();
        
        var valido = true;
        if(email == ""){
            valido = false;
            $("#email-help").html("Ingresar el correo electronico");
            $("#lbl-email").addClass("text-danger")
        }

        if(password == ""){
            valido = false;
            $("#password-help").html("Ingresar la contraseña");
            $("#lbl-password").addClass("text-danger")
        }

        if(valido){
            $("#alert-send").removeClass("d-none");
        }
    })

    $("#btn-ampliar").click(function(){
        $("#logo").css("width", "500px").css("border", "0px")
    })
    $("#btn-reducir").click(function(){
        //$("#logo").css("width", "200px").css("border", "1px solid #000")
        $("#logo").css({
            "width": "200px",
            "border": "2px solid red"
        })
    })
});

























































// Referencias de elementos HTML
// var txtEmail = document.getElementById("txt-email");
// var txtPassword = document.querySelector("#txt-password");
// var formulario = document.querySelector("#formulario");
// var divPasswordHelp = document.getElementById("password-help")
// var divEmailHelp = document.getElementById("email-help")
// var labelPassword = document.getElementById("lbl-password")
// var labelEmail = document.getElementById("lbl-email")
// var btnLimpiar = document.getElementById("btn-limpiar")
// var alertSend = document.getElementById("alert-send")


// function limpiarErrores() {
//     divEmailHelp.innerHTML = ""
//     divPasswordHelp.innerHTML = ""

//     labelEmail.classList.remove("text-danger")
//     labelPassword.classList.remove("text-danger")
// }

// formulario.addEventListener("submit", function(evento) {
//     evento.preventDefault()
//     limpiarErrores()
//     var valido = true
//     if(txtEmail.value == '') {
//         divEmailHelp.innerHTML = "Ingresar el correo electrónico"
//         labelEmail.classList.add("text-danger")
//         valido = false
//     }

//     if(txtPassword.value == '') {
//         divPasswordHelp.innerHTML = "Ingresar la contraseña"
//         labelPassword.classList.add("text-danger")
//         valido = false
//     }

//     if(valido) {
//         alertSend.classList.remove("d-none")
//     }
// })

// btnLimpiar.addEventListener("click", function() {
//     limpiarErrores()
//     txtEmail.value = ""
//     txtPassword.value = ""
//     alertSend.classList.add("d-none")
// })

// formulario.addEventListener("submit", function(evento) {
//     evento.preventDefault()
//     if(txtEmail.value == '') {
//         divEmailHelp.innerHTML = "Ingresar el correo electrónico"
//     } else {
//         divEmailHelp.innerHTML = ""
//     }

//     if(txtPassword.value == '') {
//         divPasswordHelp.innerHTML = "Ingresar la contraseña"
//     } else {
//         divPasswordHelp.innerHTML = ""
//     }
// })


// Opción 2 EventListener
// function procesaFormulario(evento) {
//     evento.preventDefault()
//     alert(txtEmail.value)
//     alert(txtPassword.value)
// }
// formulario.addEventListener("submit", procesaFormulario)