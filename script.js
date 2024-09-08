function validarFormulario() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (name === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }
    
    if (email === "") {
        alert("Por favor, ingresa tu correo.");
        return false;
    }
    
    if (message === "") {
        alert("Por favor, ingresa un mensaje.");
        return false;
    }
    
    return true;
}
