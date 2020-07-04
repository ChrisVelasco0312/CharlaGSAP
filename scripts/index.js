let start = document.querySelector('.box');
start.addEventListener('click', () => {
    gsap.to('.box', {
        duration: 0.5,
        y: 100,
        stagger: 0.1,
        ease: 'elastic.out'
    })
})

start.addEventListener('mouseover', () => {
    gsap.to('.box', {
        duration: 0.5,
        scale: 1.05,
        stagger: 0.1,
        ease: 'expo.out'
    })
})