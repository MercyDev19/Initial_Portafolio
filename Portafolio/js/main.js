(function ($) {
  "use strict";

  // Smooth scrolling on the navbar links (solo para enlaces internos)
  $(".navbar-nav a").on("click", function (event) {
    // Verifica si el enlace tiene un hash interno
    if (this.hash && this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Forzar enlaces externos a abrirse en una nueva pestaña
  $('a[target="_blank"]').on("click", function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado
    window.open($(this).attr("href"), "_blank"); // Abre en nueva pestaña
  });

  // (El resto del código permanece igual...)
})(jQuery);
