gsap
    .timeline({
        defaults: {
            duration: 2
        }
    }
    )
    .add('start')
    .to('.title',
        {
            delay:1,
            text: "Animación en Web con GSAP",
            color:'var(--red)'
        }
        , 'start-=0.1'
    )
    .to('p.brand>span>a', {
        delay: 0.2,
        text: "por Christian Velasco"
    })
    .to('ul',{
        delay:0.2,
        opacity:1
    })
