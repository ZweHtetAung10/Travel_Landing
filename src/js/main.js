$(document).ready(function(){

    $('.slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        centerPadding: '60px',
      });

      $('.slick-arrow').text("");
      $('.slick-prev').html("<i class='fa-solid fa-angle-left'></i>");
      $('.slick-next').html("<i class='fa-solid fa-angle-right'></i>");

});