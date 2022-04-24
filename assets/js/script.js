contact-page
//contact form
function showFormConfirmation() {
    document.getElementById("form-confirmation").style.visibility = "visible";
    event.preventDefault();
}

 main

 // Popover

 var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})