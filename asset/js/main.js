$(function(){


$('.header .gnb-item:last-child').hover(function(){
    $(this).find('.sub-list').addClass('active');
    $('.header').addClass('menu-active');
    
},function(){
    $('.sub-list').removeClass('active');
    $('.header').removeClass('menu-active');
    
});

$('.gnb-item').hover(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('.header .gnb-item').hover(function(){
    $('.header').addClass('active');

},function(){
    $('.header').removeClass('active')
});



//**
//** visual


var slide1 = new Swiper(".main-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 
 
    autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
 
    pagination: {
       el: ".swiper-pagination",
     },

});


$('.main-slide .autoplay').click(function(){

    if($(this).text() == '자동재생 적용'){
        slide1.autoplay.start();
        $(this).text('자동재생 정지')
        $(this).removeClass('active');
    } else {
        slide1.autoplay.stop()
        $(this).text('자동재생 적용');
        $(this).addClass('active');
    }
});



gsap.to('.sc-visual .video-box',{
    scrollTrigger:{
        trigger:"sc-visual .video-box",
        start:"top top",
        end:"bottom top",
        markers:true,
        scrub:4,
    },
    scale:-0.5
})





});