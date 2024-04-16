function sticky_header(){
  var header_length = jQuery(".site-header").innerHeight();
 
  if(jQuery(window).scrollTop() > header_length){
jQuery("body").addClass("sticky_header");
  }
  else{
    jQuery("body").removeClass("sticky_header");
  }
}


jQuery(document).ready(function(){
  sticky_header();
  jQuery('.custom-dropdown').select2({
    minimumResultsForSearch: Infinity, 
    placeholder: function(){
      jQuery(this).data('data-placeholder');      
  } 
  });

jQuery( function() {
  jQuery( "#datepicker").datepicker();
  } );

jQuery( function() {
    var availableTags = [
      "Ahemdabad",
      "Surat",
      "Jamnagar",
      "Vadodra",
      "Rajkot",
    ];
  jQuery( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


jQuery('.play-btn').click(function () {
  jQuery("body,html").addClass('modal-open');
    var _this = jQuery(this).attr('data-link');

    var _currentModal = jQuery(".custom-modal[data-target='" + _this + "']");
    _currentModal.addClass("visible");

    setTimeout(function () {
        _currentModal.addClass("fadein");
    }, 125);

    jQuery(this).closest("body").find("video").attr('controls', true).get(0).play();
});
jQuery('.custom-modal, .modal-close').click(function () {
  jQuery("body,html").removeClass('modal-open');
    var _this = jQuery(this)
  jQuery(this).closest(".custom-modal").removeClass("fadein");
    setTimeout(function () {
        _this.closest(".custom-modal").removeClass("visible");
    }, 125);
    jQuery(this).closest("body").find("video").get(0).pause();
});
jQuery(".custom-modal .modal-inner-content").click(function(e){
    e.stopPropagation();
});

});

jQuery(window).scroll(function(){
  sticky_header();
});