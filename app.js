$('.slider-home').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
   
});
$('.product-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    items:3,
    responsive:{
        0:{
            items:1
        },
        690:{
            items:2
        },
        1000:{
            items:3
        },
    },
   
});

$(".review-slider").owlCarousel({
    loop:true,
    margin:10,
    dots:false,   
    items:1,
    autoplay:true,
});