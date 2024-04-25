var position = jQuery(window).scrollTop();
//sticky header function
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

// hamburger-icon js
  jQuery(".hamburger-icon").click(function(){
       jQuery("html,body").toggleClass("open-menu");
  });


// select2 js
  jQuery('.custom-dropdown').select2({
    minimumResultsForSearch: Infinity, 
    placeholder: function(){
      jQuery(this).data('data-placeholder');      
  } 
  });

//datepicker js

jQuery( ".datepicker").datepicker();


// auto complete js

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


// video js
jQuery('.play-btn').click(function () {
  jQuery("body,html").addClass('modal-open');
    var _this = jQuery(this).attr('data-link');
    var _currentModal = jQuery(".custom-modal[data-target='" + _this + "']");
    _currentModal.addClass("visible");
    setTimeout(function () {
        _currentModal.addClass("fadein");
    }, 125);

      _currentModal.find("video").attr('controls', true).get(0).play();
   
});
// custom modal js
jQuery('.custom-modal,.close-btn').click(function () {
  jQuery("body,html").removeClass('modal-open');
    var _this = jQuery(this)
  jQuery(this).closest(".custom-modal").removeClass("fadein");
    setTimeout(function () {
        _this.closest(".custom-modal").removeClass("visible");
    }, 125);

    _this.closest(".custom-modal").find("video").get(0).pause();
});
jQuery(".custom-modal .modal-inner-content").click(function(e){
    e.stopPropagation();
});



// read-more read-less jQuery
jQuery(".moreless-btn").click(function(e){
  e.preventDefault();
  if(jQuery(this).text() == "Read more")
  {
    $(this).text("Read less");
  }
  else{
    $(this).text("Read more");
  }
  
  jQuery(this).closest(".video-content-inner-wrapper").find(".more-less").toggleClass("show-content");

});
AOS.init();

});

jQuery(window).scroll(function(e){
  sticky_header();
  
});