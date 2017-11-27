(function($) {
  $(document).ready(function() {
    // return-to-top arrow
    $(window).scroll(function() {
      if ($(window).width() < 768) {
        // We only show the arrow on phones
        if ($(this).scrollTop() >= 50) {
          // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
          $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
      }
    });
    $('#return-to-top').click(function() {
      // When arrow is clicked
      if ($(window).width() < 768) {
        // We only show the arrow on phones
        $('body,html').animate(
          {
            scrollTop: 0 // Scroll to top of body
          },
          500
        );
      }
    });

    // hover on news home
    $('.boxNotizieHome .boxNewsImg .linkItem a').hover(function() {
      $(this)
        .parents('.boxNewsImg')
        .toggleClass('imgHover');
    });
  });
})(jQuery);
