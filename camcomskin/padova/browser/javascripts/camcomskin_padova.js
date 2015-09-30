(function($) {
  $(document).ready(function() {
    //expand/collapse search form
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
    $(".secondaryMenu [data-toggle=popover]").popover({html:true});
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

    //handle general clicks, to close open menus or search box
    $(document).click(function(event) {
      if(!$(event.target).closest('.secondaryMenuItem').length) {
        //close all secondary menus
        $(".secondaryMenu [data-toggle=popover]").popover('hide');
        $(".secondaryMenu li").removeClass("secondaryTabOpen");
      }
      if(!$(event.target).closest('#camcomskin-searchbox').length && search_button[0] !== event.target) {
        //close the search box
        $('#camcomskin-searchbox').slideUp();
      }
    });
  });
})(jQuery);
