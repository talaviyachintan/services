$(document).ready(function () {
    $('#banner').owlCarousel({
        loop:true,
        dots:false,
        margin:10,
        nav:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('#testimonial').owlCarousel({
        items:4,
        loop:true,
        center:true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // header
    // $(window).scroll(function () {
    // var sticky = $('.sticky'),
    //       scroll = $(window).scrollTop();

    // if (scroll >= 100) sticky.addClass('fixed');
    // else sticky.removeClass('fixed');
    // });

    // loader

    setTimeout(function(){
        $(".preloaders").fadeOut();
    },2000);

    // $('.preloaders').delay(2000).fadeOut();


    // top_bottom arrows

    $('.bottom_top').click(function(){
      $('html, body').animate({
        scrollTop: '0px'
      },500);
      return false;
    })

      $('.bottom_top').hide();
      $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
          $('.bottom_top').fadeIn();
        }
        else{
          $('.bottom_top').fadeOut();
        }
      })
      // counter

      var a = 0;
      $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

              });
          });
          a = 1;
        }

        });

     

       
          // $('.sub-menu').hide();

          // $('.bars').click(function(){
          //      $('.sub-menu').slideToggle(50);
          // });
         

});

