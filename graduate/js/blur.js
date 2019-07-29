/**
 *
 * @param classes - array of class names for blur targeting
 * @param elements
 */
var blur = function(classes, elements) {
    'user strict';
    let people = document.getElementById('img1-people'),
    hello = document.getElementById('hello'),
        blurs = classes.map(className => document.getElementsByClassName(className)[0]),
        windowHeight = window.innerHeight,
        isScroll = false;

    var latestScroll = 0;
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    window.requestAnimationFrame = requestAnimationFrame;

    var init = function() {
        window.addEventListener('scroll', function(){
            latestScroll = window.scrollY;
            checkScroll();
        }, false);
    }

    var checkScroll = function() {
        if(!isScroll) {
            window.requestAnimationFrame(update);
        }
        isScroll = true;
    }

    var update = function() {
        currentScroll = latestScroll;
        isScroll = false;
        var helloScroll = currentScroll / 4,
            blurScroll = currentScroll * 2;

        hello.style.transform = 'translate3d(0, ' + helloScroll + 'px, 0)';
        people.style.transform = `translate(-${helloScroll / 2}px, ${helloScroll*3.7}px)`;
        people.style. filter = `blur(${helloScroll/8}px)`;
        blurs.forEach(blur => {
            const boundingClientRect = blur.getBoundingClientRect()
            blur.style.opacity = (boundingClientRect.top*2 / (-boundingClientRect.height - 0.1)).toFixed(2);
            if (blur.style.opacity >= 1) {
                blur.style.opacity = 1;
            }
        });
    };

    init();
};
