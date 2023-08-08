document.addEventListener('DOMContentLoaded', function () {


    const div = document.querySelector("div") // Guardo el div en una variable para utilizarlo mas adelante

    const btn = document.querySelector("button") // Guardo el button en una variable para utilizarlo mas adelante

    function alertDiv() {
        alert("Hola! Soy el div") 
    } // Alert del div

    function alertBtn() {
        alert("Hola!")
    } // Alert del button

    btn.addEventListener("click", alertBtn) // Ejecuta la funcion alertBtn al clickear el button
    btn.addEventListener("click", removeDivAlert)  // Ejecuta la funcion removeDivAlert al clickear el button


    function removeDivAlert() {
        div.removeEventListener("click", alertDiv)
    }  /* Elimina el escuchador de evento del div que ejecuta la alertDiv cuando se lo clickea  para que no se ejecute junto con la alertBtn del button */



    div.addEventListener("click", agregarDivAlert) // Ejecuta la funcion agregarDivAlert al clickear sobre el div
    div.addEventListener("click", alertDiv) // Ejecuta la funcion alertDiv al clickear el div

    function agregarDivAlert() {
        div.addEventListener("click", alertDiv)
    } // Vuelve a agregar el escuchador de evento que ejecuta la alertDiv que habia sido eliminada anteriormente











})