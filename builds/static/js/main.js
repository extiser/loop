jQuery(document).ready(function($) {
    
/*Zoom Icon. Portfolio page*/
    $('a.touch').hover(function(){
        $(this).find('span.zoomIcon').stop(true, true).animate({opacity: 1, top: '50%'}, 200);
    },function(){
        $(this).find('span.zoomIcon').stop(true, true).animate({opacity: 0, top: '-50%'}, 100);
    })
    $(function(){
    // IPad/IPhone
        var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };
        scaleFix();
    });
//LOUPE!!!!
    /* This code is executed on the document ready event */
    var left    = 0,
        top     = 0,
        sizes   = { retina: { width:250, height:250 },
            webpage:{ width:1400, height:732 } },
        webpage = $('#webpage'),
        offset  = { left: webpage.offset().left, top: webpage.offset().top },
        retina  = $('#retina');

    if(navigator.userAgent.indexOf('Chrome')!=-1) {
        /*  Applying a special chrome curosor,
         as it fails to render completely blank curosrs. */
        retina.addClass('chrome');
    }
    webpage.mousemove(function(e){
        left = (e.pageX-offset.left);
        top = (e.pageY-offset.top);
        if(retina.is(':not(:animated):hidden')){
            /* Fixes a bug where the retina div is not shown */
            webpage.trigger('mouseenter');
        }
        if(left < 0 || top < 0 || left > sizes.webpage.width || top > sizes.webpage.height) {
            /*  If we are out of the bondaries of the
             webpage screenshot, hide the retina div */
            if(!retina.is(':animated')) {
                webpage.trigger('mouseleave');
            }
            return false;
        }
        /*  Moving the retina div with the mouse
         (and scrolling the background) */
        retina.css({
            left                : left - sizes.retina.width/2,
            top                 : top - sizes.retina.height/2,
            backgroundPosition  : '-'+(1.4*left)+'px -'+(1.3*top)+'px'
        });
    }).mouseleave(function(){
            retina.stop(true,true).fadeOut('fast');
        }).mouseenter(function(){
            retina.stop(true,true).fadeIn('fast');
        });
    //create links to materials
    $("#iphone").mousemove(function(event) {
        var x = ($('#retina').css('backgroundPositionX'));
        var y = ($('#retina').css('backgroundPositionY'));
        //ie fix
        if(!x || !y) {
            x = ($('#retina').css('background-position-x'));
            y = ($('#retina').css('background-position-y'));
        }
        //FF fix
        // if ($.browser.mozilla) {
        //     var backgroundPos = $('#retina').css('backgroundPosition').split(" ");
        //     //now contains an array like ["0%", "50px"]
        //     x = backgroundPos[0],
        //     y = backgroundPos[1];
        // }
        x = Number(x.split("px")[0]);
        y = Number(y.split("px")[0]);
        void 0;
        if(x > -1050 && x < -900 && y > -750 && y < -600) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('span').html('Попа').css("top", "50%");;
            // $("#retina").children('.blik').css( "top", "-22px" );
        }
        else if (x > -1500 && x < -1050 && y > -600 && y < -400) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('span').html('Плоский живот').css("top", "50%");;
            // $("#retina").children('.blik').css( "top", "-22px" );
        }
        else if (x > -800 && x < -200 && y > -600 && y < -300) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('span').html('Ноги').css("top", "50%");
            // $("#retina").children('.blik').css( "top", "" );
        } 
        else if (x > -1400 && x < -1300 && y > -400 && y < -300) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('span').html('Идеальная грудь').css("top", "50%");;
            // $("#retina").children('.blik').css( "top", "-27px" );
        }
        else if (x > -1600 && x < -1400 && y > -700 && y < -600) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('span').html('Руки').css("top", "50%");;
            // $("#retina").children('.blik').css( "top", "-27px" );
        }
        else if (x > -1700 && x < -1500 && y > -300 && y < 0) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('span').html('Лицо').css("top", "50%");;
            // $("#retina").children('.blik').css("top", "27px");
        }

        else {
            $("#retina").removeClass("highlight");
            $('#iphone').unbind('click');
            $("#retina").children('span').html('');
            $("#retina").children('.blik').css( "top", "0px" );
        }
    });
});