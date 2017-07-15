'use strict';

/*----------------------
  JS Guide
------------------------

 1. NAVIGATION
 2. SLIDER
 3. ANIMATION
 4. COUNTDOWN
 5. SETTINGS
 6. SCROLL TOP
 7. FORM VALIDATE
 8. IMAGE POPUP
 9. SCROLL ANIMATE
*/

$(document).ready(function() {

$('#preloader').delay(500).fadeOut('slow');

// 0.FOOTER
//================================================================
var footer = $('footer.bottom');
if (footer.length) {
  var footerOffset = $(window).height() - footer.offset().top - footer.innerHeight();
  if(footerOffset > 0) {
    var curPad = (footer.innerHeight() - footer.height())/2;
    var newPad = curPad + footerOffset;
    footer.css('padding-top', newPad + 'px');
  };
  footer.css('visibility', 'visible');
}

// 1.NAVIGATION
//================================================================

$(function(){
 var shrinkHeader = 120;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
      $('.navbar').addClass('navbar-theme-small');
    }
    else {
      $('.navbar').removeClass('navbar-theme-small');
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

$(function(){
     var navMain = $("#landing-navbar-collapse");
     navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
     });
 });

// 2.SLIDER
//================================================================

  $("#main-slider").find('.owl-carousel').owlCarousel({
    loop:true,
    autoPlay: 70000,
    pagination:false,
    singleItem : true,
    navigation : true,
    navigationText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
    ],
    transitionStyle : "fadeUp"  // fadeUp goDown backSlide
  });


  $("#gallery-slider").find('.owl-carousel').owlCarousel({
    loop:true,
    autoPlay: 7000,
    pagination:false,
    singleItem : true,
    navigation : true,
    navigationText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
    ],
    transitionStyle : "fadeUp"  // fadeUp goDown backSlide
  });


  $("#gift-carousel").find('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    animateOut: 'fadeOut',
    responsive:{
      0:{
          items:1
      },
      400:{
          items:1
      },
      600:{
          items:2
      },
      2200:{
          items:4
      }
    }
  });


// 3.ANIMATION
//================================================================

(function($) {
  $.fn.animated = function(inEffect) {
    $(this).each(function() {
      var ths = $(this);
      ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
          ths.addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: "90%"
      });

    });
  };
})(jQuery);

$(".animatefadeInDown").animated("fadeInDown","fadeInDown");
$(".animatefadeInUp").animated("fadeInUp","fadeInUp");
$(".animatefadeIn").animated("fadeIn","fadeOut");
$(".animatezoomIn").animated("zoomIn","zoomIn");

// 4.COUNTDOWN
//================================================================

  $('#getting-countdown').countdown('2018/05/19 4:00 PM', function(event) {
    if (event.offset.years >= 1) {
      $(this).html(event.strftime('<div class="countdown-num"><span>%D</span><p>days</p></div>'));
    } else if (event.offset.months >= 3) {
      $(this).html(event.strftime('<div class="countdown-num"><span>%m</span><p>months</p></div><div class="countdown-num"><span>%n</span><p>days</p></div>'));
    } else {
      $(this).html(event.strftime('<div class="countdown-num"><span>%w</span><p>weeks</p></div><div class="countdown-num"><span>%d</span><p>days</p></div><div class="countdown-num"><span>%H</span><p>hours</p></div><div class="countdown-num"><span>%M</span><p>minutes</p></div>'));
    }
  });


// 5.SETTINGS
//================================================================

  $(document).on('click', '#setting-button',  function(){
    if ($("#setting-button i").hasClass("fa-cogs")){
      $("#options-setting").addClass("move-right");
      $("#setting-button i").removeClass("fa-cogs");
      $("#setting-button i").addClass("fa-times");
    }
    else
    {
      $("#options-setting").removeClass("move-right");
      $("#setting-button i").removeClass("fa-times");
      $("#setting-button i").addClass("fa-cogs");
    }
  });

  var current_color = "lavan";
  var current_navbar = "white";

  $(document).on('click', '#vanilla',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/vanilla.css" type="text/css" />');
    current_color = "vanilla";
  });

  $(document).on('click', '#chocolate',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/chocolate.css" type="text/css" />');
    current_color = "chocolate";
  });

  $(document).on('click', '#cherry',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/cherry.css" type="text/css" />');
    current_color = "cherry";
  });

  $(document).on('click', '#mint',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/mint.css" type="text/css" />');
    current_color = "mint";
  });

  $(document).on('click', '#strawberries',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/strawberries.css" type="text/css" />');
    current_color = "strawberries";
  });

  $(document).on('click', '#lavan',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/lavan.css" type="text/css" />');
    current_color = "lavan";
  });

  // PATTERNS
  //----------------------------------------------------------------------------------

  $(document).on('click', '#pattern-1',  function(){
    $("#pattern-1 span").addClass("active");
    $("#pattern-2 span").removeClass("active");
    $("#pattern-3 span").removeClass("active");
    $("#pattern-none span").removeClass("active");

    $('link[rel*=pattern]').remove();
    $('head').append('<link rel="stylesheet pattern" href="css/skins/pattern-1.css" type="text/css" />');
  });

  $(document).on('click', '#pattern-2',  function(){
    $("#pattern-1 span").removeClass("active");
    $("#pattern-2 span").addClass("active");
    $("#pattern-3 span").removeClass("active");
    $("#pattern-none span").removeClass("active");

    $('link[rel*=pattern]').remove();
    $('head').append('<link rel="stylesheet pattern" href="css/skins/pattern-2.css" type="text/css" />');
  });

  $(document).on('click', '#pattern-3',  function(){
    $("#pattern-1 span").removeClass("active");
    $("#pattern-2 span").removeClass("active");
    $("#pattern-3 span").addClass("active");
    $("#pattern-none span").removeClass("active");

    $('link[rel*=pattern]').remove();
    $('head').append('<link rel="stylesheet pattern" href="css/skins/pattern-3.css" type="text/css" />');
  });

  $(document).on('click', '#pattern-none',  function(){
    $("#pattern-1 span").removeClass("active");
    $("#pattern-2 span").removeClass("active");
    $("#pattern-3 span").removeClass("active");
    $("#pattern-none span").addClass("active");

    $('link[rel*=pattern]').remove();
  });

});


// 6. SCROLL TOP
//================================================================

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

$(document).on('click', '.scrollup',  function(){
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});

// 7. FORM VALIDATE
//================================================================

$(function() {

  $("input,textarea").jqBootstrapValidation(
  {
    preventSubmit: true,
    submitError: function($form, event, errors) {
    },
    submitSuccess: function($form, event) {
      event.preventDefault();
       // get values from FORM
      var name    = $("#formName").val();
      var email   = $("#formEmail").val();
      var phone   = $("#formPhone").val();
      var message = $("#formMessage").val();

      $.ajax({
        url: "./php/form.php",
        type: "POST",
        data: {name: name, phone: phone, email: email, message: message},
        cache: false,
        success: function() {
          $('#contact-form').prepend( "<p class='text-center'>Thank You! Your message has been sent.</p><br>" );
          //clear all fields
          $('#contactForm').trigger("reset");
        },
       error: function() {
        $('#contactForm').trigger("reset");
        },
      })

    }
  });
});

// 8. IMAGE POPUP
//================================================================

$(document).ready(function() {
  $(".img-popup-link").magnificPopup({
    type:"inline",
    midClick: true
  });
});

$(".img-item").each(function(i) {
  $(this).find("a").attr("href", "#img_" + i);
  $(this).find(".img-popup-content").attr("id", "img_" + i);
});


// 9. SCROLL ANIMATE
//================================================================

function scrollToDiv(element,navheight){
  var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;
    $('body, html').animate({scrollTop: totalScroll}, 1500);
}

$('.scroll-nav a').click(function(e) {
  e.preventDefault();
    var el = $(this).attr('href');
    var elWrapped = $(el);
    scrollToDiv(elWrapped,0);
});

$('.section').waypoint(function(direction) {
    var $active = $(this);
    if (direction === "up") {
      $active = $active.prev();
    }
    if (!$active.length) {
      $active.end();
    }
    var currentId = $active.attr('id');
    $('#menu a').removeClass('active');
    $('#menu a[href=#'+currentId+']').addClass('active');
    }, { offset: '30%' }
);
