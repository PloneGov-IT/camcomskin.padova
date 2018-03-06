require([
  '++resource++camcomskin.padova.javascripts/slick.js',
  '++resource++camcomskin.padova.javascripts/ellipsed.js',
], function(slick, ellipsed) {
  var ellipsis = ellipsed.ellipsis;

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

  ellipsis('.tile-collection .collectionItemDescription', 4, {
    responsive: true,
  });
  ellipsis('.news-highlight .news-description', 4, { responsive: true });
  ellipsis('.news-two-rows-collection .collectionItemTitle', 3, {
    responsive: true,
  });
});
