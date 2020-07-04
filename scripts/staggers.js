function coolAnimation() {
    gsap
        .timeline({
            defaults: {
                duration: 2,
                delay: 0.5,
                repeat: -1,
                stagger: 0.05,
                ease: 'elastic.inOut(3)'
            }
        })
        .to('.box', {
            opacity: 1,
            rotation: 360,
            scale: 1,
            borderRadius: '50%',
            y: 300
        })
        .from('.box', {
            duration: 1,
            opacity: 0,
            scale: 0.2,
            y: 500
        });
};
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    coolAnimation()
})

btn.addEventListener('click', () => {
    gsap
        .timeline({
            defaults: {
                duration: 0.5,
                ease: 'elastic',
                repeat: -1,
                yoyo: true
            }
        })
        .to('.ball', {
            scale: 0
        })
        .to('.ball', {
            scale: 1
        })
})