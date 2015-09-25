(function($) {
  $(document).ready(function() {
    $(".secondaryMenu [data-toggle=popover]").popover({html:true});
    $(document).click(function(event) {
      if(!$(event.target).closest('.secondaryMenuItem').length) {
        $(".secondaryMenu [data-toggle=popover]").popover('hide');
      }
    });
    $("li.secondaryMenuItem a.popovers").click(function(e) {
      if ($(this).next(".popover").length !== 0) {
        $(this).popover('hide');
      }
      else {
        $(".secondaryMenu [data-toggle=popover]").popover('hide');
        $(this).popover('show');
      }
    });
  });
})(jQuery);
