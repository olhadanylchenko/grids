var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1" })
    // trigger animation by adding a css class
    .setClassToggle("#circle", "zap")
    .triggerHook(0.4) // add indicators (requires plugin)
    .addTo(controller);

// document.addEventListener('scroll', (e) => {
//     console.log(e)
// }
// )