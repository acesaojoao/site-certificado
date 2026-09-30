(function () {
  "use strict";

  // Menu de navegação (mobile)
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("menu-principal");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Ano atual no rodapé
  var anoEl = document.getElementById("ano-atual");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  // Sombra no cabeçalho ao rolar a página
  var header = document.querySelector(".site-header");
  if (header) {
    var updateHeaderShadow = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", updateHeaderShadow, { passive: true });
    updateHeaderShadow();
  }
})();
