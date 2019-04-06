/* End of project events */
/* globals */
var lastScrollY = 0, ticking=false, modal=false

/* global scroll event stores the scroll position */
window.addEventListener('scroll', onScroll)
function onScroll(){
  lastScrollY = window.scrollY
}


function getOffset(elem) {
  var el = elem.getBoundingClientRect();
  return {
    left: el.left + (window.scrollX || window.pageXOffset),
    top: el.top + (window.scrollY || window.pageYOffset)
  }
}

export function scrollTo(to, duration) {

    //var element = document.getElementById('body')
    var eViewport = [document.scrollingElement]
    if (!eViewport) {
      eViewport = [document.documentElement, document.body]
    }

    var dest = getOffset(document.getElementById(to)).top
    var start = eViewport[0].scrollTop,
        position = 0,
        change = dest - start,
        increment = 20;
    if (start === undefined) start = eViewport[1].scrollTop

    var animateScroll = function(elapsedTime) {

        elapsedTime += increment;
        position = easeInOut(elapsedTime, start, change, duration);
        eViewport.forEach( item => {
          item.scrollTop = position;
        })

        if (elapsedTime < duration) {
            setTimeout(function() {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
}

function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}
