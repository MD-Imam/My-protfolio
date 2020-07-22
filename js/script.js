 
  
// fixed/sticky menu

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  
  if(scrollamount > 0){
    $(".menu").addClass("fixed")
  }else{
    $(".menu").removeClass("fixed")
  }

    



  if(scrollamount > 500){
    $(".btop").fadeIn();
  }else{
    $(".btop").fadeOut();
  }
})


$(".btop").click(function(){
$("html,body").animate({
  scrollTop:0
},3000)
})


   
// type.js


var typed = new Typed(".type", {
  strings: [
    "Hello, every one.....",
    "This is Mr. Imam Hossain....",
    "I'm a Web designer !",
    "Thank you so much for visiting my website..... ",
    "And you can contact with me for any kind of consultation.. ",
    "in web design and Web design related topics .....!",
    "You can knock me at any time ... !",
    "I'm dedicated and open minded for all",
    "And available 24/7 in online !",
    "Best of luck... !",
    "Thanks again... !",
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
    resolution: 300,
    perturbance: 0.05,
  });
  $(".or").ripples({
    resolution: 300,
    perturbance: 0.05,
  });
  $(".od").ripples({
    resolution: 300,
    perturbance: 0.05,
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

$('.demo').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  autoplay:true,
  autoplaySpeed:2000,
  // fade:true,
  
  prevArrow:'<i class="fa fa-long-arrow-left prev " aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-long-arrow-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
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


//  service-part

$('.t').slick({
  dots:false,
  arrows:false,
  infinite:true,
  speed: 1000,
  autoplay:true,
  autoplaySpeed:2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
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

  // projec-part

$('.fahim').slick({
  dots:false,
  arrows:false,
  infinite:true,
  speed: 1000,
  autoplay:true,
  autoplaySpeed:2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
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
 (function($){


  // init Isotope
  var $grid = $('.guru').isotope({
   // options
  });
  // filter items on button click
  $('.portfolio-filter').on( 'click', 'li', function() {
   var filterValue = $(this).attr('data-filter');
   $grid.isotope({ filter: filterValue });
  });
  // filter items on button click
  $('.portfolio-filter').on( 'click', 'li', function() {
   $(this).addClass('active').siblings().removeClass('active');
  });
  
  
  })(jQuery);