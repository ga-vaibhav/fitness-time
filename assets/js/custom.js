AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

// for label effects
$(window).load(function () {
  $(".s-fm-grp input").val("");
  $(".s-fm-grp input").focusout(function () {
    if ($(this).val() != "") {
      $(this).addClass("has-content");
    } else {
      $(this).removeClass("has-content");
    }
  });
});
// 

// for side menu
$('#s-nav-more').on('click', function () {
  $('.s-sidemenu-box').addClass('s-side-open');
});
$('.s-sidemenu-close').on('click', function () {
  $('.s-sidemenu-box').removeClass('s-side-open');
});
// 

// faqs accordion
(function ($) {
  $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

  $('.accordion a').click(function (j) {
    var dropDown = $(this).closest('li').find('p');

    $(this).closest('.accordion').find('p').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.accordion').find('a.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
})(jQuery);
// 

// Slider
if ($('#main-slider').length) {
  var owl = $('#main-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    nav: true
  });
}

$("#brand-slider").owlCarousel({
  loop: true,
  margin: 5,
  responsiveClass: true,
  navigation: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: true
    },
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
});
//

// gallery
baguetteBox.run('.compact-gallery', {
  animation: 'slideIn'
});