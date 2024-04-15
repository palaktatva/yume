jQuery(document).ready(function(){


  jQuery('.custom-dropdown').select2({
    minimumResultsForSearch: Infinity, 
    placeholder: function(){
      jQuery(this).data('data-placeholder');      
  } 
  });

  $( function() {
    $( "#datepicker").datepicker();
  } );

  $( function() {
    var availableTags = [
      "Ahemdabad",
      "Surat",
      "Jamnagar",
      "Vadodra",
      "Rajkot",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
});