$(document).ready(function() {
    
    // Selecciona todos los encabezados y párrafos, aplica lettering y establece evento de click para clonar
    $("h1, h2, h3, p").each(function() {
        $(this).lettering().on("click", function() {
            const nuevoElemento = $(this).clone();
            $(this).before(nuevoElemento).remove();
        });
    });

    // Aplicar animación aleatoria de blur
    const text = $("#jquerybuddy"),
          numLetters = text.find("span").length;

    function randomBlurize() {
        text.find("span:nth-child(" + (Math.floor(Math.random() * numLetters) + 1) + ")")
            .animate({
                textShadowBlur: Math.floor(Math.random() * 25) + 4,
                textShadowColor: `rgba(0,100,0,${(Math.floor(Math.random() * 200) + 55) / 255})`
            });
        setTimeout(randomBlurize, 100);
    }

    randomBlurize();
});
