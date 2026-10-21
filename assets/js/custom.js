// Keep footer brand icons consistent across legacy page templates. Font Awesome
// brand glyphs must use `fab`; the older `fa` class renders them as blanks.
document.querySelectorAll(
  '.footer-payment i.fa.fa-facebook, .footer-payment i.fa.fa-instagram, .footer-payment i.fa.fa-linkedin'
).forEach(function (icon) {
  icon.classList.remove('fa');
  icon.classList.add('fab');
});

// Add a shared service picker to the consultation modal. On service pages,
// the matching service starts selected but remains fully editable by visitors.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('launchBookForm');

  if (!form || form.querySelector('.pv-service-picker')) {
    return;
  }

  var services = [
    'Ghostwriting',
    'Book Writing',
    'Book Editing',
    'Proofreading',
    'Book Publishing',
    'Amazon Publishing',
    "Children's Book Publishing",
    'Book Cover Design',
    'Book Formatting',
    'Book Marketing',
    'Author Website Design',
    'Audiobook Services',
    "Children's Book Illustration"
  ];

  var serviceByPath = {
    '/ghost-writing/': ['Ghostwriting'],
    '/book-writing/': ['Book Writing'],
    '/book-editing/': ['Book Editing'],
    '/book-developmental-editing-services/': ['Book Editing'],
    '/book-line-editing-services/': ['Book Editing'],
    '/proofreading-services/': ['Proofreading'],
    '/book-publishing/': ['Book Publishing'],
    '/amazon-publishing/': ['Amazon Publishing'],
    '/children-picture-book-publishing/': ["Children's Book Publishing"],
    '/book-cover-design/': ['Book Cover Design'],
    '/book-formatting/': ['Book Formatting'],
    '/book-marketing/': ['Book Marketing'],
    '/author-website-design/': ['Author Website Design'],
    '/audiobook-services/': ['Audiobook Services'],
    '/children-picture-book-illustration/': ["Children's Book Illustration"],
    '/book-publishing-and-ghostwriting-in-houston-tx/': ['Book Publishing', 'Ghostwriting']
  };

  var path = window.location.pathname.replace(/\/+$/, '/') || '/';
  var selectedServices = serviceByPath[path] || [];
  var picker = document.createElement('fieldset');
  picker.className = 'pv-service-picker';

  var legend = document.createElement('legend');
  legend.textContent = 'Services you are interested in';
  picker.appendChild(legend);

  var grid = document.createElement('div');
  grid.className = 'pv-service-picker-grid';

  services.forEach(function (service) {
    var label = document.createElement('label');
    label.className = 'pv-service-choice';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'services[]';
    checkbox.value = service;
    checkbox.checked = selectedServices.indexOf(service) !== -1;

    var text = document.createElement('span');
    text.textContent = service;

    label.appendChild(checkbox);
    label.appendChild(text);
    grid.appendChild(label);
  });

  picker.appendChild(grid);

  var messageGroup = form.querySelector('textarea');
  messageGroup = messageGroup ? messageGroup.closest('.form-group') : null;
  form.insertBefore(picker, messageGroup || form.querySelector('.btn-submit-modal'));
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
