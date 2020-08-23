 // fixed/sticky menu

 $(window).scroll(function () {
   var scrollamount = $(window).scrollTop()

   if (scrollamount > 0) {
     $(".menu").addClass("fixed")
   } else {
     $(".menu").removeClass("fixed")
   }





   if (scrollamount > 500) {
     $(".btop").fadeIn();
   } else {
     $(".btop").fadeOut();
   }
 })


 $(".btop").click(function () {
   $("html,body").animate({
     scrollTop: 0
   }, 3000)
 })



 // type.js


 var typed = new Typed(".type", {
   strings: [
     "I'm a Web Designer !",
     "I'm a Web Developer !",
     "I'm a Freelancer !",
     "I'm a Wordpress Expert !",
     // "Hello, every one.....",
     // "This is Mr. Imam Hossain....",
     // "I'm a Web designer !",
     // "Thank you so much for visiting my website..... ",
     // "And you can contact with me for any kind of consultation. ",
     // "in web design and Web design related topics .....!",
     // "You can knock me at any time ... !",
     // "I'm dedicated and open minded for all",
     // "And available 24/7 in online !",
     // "Best of luck... !",
     // "Thanks again... !",
   ],
   typeSpeed: 50,
   backSpeed: 10,
   loop: true,
 });

 //  ripple

 $(".banner,.about ").ripples({
   resolution: 200,
   perturbance: 0.04,
 });
 $(".ov").ripples({
   resolution: 200,
   perturbance: 0.04,
 });
 $(".or").ripples({
   resolution: 200,
   perturbance: 0.04,
 });
 $(".od").ripples({
   resolution: 200,
   perturbance: 0.04,
 });
 // $(".pro ").ripples({
 //   resolution: 200,
 //   perturbance: 0.04,
 // });


 // ripple

 // $(".banner").ripples({
 //   dropRadius: 12,
 //   perturbance: 0.04,
 // });

 // swiper.js 


 var swiper = new Swiper('.swiper-container', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   // autoplay: {
   //   delay: 3000,
   //   disableOnInteraction: false,
   // },
   pagination: {
     el: '.swiper-pagination',
   },
 });


 //  //////////////////slick slider//////////////////// 

 // testimonial part///


 $('.demo').slick({
   dots: false,
   infinite: true,
   speed: 1300,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 2000,
   // fade:true,

   prevArrow: '<i class="fa fa-long-arrow-left prev " aria-hidden="true"></i>',
   nextArrow: '<i class="fa fa-long-arrow-right next" aria-hidden="true"></i>',
   responsive: [

     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 1199,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 576,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
 });

 // project-part

 $('.fahim').slick({
   dots: false,
   arrows: false,
   infinite: true,
   speed: 1000,
   autoplay: true,
   autoplaySpeed: 2000,
   slidesToShow: 4,
   slidesToScroll: 1,
   responsive: [{
       breakpoint: 1200,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,

       }
     },
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,

       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 576,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
 });


 /*======== Isotope Portfolio Setup ========*/
 (function ($) {


   // init Isotope
   var $grid = $('.guru').isotope({
     // options
   });
   // filter items on button click
   $('.portfolio-filter').on('click', 'li', function () {
     var filterValue = $(this).attr('data-filter');
     $grid.isotope({
       filter: filterValue
     });
   });
   // filter items on button click
   $('.portfolio-filter').on('click', 'li', function () {
     $(this).addClass('active').siblings().removeClass('active');
   });


 })(jQuery);


 // /////line js  progress bar.//////



 $('#html').LineProgressbar({
   percentage: 80,
   radius: '3px',
   height: '20px',
   fillBackgroundColor: '#DA4453'
 });
 $('#css').LineProgressbar({
   percentage: 95,
   radius: '3px',
   height: '20px',
   fillBackgroundColor: '#E0C341'
 });
 $('#jq').LineProgressbar({
   percentage: 90,
   radius: '3px',
   height: '20px',
 });
 $('#bootstrap').LineProgressbar({
   percentage: 85,
   radius: '3px',
   height: '20px',
   fillBackgroundColor: '#E0C341'
 });
 $('#javascript').LineProgressbar({
   percentage: 70,
   radius: '3px',
   height: '20px',
   fillBackgroundColor: '#E0C341'
 });


 // /////counter up/////////


 $('.counter').counterUp({
   delay: 10,
   time: 1000
 });


 // //////////////////////////////preloader part///////////////////////

 $(window).load(function () {

   $(".preloader").fadeOut("slow");
 });              //  .delay(2000)


  // // ======================== wow js========================

  new WOW().init();

