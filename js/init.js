/*
Lil method I whipped up. - Chris Abrams
*/

;(function($, window, undefined) {

  $.fn.scrollToElement = function(options) {

    var document = window.document;

    // Plugin defaults
    $.fn.scrollToElement.options = {
      offset: 0,
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
          scrollTop: options.to.offset().top + options.offset
        }, options.speed);
      });

    });
  };

}(jQuery, window));

/* Create HTML5 element for IE */
document.createElement("section");

$(document).ready(function() {

  $('#link-videos').scrollToElement({
    offset: -62,
    to: $('#slide10')
  });

  $('#link-about').scrollToElement({
    offset: -62,
    to: $('#slide4')
  });

  $('#link-partners').scrollToElement({
    offset: -62,
    to: $('#slide16')
  });

  $('#link-support').scrollToElement({
    offset: -62,
    to: $('#slide14')
  });

  $('#slide1next').scrollToElement({
    offset: -62,
    to: $('#slide4')
  });

  $('#slide4next').scrollToElement({
    offset: -62,
    to: $('#slide6')
  });

  $('#slide6next').scrollToElement({
    offset: -62,
    to: $('#slide8')
  });

  $('#slide8next').scrollToElement({
    offset: -62,
    to: $('#slide10')
  });

  $('#slide12next').scrollToElement({
    offset: -62,
    to: $('#slide14')
  });
   
});
