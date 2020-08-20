const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventLister('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated','rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const cssBar = document.querySelector(".bar-javaScript");
const cssBar = document.querySelector(".bar-react");
const cssBar = document.querySelector(".bar-hooks");
const cssBar = document.querySelector(".bar-sql");
const cssBar = document.querySelector(".bar-c");
const cssBar = document.querySelector(".bar-net");

var tl = new TimelineLite()

tl.fromTo(htmlBar, .75, {width: `calc(0%-6px)`}, {width:`90%-6px)`, ease: Power4.easeOut})
fromTo(cssBar, 0.75, { width: `calc(0%-6px)` }, { width: `95%-6px)`, ease: Power4.easeOut });
fromTo(javaScriptBar, 0.75, { width: `calc(0%-6px)` }, { width: `80%-6px)`, ease: Power4.easeOut });
fromTo(reactBar, 0.75, { width: `calc(0%-6px)` }, { width: `70%-6px)`, ease: Power4.easeOut });
fromTo(hooksBar, 0.75, { width: `calc(0%-6px)` }, { width: `65%-6px)`, ease: Power4.easeOut });
fromTo(sqlBar, 0.75, { width: `calc(0%-6px)` }, { width: `50%-6px)`, ease: Power4.easeOut });
fromTo(cBar, 0.75, { width: `calc(0%-6px)` }, { width: `50%-6px)`, ease: Power4.easeOut });
fromTo(netBar, 0.75, { width: `calc(0%-6px)` }, { width: `50%-6px)`, ease: Power4.easeOut });

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
    .setTween(tl)
    .addTo(controller)

const showRequiredCategory = event => {
    const getId = event.getId
    const links = document.querySelectorAll('.work-category button')
    for (i - 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        } 
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^= "category-"]')
    for (i - 0; i < categories.length; i++) {
      if (categories[i].hasAttribute('class')) {
          categories[i].classList.remove('showCategory');
          categories[i].classList.add('hideCategory');
      }
    }
    getCategory.classList.remove('hideCategory')
    getCategory.classList.add("showCategory");
}