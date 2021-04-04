function esVisible(elem){
    /* Ventana de Visualización*/
    var posTopView = $(window).scrollTop();
    var posButView = posTopView + $(window).height();
    /* Elemento a validar*/
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).outerHeight();
    /* Comparamos los dos valores tanto del elemento como de la ventana*/
    return ((elemBottom < posButView && elemBottom > posTopView) || (elemTop >posTopView && elemTop< posButView));
}

$(document).ready(()=>{
    if(window.location.pathname=="/"){
        
        $(document).on("scroll",() =>{
            if ($(document).scrollTop()>30) {
                $("nav.navbar").css("background-color", "#1f1f1fe0");
            }
            if ($(document).scrollTop()<30) {
                $("nav.navbar").css("background-color", "transparent");
            }
            // console.log($(document).scrollTop()<5)
            if ($(document).scrollTop()<5 && $(".cards .row ").css("top")!="-160px") {
                
                $(".cards .row ").css("animation", "subir_cards 0.5s linear forwards");
            }
            if ($(document).scrollTop()>=5) {
                $(".cards .row ").css("top", "-10em");
            }
            
            if (esVisible($(".works .row .view_project"))) {
                $(".work .column img").css("animation", "mostrar_my_work_row 0.5s linear forwards");
                $(".work h1.intro").css("animation", "mostrar_my_work 0.5s linear forwards");
            }
            // if ($(document).scrollTop()>=$(".cards h1").offset().top) {
            //     $(".work .intro_cubierta").css("animation", "intro_quitar 1.5s linear forwards");
            // }

        })
        // if ($(document).scrollTop()>=$(".cards h1").offset().top) {
        //     $(".work .intro_cubierta").css("animation", "intro_quitar 1.5s linear forwards");
        // }
        if (esVisible($(".work h1.intro"))) {
            $(".work .column img").css("animation", "mostrar_my_work_row 0.5s linear forwards");
            $(".work h1.intro").css("animation", "mostrar_my_work 0.5s linear forwards");
        }
        
        $('.work .intro_cubierta').on('animationend webkitAnimationEnd', function() { 
            $(".work .row").css("visibility", "inherit");
            $(".work h1.intro").css("visibility", "inherit");
            $(".work h1.intro").css("animation", "mostrar_my_work 0.2s linear forwards");
        });
        
        if ($(document).scrollTop()>5) {
            $(".cards .row ").css("top", "-10em");
        }
        if ($(document).scrollTop()>30) {
            $("nav.navbar").css("background-color", "#1f1f1fe0");
        }
        
        
    }else{
        $("nav.navbar").css("background-color", "#1f1f1fe0");
    }
});