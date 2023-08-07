document.addEventListener('DOMContentLoaded', function () {
    
    function alerta() {
        alert("Hola! Soy el div")
    }

    const div = document.querySelector("div")

    div.addEventListener("click", alerta)
})