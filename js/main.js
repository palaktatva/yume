jQuery(document).ready(function(){

  jQuery('.custom-dropdown').select2({
    minimumResultsForSearch: Infinity, 
    placeholder: function(){
      $(this).data('data-placeholder');      
  } 
  });


  $( function() {
    var availableTags = [
      "Surat",
      "Amreli",
      "Ahemdabad",
      "Vadodara"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

  $( function() {
    $( "#datepicker" ).datepicker();
  } );
});