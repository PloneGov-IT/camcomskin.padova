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
      if ($(this).next(".popover").length !== 0) {
        $(this).popover('hide');
      }
      else {
        $(".secondaryMenu [data-toggle=popover]").popover('hide');
        $(this).popover('show');
      }
    });

    //handle general clicks, to close open menus or search box
    $(document).click(function(event) {
      if(!$(event.target).closest('.secondaryMenuItem').length) {
        $(".secondaryMenu [data-toggle=popover]").popover('hide');
      }
      if(!$(event.target).closest('#camcomskin-searchbox').length && search_button[0] !== event.target) {
        $('#camcomskin-searchbox').slideUp();
      }
    });
  });
})(jQuery);
