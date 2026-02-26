

  const form = document.getElementById("formulario");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      alert(`🎵 Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.`);
      form.reset();
    });
  }

  document.getElementById("boton").addEventListener("click", function(){
      window.location.href = "acceso.html";
  });


  function iniciarSesion() {
      localStorage.setItem("logueado", "1");
      window.location.href = "cursos.html";
  }
