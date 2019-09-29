$('.owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    autoplay: true,
    margin:0,
    center: true,
})

function menuopen(){
    $('.menu').toggleClass("menu-close");
    $('.close-button').toggleClass("hide");
    $('.menu-button').toggleClass("hide");
    $('.menu-items').toggleClass("hide");
}