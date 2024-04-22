function mostrarAlerta() {
  alert("Enviado com Sucesso!");
}

// document.addEventListener("DOMContentLoaded", function() {
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(function(dropdownToggle) {
    dropdownToggle.addEventListener("click", function(e) {
      e.preventDefault();
      var dropdownMenu = this.nextElementSibling;
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
      } else {
        dropdownMenu.classList.add("show");
      }
    });
  });
//});
