$(document).ready(function(){
    $(".owl-carousel-1").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navClass:['slider-button slider-button-top','slider-button'],
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dotsClass:'buttons-circle',
        dotClass:'button-circle'
    });
    $(".owl-carousel-2").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dotsClass:'buttons-circle',
        dotClass:'button-circle'
    });
});