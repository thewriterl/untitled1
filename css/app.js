
$(document).ready(function(){

    var animationEnd = (function(el) {
        var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    })(document.createElement('p3'));

    $('#p3').one(animationEnd, doSomething);

    function doSomething() {
        $("#p1").animate({
            opacity: 0.0,
            left: "+=50",
            easing: "easein"
        }, 5000, function () {
            //acabou a animacao faça alguma merda ou nao
            console.log('its over');
        });

        $( "#p3" ).animate({
            opacity: 0.0,
            left: "+=50",
            easing: "easein"
        }, 500, function() {
            //acabou a animacao faça alguma merda ou nao
        });
    }


});


