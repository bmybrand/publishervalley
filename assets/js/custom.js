// Keep footer brand icons consistent across legacy page templates. Font Awesome
// brand glyphs must use `fab`; the older `fa` class renders them as blanks.
document.querySelectorAll(
  '.footer-payment i.fa.fa-facebook, .footer-payment i.fa.fa-instagram, .footer-payment i.fa.fa-linkedin'
).forEach(function (icon) {
  icon.classList.remove('fa');
  icon.classList.add('fab');
});

// Animations call 

// AOS.init({
//     duration: 1200,
//     once: true,
// })

// new WOW().init();


// end Animation 






// counter start at six-wrap class 
// JS 

// $(window).on('scroll', function () {
//     if ($(window).scrollTop() >= $('.six-wrap').offset().top + $('.six-wrap').outerHeight() - window.innerHeight){
//         counterrr();
//     }
// });


// function counterrr() {
//     $('.counter').each(function () {
//         $(this).prop('Counter', 0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 3000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
//     $('.counter1').removeClass('counter');
// }

// close 











// scroll behavior 
// window.scroll({
//     behavior: 'smooth'
// });




// collapse hide on complete body click expert header-menulink-main 

// $(document).on('click', function (event) {
//     if (!$(event.target).closest('.header-menulinks-main').length) {
//         $('.collapse').collapse('hide');
//     }
// });


// inner click closing in  industry-inner class 

// $(".industry-inner").click(function () {
//     $('.collapse').collapse('hide');
// });

// RESPONSIVE NAVIGATION
// OPEN BTN
$(document).ready(function () {
    $("#navbar").on("click", function() {
      $(".nveMenu").addClass("is-opened");
      $(".overlay").addClass("is-on");
    });

    $(".overlay").on("click", function() {
      $(this).removeClass("is-on");
      $(".nveMenu").removeClass("is-opened");
    });

    $(".close-btn-nav").click(function(){
      $(".nveMenu").removeClass("is-opened");
      $(".overlay").removeClass("is-on");
    });

    // Mobile dropdown toggle
    $(".mobile-dropdown-toggle").on("click", function(e) {
      e.preventDefault();
      $(this).parent(".mobile-dropdown").toggleClass("is-active");
    });
  });
  // RESPONSIVE NAVIGATION

$('.brands .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplay: true,
    pagination: false,
    nav: false,
    dots:false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
  });
  $('.portfolio-slides .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplay: true,
    pagination: false,
    nav: false,
    dots:true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
  });
  $('.testimonial-slide .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplay: true,
    pagination: false,
    nav: false,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });

  $(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });
  
  
  
   
  






  let mybutton = document.getElementById("btn-back-to-top");

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
