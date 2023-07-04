/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
$('#myCarousel').carousel({
    interval: 3000,
 })


 $('#myCarousel12').carousel({
    interval: 3000,
 })


 function scrollToCarousel() {
    $('html, body').animate({
      scrollTop: $('#aqui').offset().top
    }, 800); // Velocidad del desplazamiento en milisegundos
  }



  function initparticles() {
    bubbles();
    hearts();
    lines();
    confetti();
    fire();
    sunbeams();
 }
 
 /*The measurements are ... whack (so to say), for more general text usage I would generate different sized particles for the size of text; consider this pen a POC*/
 
 function bubbles() {
    $.each($(".particletext.bubbles"), function(){
       var bubblecount = ($(this).width()/50)*10;
       for(var i = 0; i <= bubblecount; i++) {
          var size = ($.rnd(40,80)/10);
          $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 function hearts() {
    $.each($(".particletext.hearts"), function(){
       var heartcount = ($(this).width()/50)*5;
       for(var i = 0; i <= heartcount; i++) {
          var size = ($.rnd(60,120)/10);
          $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 function lines() {
    $.each($(".particletext.lines"), function(){
       var linecount = ($(this).width()/50)*10;
       for(var i = 0; i <= linecount; i++) {
          $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(20,80) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 function confetti() {
    $.each($(".particletext.confetti"), function(){
       var confetticount = ($(this).width()/50)*10;
       for(var i = 0; i <= confetticount; i++) {
          $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 function fire() {
    $.each($(".particletext.fire"), function(){
       var firecount = ($(this).width()/50)*20;
       for(var i = 0; i <= firecount; i++) {
          var size = $.rnd(8,12);
          $(this).append('<span class="particle" style="top:' + $.rnd(40,70) + '%; left:' + $.rnd(-10,100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,20)/10) + 's;"></span>');
       }
    });
 }
 
 function sunbeams() {
    $.each($(".particletext.sunbeams"), function(){
       var linecount = ($(this).width()/50)*10;
       for(var i = 0; i <= linecount; i++) {
          $(this).append('<span class="particle" style="top:' + $.rnd(-50,0) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(80,160) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 jQuery.rnd = function(m,n) {
       m = parseInt(m);
       n = parseInt(n);
       return Math.floor( Math.random() * (n - m + 1) ) + m;
 }
 
 initparticles();
 
 