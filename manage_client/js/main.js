(function ($) {
    var start_template =0;

    var arr_subject = ['CS 템플릿', '컨벤션 템플릿', '컨텐츠 템플릿', 'Biz 템플릿', 'VOD 템플릿'];
    var arr_text = ["◎ 기업의 고객센터 업무의 효율을 높여주는 챗봇 솔루션 <br/> ◎ 전화 및 홈페이지 문의 등을 통한 단순 질문 및 자주 묻는 질문 데이터를 기반으로 고객응대 특화 챗봇을 구축",
                    "◎ 행사 및 박람회 참가 시, 웹 사이트 가입 및 어플리케이션 설치 없이 기존에 사용 중인 메신저에서 간편하게 챗봇을 이용<br/> ◎ 예약, 참가신청, 정보제공, 설문, 이벤트 등 행 사 및 박람회에 특화된 기능을 탑재",
                    "◎ 기존의 SNS를 비롯한 다양한 채널의 영향력 있는 콘텐츠 브랜드 및 캐릭터를 챗봇으로 제작 <br/> ◎ 기획에 따른 다양한 기능 및 독자적인 챗봇 브랜드를 운영",
                    "◎ 기본적인 메신저 플랫폼에서 제공하는 기존의 구매 프로세스에 퀴즈, 게임과 같은 상품 큐레이션 기능을 도입 <br/> ◎ 흥미 요소를 결합하여 자연스럽게 상품 구매를 유도",
                    "◎ 채팅창에서 챗봇을 이용하여 영상 콘텐츠를 손쉽게 시청 가능 <br/> ◎ 이용자는 간편하게 원하는 영상 시청 가능"];
    var arr_id = ['page0','page1','page2','page3','page4'];
    
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #primary_menu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="lnr lnr-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /* testimonials Slider Active
    =============================*/
    $('.gallery-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000, //이거롤 바꾸는거네
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1280: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    });
    
    
 
    /*용희추가 시작*/
      function output(){
        var result =0;
        if($('#page0').html()){
            //alert('page0');
            result=1;
        }
        else if($('#page1').html()){
            //alert('page1');
            result=2;
        }
        else if($('#page2').html()){
            //alert('page2');
            result=3;
        }
        else if($('#page3').html()){
            //alert('page3');
            result=4;
        }
        else if($('#page4').html()){
           // alert('page4');
            result=0;
        }else{
            
        }
        

            var temp = $("#shot").html(
                '<div class="page-title" id="'+arr_id[result]+'"> ' +
                '<div class="space-10"></div>' +
                '<h3 id="shot-subject" class=" wow fadeInUp" data-wow-delay="0.4s">' + arr_subject[result] + '</h3>' +
                '</div>' +
                '<div class="space-20"></div>' +
                '<div id="shot-content" class="desc wow fadeInUp" data-wow-delay="0.6s">' +
                arr_text[result] +
                '</div>' +
                '<div class="space-50"></div>'

            );
            
       
    
  
        
    }
    
    start_template = setInterval(output,4000);
    
    $('.owl-dot').click(function () {
      

        var result = $(this).index();

        var temp = $("#shot").html(
            '<div class="page-title" id="page'+result+'">' +
            '<div class="space-10"></div>' +
            '<h3 id="shot-subject" class="wow fadeInUp" data-wow-delay="0.4s">' + arr_subject[result] + '</h3>' +
            '</div>' +
            '<div class="space-20"></div>' +
            '<div id="shot-content" class="desc wow fadeInUp" data-wow-delay="0.6s">' +
            arr_text[result] +
            '</div>' +
            '<div class="space-50"></div>'

        );
       
        clearInterval(start_template);
        start_template=setInterval(output,4000);
    });
    

 
    /*용희추가 끝*/

    $('.service-text-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000, //이거롤 바꾸는거네
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1280: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    });
    

    /* testimonials Slider Active
    =============================*/
    $('.team-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".toggole-boxs").accordion();
    /*---------------------------
    MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'https://quomodosoft.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscrie-form, .join-button').fadeOut();
                $('body').css('overflow-y', 'scroll');
            }
        }
    });

    /*-- Smoth-Scroll --*/
    $('.mainmenu-area a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
    var magnifPopup = function () {
        $('.popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions
    magnifPopup();
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(1000);
        /*WoW js Active
        =================*/
        new WOW().init({
            mobile: false,
        });
    });
    
    
    
    
})(jQuery);
