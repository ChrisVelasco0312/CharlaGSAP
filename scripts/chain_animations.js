gsap
    .timeline({
        //addDefaults
        repeat: -1,
        defaults: {
            duration: 1,
            delay: 0.5
        }
    })
    .to('.ball', {
        x: '50vw',
        scale: 2,
        rotation: 180,
        backgroundColor: '#f3f',
        borderRadius: '50%',
        ease: 'bounce.out'
    })
    .to('.ball', {
        x: '80vw',
        scale: 1,
        rotation: 180,
        backgroundColor: '#03F3ff',
        borderRadius: '50%',
        ease: 'elastic.inOut'
    })
    .to('.ball', {
        x: '45vw',
        scale: 2,
        rotation: 180,
        backgroundColor: '#f3f',
        borderRadius: '50%',
        ease: 'back.inOut'
    })
    .to('.ball', {
        x: 0,
        scale: 0.5,
        rotation: 0,
        backgroundColor: '#03F3ff',
        borderRadius: 0,
        ease: 'elastic.inOut'
    })
    .to('.ball', {
        scale: 1,
        ease: 'elastic.inOut'
    })