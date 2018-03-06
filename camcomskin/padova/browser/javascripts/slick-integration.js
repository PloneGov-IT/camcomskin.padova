require(['++resource++camcomskin.padova.javascripts/slick.js'], function(
  slick
) {
  var options = {
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  $('.collectionTile.carousel .pat-slider').slick(options);
});
