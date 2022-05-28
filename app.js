let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');

// rotate slide1 
gsap.to(slide1, 1, {
    rotate: '15deg',
    ease: 'power3.inOut'
});
// rotate slide2
gsap.to(slide2, 1, {
    rotate: '-15deg',
    x: '+5rem',
    ease: 'power3.inOut'
})