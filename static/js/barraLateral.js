document.addEventListener("DOMContentLoaded", () => {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId);

      if (toggle && nav && bodypd && headerpd) {
          toggle.addEventListener("click", () => {
              // Alterna la visibilidad de la barra lateral
              nav.classList.toggle("show");

              // Cambia el icono de toggle
              toggle.classList.toggle("bx-x");

              // Alterna el padding en el cuerpo y el encabezado
              bodypd.classList.toggle("body-pd");
              headerpd.classList.toggle("body-pd");

              // Controla el desbordamiento del contenedor de navegación
              const elementoNav = document.getElementById('nav-contenedor');
              elementoNav.style.overflow = nav.classList.contains("show") ? 'visible' : 'hidden';
          });
      }
  };

  // Inicializa la barra lateral
  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  linkColor.forEach((link) => {
      link.addEventListener("click", function () {
          linkColor.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
      });
  });
});
