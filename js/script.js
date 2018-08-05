jQuery(function($) {

  $('.content').fadeIn(1000);

});

// (function($) {

//   $(window).load(function() {
//     $('.content').fadeIn(1000);
//   });

// });


(function($){
$(function(){
  $('.before-wrapper').on( "mousemove", function(e) {
    var offsets = $(this).offset();
    var fullWidth = $(this).width();
    var mouseX = e.pageX - offsets.left;

    if (mouseX < 0) { mouseX = 0; }
    else if (mouseX > fullWidth) { mouseX = fullWidth }


    $(this).parent().find('.comparison-slider').css({
      left: mouseX,
      transition: 'none'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(' + (mouseX) + 'px)',
      transition: 'none'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(' + (-1*mouseX) + 'px)',
      transition: 'none'
    });
  });
  $('.slider-wrapper').on( "mouseleave", function() {
    $(this).parent().find('.comparison-slider').css({
      left: '50%',
      transition: 'all .3s'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(50%)',
      transition: 'all .3s'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(-50%)',
      transition: 'all .3s'
    });
  });

}); 
})(jQuery); 

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}