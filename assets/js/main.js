
$(document).ready(function(){
  $(".timeline-tab span").click(function(){
    var btn_id = $(this).attr("id");
    $(".timeline-tab span").removeClass("active");
    $("#"+btn_id).addClass("active");
      $(".time-popup").removeClass("active");
    $("#"+btn_id+"panel").addClass("active");
  });
  });
  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 12,
      max: 41,
      values: [ 12, 41 ],
      slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    });