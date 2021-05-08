$(document).ready(function() {
    $('.dropdown-trigger').dropdown({hover: false});
    $('.scrollspy').scrollSpy();
    

    $('.single-item').slick(
        {
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            cssEase: 'ease-in-out',
            fade: true,
        }
    );

    $('select').formSelect();
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay: true,
      autoplayHoverPause:true,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
    $('.one-time').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
});