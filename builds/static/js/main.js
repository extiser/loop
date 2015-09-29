jQuery(document).ready(function($) {
// text warp
/*Zoom Icon. Portfolio page*/
    $('a.touch').hover(function(){
        $(this).find('span.zoomIcon').stop(true, true).animate({opacity: 1, top: '50%'}, 200);
    },function(){
        $(this).find('span.zoomIcon').stop(true, true).animate({opacity: 0, top: '-50%'}, 100);
    })

//LOUPE!!!!
    /* This code is executed on the document ready event */
    var left    = 0,
        top     = 0,
        sizes   = { retina: { width:250, height:250 },
            webpage:{ width:1400, height:732 } },
        webpage = $('#webpage'),
        offset  = { left: webpage.offset().left, top: webpage.offset().top },
        retina  = $('#retina');

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

        // x = Number(x.split("px")[0]);
        // y = Number(y.split("px")[0]);
        x = x.split("px")[0];
        y = y.split("px")[0];
        void 0;

        if(x > -1050 && x < -900 && y > -750 && y < -450) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('div.text').attr('id', 'ass');
        }
        else if (x > -1300 && x < -1050 && y > -600 && y < -400) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('div.text').attr('id', 'stomach');
        }
        else if (x > -800 && x < -500 && y > -600 && y < -300) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('div.text').attr('id', 'legs');
        } 
        else if (x > -1400 && x < -1300 && y > -500 && y < -300) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('div.text').attr('id', 'boobs');
        }
        else if (x > -1700 && x < -1500 && y > -300 && y < 0) {
            $("#retina").addClass("highlight");
            $("#iphone").click(function(e) {
                window.location.href = "";
            });
            $("#retina").children('div.text').attr('id', 'face');
        }
        else {
            $("#retina").removeClass("highlight");
            $('#iphone').unbind('click');
            $("#retina").children('div.text').removeAttr('id');
            $("#retina").children('.blik').css( "top", "0px" );
        }
    });
});