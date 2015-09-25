(function($) {
  $(document).ready(function() {
    $(".secondaryMenu [data-toggle=popover]").popover({html:true});
    // $('li.secondaryMenuItem').on("blur", "a", function(e) {
    //   var parent_id = $(this).parents('li').attr('id');
    //   if ($(e.relatedTarget).parents("li.secondaryMenuItem").attr('id') !== parent_id) {
    //     $("#" + parent_id + " [data-toggle=popover]").popover('hide');
    //     $(e.relatedTarget).focus();
    //   }
    // });
  });
})(jQuery);
