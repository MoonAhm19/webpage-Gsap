window.addEventListener('mousemove', function(e) {
    gsap.to('.container #circle', {
        x: e.clientX,
        y: e.clientY
    })
})


var links1 = document.querySelector('.links1');
var links2 = document.querySelector('.links2');
var links3 = document.querySelector('.links3');
var links4 = document.querySelector('.links4');
var links5 = document.querySelector('.links5');

links1.addEventListener('mouseover', function(e) {
     gsap.to('#circle', {
        scale: 2
     })
})

links1.addEventListener('mouseleave', function(e) {
    gsap.to('#circle', {
       scale: 1
    })
})


links2.addEventListener('mouseover', function(e) {
    gsap.to('#circle', {
        scale: 2
     })
})

links2.addEventListener('mouseleave', function(e) {
    gsap.to('#circle', {
        scale: 1
     })
})

links3.addEventListener('mouseover', function(e) {
    gsap.to('#circle', {
        scale: 2
     })
})

links3.addEventListener('mouseleave', function(e) {
    gsap.to('#circle', {
        scale: 1
     })
})

links4.addEventListener('mouseover', function(e) {
    gsap.to('#circle', {
        scale: 2
     })
})
links4.addEventListener('mouseleave', function(e) {
    gsap.to('#circle', {
        scale: 1
     })
})

links5.addEventListener('mouseover', function(e) {
    gsap.to('#circle', {
        scale: 2
     })
})

links5.addEventListener('mouseleave', function(e) {
    gsap.to('#circle', {
        scale: 1
     })
})

