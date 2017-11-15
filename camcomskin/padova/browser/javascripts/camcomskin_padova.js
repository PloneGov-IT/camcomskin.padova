(function($) {
  $(document).ready(function() {
    //expand/collapse search form

    /*
    var search_button = $("#searchbox .btnSearch");
    search_button.click(function(e) {
      e.preventDefault();
      $('#camcomskin-searchbox').slideToggle();
      $('#camcomskin-searchbox input#SearchableText').focus();
    });
    $('#camcomskin-searchbox a.closeLink').click(function(e) {
      e.preventDefault();
      $('#camcomskin-searchbox').slideUp();
    });

    //secondary menu
    $(".secondaryMenu [data-toggle=popover]").popover(
      {
        html:true
      }
    );
    $("li.secondaryMenuItem a.popovers").click(function(e) {
      e.preventDefault();
      //remove all class for open tab
      $(".secondaryMenu li").removeClass("secondaryTabOpen");
      if ($(this).next(".popover").length !== 0) {
        // the menu is already open, so close it
        $(this).popover('hide');
      }
      else {
        //close all the menus before open the current one
        $(".secondaryMenu [data-toggle=popover]").popover('hide');
        $(this).popover('show');
        $(this).parent().addClass("secondaryTabOpen");
      }
    });

    $("li.secondaryMenuItem").on('mouseenter', 'a.popovers', function(e) {
      e.preventDefault();
      //remove all class for open tab
      $(".secondaryMenu li.secondaryTabOpen").removeClass("secondaryTabOpen");
      $(".secondaryMenu [data-toggle=popover]").popover('hide');
      $(this).popover('show');
      $(this).parent().addClass("secondaryTabOpen");
    });

    //handle general clicks, to close open menus or search box
    $(document).click(function(event) {
      if(!$(event.target).closest('.secondaryMenuItem').length) {
        //close all secondary menus
        $(".secondaryMenu [data-toggle=popover]").popover('hide');
        $(".secondaryMenu li").removeClass("secondaryTabOpen");
      }
      // if(!$(event.target).closest('#camcomskin-searchbox').length && search_button[0] !== event.target) {
      //   //close the search box
      //   $('#camcomskin-searchbox').slideUp();
      // }
    });
    */

    // return-to-top arrow
    $(window).scroll(function() {
      if( $(window).width() < 768 ) {         // We only show the arrow on phones
        if ($(this).scrollTop() >= 50) {      // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
      }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
      if( $(window).width() < 768 ) {         // We only show the arrow on phones
        $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
        }, 500);
      }
    });

    /*
    // hover on news home
    $('.boxNotizieHome .boxNewsImg .linkItem a').hover( function() {
      $(this).parents('.boxNewsImg').toggleClass('imgHover');
    });

    // move the secondary manu in the footer when using a xs device
    var moveSecondaryMenu = function(event) {
      if( $(window).width() < 768) {
        $('.secondaryMenu').prependTo('#portal-footer-wrapper > div');
      }
      else {
        $('.secondaryMenu').appendTo('.portalHeaderContent');
      }
    };
    moveSecondaryMenu(null);
    $(window).on('resize orientationChange', moveSecondaryMenu);
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
      if ((!$(e.target).closest('#portal-searchbox').length && !$(e.target).closest('button#search-toggle').length) && $(window).width() <= 991) {
        $('#portal-searchbox').removeClass('open');
        $('#search-toggle').removeClass('open');
        $('body').removeClass('searchOpened');
      }

      if (!$(e.target).closest('.share').length) {
        $('.share').removeClass('open');
      }

      if ((!$(e.target).closest('#portal-mainnavigation').length && !$(e.target).closest('button.plone-navbar-toggle').length) && $(window).width() <= 991) {
        $('#portal-mainnavigation').removeClass('open');
        $('body').removeClass('menuOpened');
      }
    });


  });
})(jQuery);
