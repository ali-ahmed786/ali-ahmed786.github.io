/*$(document).ready(function() { // $(document).ready shorthand
    $('.row').fadeIn('slow');
  });
  $(document).ready(function() {
    $(window).scroll(function() {
      $('.col-sm').each(function(i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({
            'opacity': '1'
          }, 700);
        }
      });
    });
  });
*/
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
