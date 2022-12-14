$(document).ready(function() { // $(document).ready shorthand
    $('.row').fadeIn('slow');
  });
  $(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll(function() {
      /* Check the location of each desired element */
      $('.col-sm').each(function(i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({
            'opacity': '1'
          }, 700);
        }
      });
    });
  });
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }