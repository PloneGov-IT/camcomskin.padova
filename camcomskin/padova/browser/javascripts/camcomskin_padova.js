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

    /*
    // hover on news home
    $('.boxNotizieHome .boxNewsImg .linkItem a').hover(function() {
      $(this)
        .parents('.boxNewsImg')
        .toggleClass('imgHover');
    });
    */

    $('#dropdown-lang').on('click', function(e) {
      $('ul.languages').toggleClass('open');
    });

    /*
     * mobile: search button action
     */
    $('#search-toggle').on('click', function(e) {
      $('#portal-searchbox').toggleClass('open');
      $('#search-toggle').toggleClass('open');
      $('body').toggleClass('searchOpened');

      if ($('#portal-searchbox').hasClass('open')) {
        $('#searchGadget').focus();
      }
    });

    /*
     * mobile: menu toggle click
     */
    $('button.plone-navbar-toggle').on('click', function(e) {
      $('#portal-mainnavigation').addClass('open');
      $('body').addClass('menuOpened');
    });

    $('#globalnav-close').on('click', function(e) {
      $('#portal-mainnavigation').removeClass('open');
      $('body').removeClass('menuOpened');
    });

    /*
     * gestione click fuori per chiudere menu, ricerca e condividi
     */
    $(document).on('click', function(e) {
      if (
        !$(e.target).closest('#portal-searchbox').length &&
        !$(e.target).closest('button#search-toggle').length &&
        $(window).width() <= 991
      ) {
        $('#portal-searchbox').removeClass('open');
        $('#search-toggle').removeClass('open');
        $('body').removeClass('searchOpened');
      }

      if (!$(e.target).closest('.share').length) {
        $('.share').removeClass('open');
      }

      if (
        !$(e.target).closest('#portal-mainnavigation').length &&
        !$(e.target).closest('button.plone-navbar-toggle').length &&
        $(window).width() <= 991
      ) {
        $('#portal-mainnavigation').removeClass('open');
        $('body').removeClass('menuOpened');
      }
    });

    $('#portal-footer-wrapper').prepend($('.portlet.footer-logo'));
    $('#portal-footer-wrapper').prepend($('.portlet.valuta-sito'));
  });
})(jQuery);
