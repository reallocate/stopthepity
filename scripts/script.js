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
    to: $('#slide10')
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
    to: $('#slide12')
  });

  $('#slide12next').scrollToElement({
    offset: -62,
    to: $('#slide14')
  });

  $('#showvidlink1').click(function () {
    $('.vidlink').addClass('hide');
    $('#video1link').removeClass('hide');
  });

  $('#showvidlink2').click(function () {
    $('.vidlink').addClass('hide');
    $('#video2link').removeClass('hide');
  });

  $('#showvidlink3').click(function () {
    $('.vidlink').addClass('hide');
    $('#video3link').removeClass('hide');
  });

  $('#showvidlink4').click(function () {
    $('.vidlink').addClass('hide');
    $('#video4link').removeClass('hide');
  });
   
});

window.fbAsyncInit = function() {
  // init the FB JS SDK
  FB.init({
    appId      : '378957218792212',                        // App ID from the app dashboard
    channelUrl : '//stopthepity.org/channel.html', // Channel file for x-domain comms
    status     : true,                                 // Check Facebook Login status
    xfbml      : true                                  // Look for social plugins on the page
  });

  // Additional initialization code such as adding Event Listeners goes here
};

// Load the SDK asynchronously
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$('#facebook-button').on('click', function(e) {
  //e.preventDefault();

  /*
  FB.ui({
    method: 'feed',
    link: 'http://stopthepity.org',
    picture: 'http://fbrell.com/f8.jpg',
    name: 'Stop the Pity',
    caption: 'stopthepity.org',
    description: ''
  }, function(response){});
  */
});

$('#stp-jtm-btn, #link-join').on('click', function(e) {
//  e.preventDefault();
  $('#manifesto').modal('show');
});

$('#mc-embedded-subscribe, .close').on('click', function(e) {
  $('#circle').hide();
});

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
