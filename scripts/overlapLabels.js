gsap.timeline({
        defaults: {
            duration: 1.5,
            delay: 1,
            ease: 'power4'
        },
        yoyo: true,
        repeat: -1
    })
    .add('start')
    .to('.ball', {
        x: '50vw',
        scale: 2,
        rotate: 360,
        borderRadius: '50%'
    }, 'start')
    .to('.ball2', {
        x: '50vw',
        scale: 1.5,
        rotate: 360,
        borderRadius: '50%'
    }, 'start-=0.25')
    .to('.ball3', {
        x: '50vw',
        scale: 1.2,
        rotate: 360,
        borderRadius: '50%'
    }, 'start-=0.3')
    .to('.ball4', {
        x: '50vw',
        scale: 1.1,
        rotate: 360,
        borderRadius: '50%'
    }, 'start-=0.35')