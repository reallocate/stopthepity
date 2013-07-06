/*
Lil method I whipped up. - Chris Abrams
*/

;(function($, window, undefined) {

  $.fn.scrollToElement = function(options) {

    var document = window.document;

    // Plugin defaults
    $.fn.scrollToElement.options = {
      speed: 1000,
      to: ''
    };

    // Override defaults with specified options
    options = $.extend( {}, $.fn.scrollToElement.options, options );

    return this.each(function() {

      var _this  = this,
          $this  = $(this)

      $this.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: options.to.offset().top
        }, options.speed);
      });

    });
  };

}(jQuery, window));

/* Create HTML5 element for IE */
document.createElement("section");

$(document).ready(function() {

  $('#slide1next').scrollToElement({
    to: $('#slide4')
  });

  $('#slide4next').scrollToElement({
    to: $('#slide6')
  });

  $('#slide6next').scrollToElement({
    to: $('#slide8')
  });

  $('#slide8next').scrollToElement({
    to: $('#slide10')
  });

  $('#slide12next').scrollToElement({
    to: $('#slide14')
  });
   
});
